import React, { useState, useEffect } from 'react';

const BlogPostForm = ({ onSave, postToEdit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (postToEdit) {
      setTitle(postToEdit.title);
      setContent(postToEdit.content);
      setImage(postToEdit.image);
      setDate(postToEdit.date);
    }
  }, [postToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      content,
      image,
      date,
      id: postToEdit ? postToEdit.id : Date.now(),
    };
    onSave(newPost);
    setTitle('');
    setContent('');
    setImage('');
    setDate('');
  };

  return (
    <form 
      className="blog-post-form max-w-lg mx-auto bg-white p-8 rounded-lg shadow-2xl space-y-6 transition-all duration-300"
      onSubmit={handleSubmit}
    >
      <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">Create Blog Post</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
        <input
          type="text"
          placeholder="Enter the title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
        <textarea
          placeholder="Enter the content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows="6"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
        <input
          type="text"
          placeholder="Enter the image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
        />
      </div>
      <button 
        type="submit" 
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg"
      >
        Save
      </button>
    </form>
  );
};

export default BlogPostForm;
