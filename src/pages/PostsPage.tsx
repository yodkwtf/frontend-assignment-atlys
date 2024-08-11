import styled from 'styled-components';
import CreatePost from '../components/CreatePost';
import posts from '../data/posts';
import Post from '../components/Post';
import { useAppContext } from '../context';
import Modal from '../components/common/Modal';
import Auth from '../components/Auth';

type AppContext = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
};

const PostsPage = () => {
  const { showModal, setShowModal } = useAppContext() as AppContext;

  return (
    <Container>
      <div className="section-center">
        <header>
          <h2>Hello Jane</h2>
          <p>
            How are you doing today? Would you like to share something with the
            community 🤗
          </p>
        </header>

        <div className="post-list">
          <CreatePost />
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      </div>

      <Modal>
        <Auth />
      </Modal>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  min-height: 100vh;
  background: #131319;

  .section-center {
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
    padding: 2rem;
  }

  header {
    h2 {
      font-size: 28px;
      color: #c5c7ca;
    }

    p {
      font-size: 16px;
      color: #7f8084;
      margin: 1rem 0 2.5rem;
      max-width: 500px;
    }
  }

  .post-list {
    display: grid;
    row-gap: 1.5rem;
  }
`;

export default PostsPage;
