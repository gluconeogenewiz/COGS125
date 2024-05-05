import React, { useState } from 'react';

function CommentForm() {
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Comment submitted: ${comment}`);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Comment:</label>
      <input
        type="text"
        id="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Submit Comment</button>
    </form>
  );
}

export default CommentForm;
