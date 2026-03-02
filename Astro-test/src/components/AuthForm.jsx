import { useState } from 'react';

const API = 'http://127.0.0.1:8000/api';

export default function AuthForm() {
    const [tab, setTab] = useState('login');   // 'login' | 'register'
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');
        setLoading(true);

        const endpoint = tab === 'login' ? '/login' : '/register';
        const body = tab === 'login'
            ? { email, password }
            : { name, email, password, password_confirmation: confirm };

        try {
            const res = await fetch(`${API}${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(body),
            });
            const data = await res.json();

            if (!res.ok) {
                // Laravel validation errors come as { errors: { field: [msg] } } or { message }
                const first = data.errors
                    ? Object.values(data.errors)[0][0]
                    : data.message || 'Something went wrong.';
                setError(first);
                return;
            }

            localStorage.setItem('auth_token', data.token);
            localStorage.setItem('auth_user', JSON.stringify(data.user));
            window.location.href = '/dashboard';
        } catch {
            setError('Could not reach the API. Is Laravel running?');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="auth-card">
            {/* ── Tab switcher ── */}
            <div className="auth-tabs">
                <button
                    className={`auth-tab${tab === 'login' ? ' active' : ''}`}
                    onClick={() => { setTab('login'); setError(''); }}
                >
                    Sign In
                </button>
                <button
                    className={`auth-tab${tab === 'register' ? ' active' : ''}`}
                    onClick={() => { setTab('register'); setError(''); }}
                >
                    Create Account
                </button>
            </div>

            {/* ── Form ── */}
            <form onSubmit={handleSubmit} className="auth-form">
                {tab === 'register' && (
                    <div className="field">
                        <label htmlFor="auth-name">Full Name</label>
                        <input
                            id="auth-name"
                            type="text"
                            placeholder="SarahFitness"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                    </div>
                )}

                <div className="field">
                    <label htmlFor="auth-email">Email</label>
                    <input
                        id="auth-email"
                        type="email"
                        placeholder="you@smoothie.social"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="field">
                    <label htmlFor="auth-password">Password</label>
                    <input
                        id="auth-password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={e => setPass(e.target.value)}
                        required
                    />
                </div>

                {tab === 'register' && (
                    <div className="field">
                        <label htmlFor="auth-confirm">Confirm Password</label>
                        <input
                            id="auth-confirm"
                            type="password"
                            placeholder="••••••••"
                            value={confirm}
                            onChange={e => setConfirm(e.target.value)}
                            required
                        />
                    </div>
                )}

                {error && <p className="auth-error">{error}</p>}

                <button type="submit" className="auth-submit" disabled={loading}>
                    {loading ? 'Please wait…' : tab === 'login' ? 'Sign In' : 'Create Account'}
                </button>

                {tab === 'login' && (
                    <p className="auth-hint">
                        Test accounts: <strong>sarah@smoothie.social</strong> or <strong>green@smoothie.social</strong> — password: <code>password</code>
                    </p>
                )}
            </form>

            <style>{`
        .auth-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
        }
        .auth-tabs {
          display: flex;
          border-bottom: 1px solid var(--border);
        }
        .auth-tab {
          flex: 1;
          padding: 1rem;
          background: none;
          border: none;
          font-family: inherit;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-muted);
          cursor: pointer;
          transition: color 0.2s, border-bottom 0.2s;
          border-bottom: 2px solid transparent;
        }
        .auth-tab.active {
          color: var(--accent);
          border-bottom: 2px solid var(--accent);
        }
        .auth-form {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .field { display: flex; flex-direction: column; gap: 0.35rem; }
        .field label { font-size: 0.85rem; font-weight: 600; color: var(--text-muted); }
        .field input {
          padding: 0.7rem 0.9rem;
          border: 1px solid var(--border);
          border-radius: 8px;
          font-family: inherit;
          font-size: 0.95rem;
          color: var(--text);
          background: var(--bg);
          transition: border-color 0.2s;
          outline: none;
        }
        .field input:focus { border-color: var(--accent); }
        .auth-error {
          margin: 0;
          padding: 0.7rem 0.9rem;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 8px;
          color: #dc2626;
          font-size: 0.9rem;
        }
        .auth-submit {
          padding: 0.8rem;
          background: var(--accent);
          color: #fff;
          border: none;
          border-radius: 8px;
          font-family: inherit;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s, opacity 0.2s;
        }
        .auth-submit:hover:not(:disabled) { background: var(--accent-hover); }
        .auth-submit:disabled { opacity: 0.6; cursor: not-allowed; }
        .auth-hint {
          margin: 0;
          font-size: 0.8rem;
          color: var(--text-muted);
          text-align: center;
          line-height: 1.5;
        }
        .auth-hint code {
          background: var(--bg);
          padding: 0.1em 0.4em;
          border-radius: 4px;
          font-size: 0.85em;
        }
      `}</style>
        </div>
    );
}
