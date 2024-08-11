import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthPage, PostsPage } from './pages';

const App: React.FC = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/posts" element={<PostsPage />} />
      </Routes>
    </main>
  );
};

export default App;
