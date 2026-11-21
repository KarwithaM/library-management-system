import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function BookDetail() {
  // 1. Grab the ID from the URL (e.g., /books/93 -> id is "93")
  const { id } = useParams();
  const navigate = useNavigate(); // Used to go back programmatically
  
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  // 2. Fetch the specific book
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/books/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => console.error("Failed to fetch book details:", err))
      .finally(() => setLoading(false));
  }, [id]); // Re-run if the ID in the URL changes

  if (loading) return <div className="p-8 text-center">Loading book details...</div>;
  if (!book) return <div className="p-8 text-center">Book not found.</div>;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)} 
        className="mb-6 text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
      >
        ← Back to Catalog
      </button>

      {/* Book Details */}
      <div className="border border-gray-200 rounded-lg p-8 shadow-sm bg-white">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{book.title}</h1>
        <p className="text-xl text-gray-600 mb-4">by {book.author}</p>
        
        <div className="flex gap-4 mb-6">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {book.genre?.name || 'Unknown Genre'}
          </span>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
            ISBN: {book.isbn}
          </span>
        </div>

        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold mb-2">Availability</h3>
          <p className="text-gray-700">
            {book.availableCopies} copies available out of {book.totalCopies} total.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;