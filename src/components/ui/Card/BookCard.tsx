import { useState } from "react";
import { FaExpand, FaEye, FaHeart, FaStar } from "react-icons/fa";
import type { TBookCard } from "../../../types/bookCard.types";

type BookCardProps = {
  book: TBookCard;
};

const BookCard = ({ book }: BookCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative bg-[#2d323b]  rounded-lg transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image & Hover Icons */}
      <div className="relative rounded-lg w-full h-64 bg-[#343A46] flex items-center justify-center overflow-hidden">
        {/* Book Image with Zoom */}
        <figure>
          <img
            src={book.image}
            alt={book.title}
            className={`w-40 transition-transform object-cover duration-500 ease-in-out ${
              hovered ? "scale-110" : "scale-100"
            }`}
          />
        </figure>

        {/* Hover Action Icons */}
        <div
          className={`absolute top-2 right-2 flex flex-col gap-2 transition-all duration-300 ease-in-out ${
            hovered
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
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

        {/* Badge */}
        {book.badge && (
          <span className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded">
            {book.badge}
          </span>
        )}

        {/* Discount */}
        {book.discount && (
          <span className="absolute top-10 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {book.discount}
          </span>
        )}
      </div>

      <div className="p-4">
        {/* Book Details */}
        <div className="mt-4 text-sm text-dark-text">Design Low Book</div>
        <h3 className="font-bold text-lg text-dark-text">{book.title}</h3>

        <div className="text-dark-text mt-1">
          ${book.price.toFixed(2)}
          {book.oldPrice && (
            <span className="text-sm text-red-500 line-through ml-2">
              ${book.oldPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Author */}
        <div className="flex items-center gap-2 mt-2 text-sm text-dark-text">
          <img
            src={`https://i.pravatar.cc/30?u=${book.author}`}
            alt={book.author}
            className="w-6 h-6 rounded-full"
          />
          <span>{book.author}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center text-sm text-dark-text mt-1">
          <FaStar className="text-yellow-500 mr-1" /> {book.rating} (25)
        </div>
      </div>
      {/* Add To Cart Button */}

      <button
        className={`group overflow-hidden absolute top-60 left-0 right-0 rounded-b-lg bg-[#343A46] text-white py-2 text-sm font-semibold transition-all duration-300 ease-in-out border border-dark-button ${
          hovered
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}
      >
        <span
          className={` relative z-10 transition-colors duration-300 group-hover:text-dark-bg `}
        >
          Add To Cart
        </span>

        <span className="absolute left-0 top-0 h-full w-full bg-dark-button transition-transform duration-700 ease-in-out translate-x-[-100%] group-hover:translate-x-0 rounded-b-lg"></span>
      </button>
    </div>
  );
};

export default BookCard;
