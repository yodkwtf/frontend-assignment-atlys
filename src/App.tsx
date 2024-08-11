import { Routes, Route } from 'react-router-dom';
import { AuthPage, PostsPage } from './pages';

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
