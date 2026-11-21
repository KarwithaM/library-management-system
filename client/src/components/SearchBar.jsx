import { useState, useEffect } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    // 1. Set a timer for 400ms
    const timer = setTimeout(() => {
      onSearch(query); // Pass the query up to the parent
    }, 400);

    // 2. Cleanup: If the user types again before 400ms, cancel the previous timer!
    return () => clearTimeout(timer);
  }, [query, onSearch]);

  return (
    <input
      type="text"
      placeholder="Search by title or author..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
    />
  );
}

export default SearchBar;