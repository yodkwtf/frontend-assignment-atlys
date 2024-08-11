import { Auth } from '../components';
import { Modal } from '../components/common';
import { CreatePost, Post, PostHeader } from '../components/posts';
import posts from '../data/posts';

const PostsPage: React.FC = () => {
  return (
    <>
      <div className="grid min-h-screen bg-custom-darkest">
        <div className="w-full max-w-3xl mx-auto p-8">
          <PostHeader />

          <div className="grid gap-6">
            <CreatePost />
            {posts.map((post) => (
              <Post key={post.id} {...post} />
            ))}
          </div>
        </div>
      </div>

      <Modal>
        <Auth />
      </Modal>
    </>
  );
};

export default PostsPage;
