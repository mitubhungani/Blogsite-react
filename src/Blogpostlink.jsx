import React from 'react';
import BlogPost from './Blogpost';

const BlogPostList = ({ posts, onEdit }) => {
  return (
    <div className="blog-post-list grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">
      {posts.map(post => (
        <BlogPost key={post.id} post={post} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default BlogPostList;
