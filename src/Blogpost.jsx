import React from 'react';

const BlogPost = ({ post, onEdit }) => {
  return (
    <div className="blog-post bg-white shadow-lg rounded-lg p-6 space-y-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
      <img className="w-full h-64 object-cover rounded-lg" src={post.image} alt={post.title} />
      <p className="text-gray-700 leading-relaxed">{post.content}</p>
      <p className="text-gray-500 text-sm italic">{post.date}</p>
      <button 
        onClick={() => onEdit(post)}
        className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg"
      >
        Edit
      </button>
    </div>
  );
};

export default BlogPost;
