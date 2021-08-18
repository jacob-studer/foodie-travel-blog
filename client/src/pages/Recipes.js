import React from 'react';
import CommentForm from '../components/CommentForm'

const Recipes = () => {
    return (
        <div>
            {/* Need to map through the commentData coming from state, look at the way userData is mapped through in googlebooks? */}
            <CommentForm />
        </div>
    )
}

export default Recipes