// const { Schema } = require('mongoose');

// const postSchema = new Schema({
//     title: [
//         {
//             type: String,
//             required: true,
//         }
//     ],
//     content: [
//         {
//             type: String,
//             required: true,
//         }
//     ],
//     image: [
//         {
//             type: String,
//             required: true,
//         }
//     ],
//     category: [
//       {
//           type: String,
//           required: true,
//       }
//   ],
//     createdAt: {
//         type: Date,
//         default: Date.now,
//         get: (timestamp) => dateFormat(timestamp),
//       },
//       comments: [
//         {
//           commentText: {
//             type: String,
//             required: true,
//             minlength: 1,
//             maxlength: 280,
//           },
//           commentAuthor: {
//             type: String,
//             required: true,
//           },
//           createdAt: {
//             type: Date,
//             default: Date.now,
//             get: (timestamp) => dateFormat(timestamp),
//           },
//         },
//       ],
// });

// const Post = model('Post', postSchema);

// module.exports = Post;