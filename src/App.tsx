import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import PostsPage from './pages/PostsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/posts" element={<PostsPage />} />
      </Routes>
    </div>
  );
}

export default App;
