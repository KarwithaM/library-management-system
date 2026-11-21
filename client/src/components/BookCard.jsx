import { Link } from 'react-router-dom';

function BookCard({ book }) {
  return (
    <Link to={`/books/${book.id}`} className="block no-underline text-inherit">
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
  );
}

export default BookCard;