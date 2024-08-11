import React from 'react';
import CreatePost from '../components/CreatePost';
import posts from '../data/posts';
import Post from '../components/Post';
import Modal from '../components/common/Modal';
import Auth from '../components/Auth';

const PostsPage = () => {
  return (
    <div className="grid min-h-screen bg-[#131319]">
      <div className="w-full max-w-3xl mx-auto p-8">
        <header>
          <h2 className="text-lg text-[#c5c7ca]">Hello Jane</h2>
          <p className="text-base text-[#7f8084] my-4 mx-0 mb-10 max-w-md">
            How are you doing today? Would you like to share something with the
            community 🤗
          </p>
        </header>

        <div className="grid gap-6">
          <CreatePost />
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      </div>

      <Modal>
        <Auth />
      </Modal>
    </div>
  );
};

export default PostsPage;
