import { useState, useEffect } from 'react';

const API = 'http://127.0.0.1:8000/api';

export default function UserMenu() {
    const [user, setUser] = useState(null);   // null = loading
    const [ready, setReady] = useState(false);  // avoid SSR flash
    const [loggingOut, setOut] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('auth_token');

        if (!token) {
            setReady(true);
            return;
        }

        // Validate the stored token by calling /api/me
        fetch(`${API}/me`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        })
            .then(r => r.ok ? r.json() : null)
            .then(data => {
                if (data?.user) setUser(data.user);
                else {
                    // Token invalid — clean up
                    localStorage.removeItem('auth_token');
                    localStorage.removeItem('auth_user');
                }
            })
            .catch(() => { /* network error — show sign in */ })
            .finally(() => setReady(true));
    }, []);

    async function logout() {
        setOut(true);
        const token = localStorage.getItem('auth_token');

        try {
            await fetch(`${API}/logout`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                },
            });
        } catch { /* ignore network errors */ }

        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_user');
        window.location.href = '/';
    }

    // Don't render anything until we know the auth state (avoids flash)
    if (!ready) return <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>…</span>;

    if (!user) {
        return (
            <a href="/login" className="nav-sign-in">Sign In</a>
        );
    }

    return (
        <div className="user-menu">
            <img
                src={`https://api.dicebear.com/7.x/notionists/svg?seed=${encodeURIComponent(user.name)}`}
                alt={user.name}
                className="user-avatar"
            />
            <a href="/dashboard" className="user-name">{user.name}</a>
            <button
                onClick={logout}
                disabled={loggingOut}
                className="logout-btn"
                title="Sign out"
            >
                {loggingOut ? '…' : '↩'}
            </button>

            <style>{`
        .user-menu {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .user-avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: var(--bg);
          border: 2px solid var(--accent);
        }
        .user-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text);
          text-decoration: none;
        }
        .user-name:hover { text-decoration: underline; }
        .logout-btn {
          background: none;
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 0.2rem 0.5rem;
          cursor: pointer;
          font-size: 0.85rem;
          color: var(--text-muted);
          transition: color 0.2s, border-color 0.2s;
        }
        .logout-btn:hover { color: var(--accent); border-color: var(--accent); }
        .nav-sign-in {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--accent);
          text-decoration: none;
          padding: 0.4rem 0.8rem;
          border: 1.5px solid var(--accent);
          border-radius: 8px;
          transition: background 0.2s, color 0.2s;
        }
        .nav-sign-in:hover { background: var(--accent); color: #fff; }
      `}</style>
        </div>
    );
}
