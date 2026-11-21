import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import BookGrid from '../components/BookGrid';

function HomePage() {
  // HomePage holds the shared filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const [sortBy, setSortBy] = useState("title");

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Library Catalog</h1>

      {/* Controls Section */}
      <div className="mb-8 flex gap-4 flex-wrap">
        <div className="flex-1 min-w-[200px]">
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

      {/* Render the Grid Component */}
      <BookGrid searchQuery={searchQuery} genreFilter={genreFilter} sortBy={sortBy} />
    </div>
  );
}

export default HomePage;