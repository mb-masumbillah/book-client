import { CgShoppingCart } from "react-icons/cg";

const ProgressBar = ({ value = 0, max = 100 }) => {
  const percentage = Math.min(100, (value / max) * 100);
  return (
    <div className=" bg-gray-200 rounded-full h-2">
      <div
        className="bg-green-500 h-2 rounded-full transition-all duration-300"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

const books = [
  {
    title: "Qple GPad With Retina Sisplay",
    author: "Wilson",
    image: "01.png",
    tag: "Adventure",
    rating: 4,
    reviews: 459,
    oldPrice: 39.99,
    price: 30.0,
    stock: 10,
  },
  {
    title: "Qple GPad With Retina Sisplay",
    author: "Hawkins",
    image: "01.png",
    tag: "Adventure",
    rating: 4,
    reviews: 459,
    oldPrice: 39.99,
    price: 30.0,
    stock: 15,
  },
  {
    title: "Qple GPad With Retina Sisplay",
    author: "Wilson",
    image: "01.png",
    tag: "Adventure",
    rating: 4,
    reviews: 459,
    oldPrice: 39.99,
    price: 30.0,
    stock: 20,
  },
];
const FeaturedBook = () => {
  return (
    <section className="bg-dark-card py-16">
      <div className="max-w-[93.75rem] mx-auto">
        <h2 className="text-center text-3xl font-bold mb-8">Featured Books</h2>
        <div className="flex justify-center items-center gap-10  pt-10">
          {books.map((book, index) => (
            <div
              key={index}
              className="w-full rounded-xl bg-[#2D323B] p-4 transition hover:shadow-lg flex gap-4"
            >
              <img
                src={book.image}
                alt={book.title}
                className="h-48 w-36 object-cover rounded"
              />
              <div className="flex-1 flex flex-col justify-between text-dark-text">
                <div>
                  <div className="flex justify-between items-center">
                    <span className="bg-red-200 text-red-700 text-xs px-2 py-1 rounded">
                      {book.tag}
                    </span>
                    <button className="bg-[#344656] text-dark-button font-bold px-2 py-1 rounded">
                      Read
                    </button>
                  </div>
                  <h3 className="text-lg font-bold mt-2 text-left">
                    {book.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-dark-muted-text mt-1">
                    <img
                      src="https://i.pravatar.cc/20"
                      alt="author"
                      className="rounded-full w-5 h-5"
                    />
                    {book.author}
                  </div>
                  <div className="flex items-center mt-2 text-sm text-dark-muted-text">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={i < book.rating ? "#f97316" : "#e5e7eb"}
                        className="w-4 h-4"
                      >
                        <path d="M12 .587l3.668 7.568L24 9.423l-6 5.854L19.335 24 12 19.897 4.665 24 6 15.277 0 9.423l8.332-1.268z" />
                      </svg>
                    ))}
                    <span className="ml-1">({book.reviews})</span>
                  </div>
                  <div className="flex items-center mt-3 gap-2">
                    <span className="text-lg font-bold text-red-500">
                      ${book.price.toFixed(2)}
                    </span>
                    <span className="line-through text-gray-400">
                      ${book.oldPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
                <div className="mt-3 flex justify-between items-center gap-8">
                  <div className="w-full">
                    <ProgressBar value={book.stock} max={25} />
                    <p className="text-xs text-dark-muted-text mt-1">
                      {book.stock} Books In Stock
                    </p>
                  </div>
                  <button className="bg-[#344656] text-dark-button rounded-full p-2">
                    <CgShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBook;
