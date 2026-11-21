import { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

function BookGrid({ searchQuery, genreFilter, sortBy }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const params = new URLSearchParams();
    if (searchQuery) params.append('search', searchQuery);
    if (genreFilter) params.append('genreId', genreFilter);

    const queryString = params.toString();
    const url = `${import.meta.env.VITE_API_URL}/books${queryString ? '?' + queryString : ''}`;

    axios.get(url)
      .then((response) => {
        let sortedBooks = response.data;
        if (sortBy === 'title') {
          sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortBy === 'author') {
          sortedBooks.sort((a, b) => a.author.localeCompare(b.author));
        }
        setBooks(sortedBooks);
      })
      .catch((err) => {
        console.error("Failed to fetch books:", err);
        setError("Failed to load books. Please try again.");
      })
      .finally(() => setLoading(false));

  }, [searchQuery, genreFilter, sortBy]);

  // 1. Error State
  if (error) {
    return <div className="text-center text-red-500 py-10">{error}</div>;
  }

  // 2. Loading State (Skeleton UI - Stretch Goal!)
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border border-gray-200 rounded-lg p-6 bg-white animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
          </div>
        ))}
      </div>
    );
  }

  // 3. Empty State
  if (books.length === 0) {
    return <p className="text-center text-gray-500 text-xl py-10">No books found.</p>;
  }

  // 4. Success State
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookGrid;