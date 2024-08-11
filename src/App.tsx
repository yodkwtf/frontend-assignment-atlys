import { Routes, Route } from 'react-router-dom';
import { AuthPage, PostsPage } from './pages';
import { Portfolio } from './components';

const App: React.FC = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/posts" element={<PostsPage />} />
      </Routes>
      <Portfolio />
    </main>
  );
};

export default App;
