import { Auth, CreatePost, Post } from '../components';
import { Modal } from '../components/common';
import posts from '../data/posts';

const PostsPage = () => {
  return (
    <div className="grid min-h-screen bg-custom-darkest">
      <div className="w-full max-w-3xl mx-auto p-8">
        <header>
          <h2 className="text-lg text-custom-primary">Hello Jane</h2>
          <p className="text-base text-custom-secondary my-4 mx-0 mb-10 max-w-md">
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
