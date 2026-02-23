import React, { useState } from 'react';

export default function CommentSection({ initialComments = [] }) {
    const [comments, setComments] = useState(initialComments);
    const [newComment, setNewComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;

        // Simulate instantly adding the comment to the API
        const commentObj = {
            id: Date.now(),
            author: 'You', // Simulated current logged-in user
            text: newComment.trim()
        };

        setComments([...comments, commentObj]);
        setNewComment('');
    };

    return (
        <div style={styles.container}>
            {/* List Existing Comments */}
            <div style={styles.commentList}>
                {comments.map((comment) => (
                    <div key={comment.id} style={styles.commentBubble}>
                        <strong style={styles.author}>{comment.author}</strong>
                        <span style={styles.text}>{comment.text}</span>
                    </div>
                ))}
                {comments.length === 0 && (
                    <p style={styles.empty}>No comments yet. Be the first to start the conversation!</p>
                )}
            </div>

            {/* Add New Comment Form */}
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                    style={styles.input}
                />
                <button
                    type="submit"
                    disabled={!newComment.trim()}
                    style={{
                        ...styles.button,
                        opacity: newComment.trim() ? 1 : 0.5,
                        cursor: newComment.trim() ? 'pointer' : 'default'
                    }}
                >
                    Post
                </button>
            </form>
        </div>
    );
}

const styles = {
    container: {
        marginTop: '1rem',
        borderTop: '1px solid #e2e8f0',
        paddingTop: '1rem',
    },
    commentList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.6rem',
        marginBottom: '1rem',
        maxHeight: '150px',
        overflowY: 'auto',
    },
    commentBubble: {
        fontSize: '0.9rem',
        lineHeight: '1.4',
        color: '#0f172a',
    },
    author: {
        fontWeight: '700',
        marginRight: '0.4rem',
    },
    text: {
        color: '#334155',
    },
    empty: {
        fontSize: '0.85rem',
        color: '#94a3b8',
        fontStyle: 'italic',
        margin: 0,
    },
    form: {
        display: 'flex',
        gap: '0.5rem',
    },
    input: {
        flex: 1,
        padding: '0.6rem 0.8rem',
        borderRadius: '20px',
        border: '1px solid #cbd5e1',
        background: '#f8fafc',
        fontSize: '0.9rem',
        outline: 'none',
    },
    button: {
        background: '#ec4899', // Matches the brand pink
        color: '#fff',
        border: 'none',
        borderRadius: '20px',
        padding: '0 1rem',
        fontWeight: '600',
        transition: 'opacity 0.2s',
    }
};
