import React, { useState } from 'react';

export default function ReactCounter({ initialCount = 0 }) {
    const [count, setCount] = useState(initialCount);

    return (
        <div className="react-counter" style={styles.container}>
            <div style={styles.header}>
                <span style={styles.icon}>⚛️</span>
                <h3 style={styles.title}>React Island</h3>
            </div>
            <p style={styles.description}>
                This is a fully interactive React component running inside an Astro page!
            </p>
            <div style={styles.counterBox}>
                <button
                    onClick={() => setCount(c => c - 1)}
                    style={styles.button}
                >
                    -
                </button>
                <span style={styles.count}>{count}</span>
                <button
                    onClick={() => setCount(c => c + 1)}
                    style={styles.button}
                >
                    +
                </button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        background: 'rgba(97, 218, 251, 0.1)',
        border: '1px solid rgba(97, 218, 251, 0.4)',
        borderRadius: '12px',
        padding: '1.5rem',
        maxWidth: '400px',
        fontFamily: 'system-ui, sans-serif',
        marginTop: '2rem',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '0.5rem',
    },
    title: {
        margin: 0,
        color: '#61dafb',
        fontSize: '1.2rem',
    },
    icon: {
        fontSize: '1.5rem',
    },
    description: {
        margin: '0 0 1.5rem 0',
        color: '#e2e8f0',
        fontSize: '0.9rem',
        lineHeight: 1.5,
    },
    counterBox: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
    },
    button: {
        background: '#61dafb',
        color: '#000',
        border: 'none',
        borderRadius: '6px',
        width: '36px',
        height: '36px',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    count: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#fff',
        minWidth: '2ch',
        textAlign: 'center',
    },
};
