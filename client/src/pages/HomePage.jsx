import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

function HomePage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const [sortBy, setSortBy] = useState("title"); // 👈 ADD THIS sortBy state

  useEffect(() => {
    setLoading(true);
    
    const params = new URLSearchParams();
    if (searchQuery) params.append('search', searchQuery);
    if (genreFilter) params.append('genreId', genreFilter);
    
    const queryString = params.toString();
    // 1. FIX: Only add '?' if there are actually parameters
    const url = `${import.meta.env.VITE_API_URL}/books${queryString ? '?' + queryString : ''}`;
    
    console.log("🔍 Fetching from URL:", url); // 👈 Debug log

    axios.get(url)
      .then((response) => {
        console.log("✅ Received books:", response.data); // 👈 Debug log
        let sortedBooks = response.data;
    
    // 👇 ADD THIS SORTING LOGIC
        if (sortBy === 'title') {
            sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortBy === 'author') {
            sortedBooks.sort((a, b) => a.author.localeCompare(b.author));
        }
        
        setBooks(sortedBooks);
      })
      .catch((error) => {
        console.error("❌ Failed to fetch books:", error);
      })
      .finally(() => setLoading(false));
      
  }, [searchQuery, genreFilter, sortBy]);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Library Catalog</h1>
      
      {/* CONTROLS */}
      <div className="mb-8 flex gap-4">
        <div className="flex-1">
          <SearchBar onSearch={setSearchQuery} />
        </div>
        
        <select 
          value={genreFilter} 
          onChange={(e) => setGenreFilter(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        >
          <option value="">All Genres</option>
          <option value="26">Fiction</option>
          <option value="27">Science</option>
          <option value="28">History</option>
          <option value="29">Technology</option>
        </select>

        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        >
          <option value="title">Sort by Title</option>
          <option value="author">Sort by Author</option>
        </select>
      </div>

      {/* CONTENT */}
      {loading ? (
        <div className="text-center text-xl text-gray-500 py-10">Updating catalog...</div>
      ) : books.length === 0 ? (
        <p className="text-center text-gray-500 text-xl py-10">No books found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <Link 
              to={`/books/${book.id}`} 
              key={book.id} 
              className="block no-underline text-inherit"
            >
              <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow bg-white h-full">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{book.title}</h2>
                <p className="text-gray-600 mb-1">by {book.author}</p>
                <p className="text-sm text-blue-600 font-medium mb-3">
                  {book.genre?.name || 'Unknown Genre'}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>Available: {book.availableCopies} / {book.totalCopies}</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">ID: {book.id}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;