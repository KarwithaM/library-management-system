import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookDetail from './pages/BookDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* 👇 This route has a dynamic :id segment */}
      <Route path="/books/:id" element={<BookDetail />} /> 
    </Routes>
  );
}

export default App;