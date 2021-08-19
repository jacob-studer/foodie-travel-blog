const { Schema } = require('mongoose');

const postSchema = new Schema({
    content: [
        {
            type: String,
            required: true,
        }
    ],
})