import React, { useState } from 'react';

const CommentForm = () => {
  const [commentText, setCommentText] = useState('');

//   const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // try {
    //   const { data } = await addComment({
    //     variables: { thoughtId, commentText },
    //   });

    //   setCommentText('');
    // } catch (err) {
    //   console.error(err);
    // }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'commentText') {
      setCommentText(value);
    }
  };

  return (
    <div>
      <h4>Leave a Comment:
      </h4>
      <form
        onSubmit={handleFormSubmit}
      >
        <div>
          <textarea
            name="commentText"
            placeholder="..."
            value={commentText}
            onChange={handleChange}
          >
          </textarea>
        </div>

        <div>
          <button type="submit">
            Add Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
