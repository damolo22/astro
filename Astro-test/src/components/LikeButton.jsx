import React, { useState } from 'react';

export default function LikeButton({ initialLikes }) {
    const [likes, setLikes] = useState(initialLikes);
    const [isLiked, setIsLiked] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleLike = () => {
        if (isLiked) {
            setLikes(likes - 1);
            setIsLiked(false);
        } else {
            setLikes(likes + 1);
            setIsLiked(true);

            // Trigger a tiny animation!
            setIsAnimating(true);
            setTimeout(() => setIsAnimating(false), 300);
        }
    };

    return (
        <div style={styles.container}>
            <button
                onClick={handleLike}
                style={{
                    ...styles.button,
                    color: isLiked ? '#ec4899' : '#64748b',
                    transform: isAnimating ? 'scale(1.2)' : 'scale(1)',
                }}
                aria-label={isLiked ? "Unlike" : "Like"}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={isLiked ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            </button>
            <span style={styles.count}>{likes} {likes === 1 ? 'like' : 'likes'}</span>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
    },
    button: {
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '0.4rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    },
    count: {
        fontWeight: 800,
        fontSize: '0.95rem',
        color: '#0f172a',
    }
};
