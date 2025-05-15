import { useState } from "react";
import { FaExpand, FaEye, FaHeart, FaStar } from "react-icons/fa";
import type { TBookCard } from "../../../types/bookCard.types";

type BookCardProps = {
  book: TBookCard;
};


const BookCard = ({ book } : BookCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative bg-pink-50 p-4 rounded-lg transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full h-64 flex items-center justify-center">
        <img src={book.image} alt={book.title} className="max-h-full" />

        {hovered && (
          <div className="absolute top-2 right-2 flex flex-col gap-2">
            <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
              <FaHeart className="text-gray-600" />
            </button>
            <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
              <FaExpand className="text-gray-600" />
            </button>
            <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
              <FaEye className="text-gray-600" />
            </button>
          </div>
        )}

        {book.badge && (
          <span className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded">
            {book.badge}
          </span>
        )}

        {book.discount && (
          <span className="absolute top-10 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {book.discount}
          </span>
        )}
      </div>

      <div className="mt-4 text-sm text-gray-500">Design Low Book</div>
      <h3 className="font-bold text-lg text-gray-800">{book.title}</h3>

      <div className="text-gray-800 mt-1">
        ${book.price.toFixed(2)}
        {book.oldPrice && (
          <span className="text-sm text-red-500 line-through ml-2">
            ${book.oldPrice.toFixed(2)}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
        <img
          src={`https://i.pravatar.cc/30?u=${book.author}`}
          alt={book.author}
          className="w-6 h-6 rounded-full"
        />
        <span>{book.author}</span>
      </div>

      <div className="flex items-center text-sm text-gray-700 mt-1">
        <FaStar className="text-red-500 mr-1" /> {book.rating} (25)
      </div>

      {hovered && (
        <button className="absolute bottom-0 left-0 right-0 rounded-none bg-rose-400 hover:bg-rose-500">
          Add To Cart
        </button>
      )}
    </div>
  );
};
export default BookCard;
