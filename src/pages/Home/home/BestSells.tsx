import { Headphones, Percent, RefreshCcw, ShieldCheck } from "lucide-react";
import Button from "../../../components/ui/Button";

const books = [
  {
    title: "The Hidden Mystery Behind",
    author: "Wilson",
    image: "01.png",
    tag: "Adventure",
    rating: 3.4,
    reviews: 25,
    oldPrice: 39.99,
    price: 30.0,
  },
  {
    title: "Qple GPad With Retina Sisplay",
    author: "Wilson",
    image: "01.png",
    tag: "Adventure",
    rating: 3.4,
    reviews: 25,
    oldPrice: 39.99,
    price: 30.0,
  },
  {
    title: "Simple Things You To Save BOOK",
    author: "Wilson",
    image: "01.png",
    tag: "Adventure",
    rating: 3.4,
    reviews: 25,
    oldPrice: 39.99,
    price: 30.0,
  },
];
const BestSells = () => {
  return (
    <section className="max-w-7xl mx-auto py-12">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-dark-text">Best Sellers</h2>
        <Button name="Explore More →" />
      </div>

      <div className="flex gap-5 justify-center items-center pt-10 py-8">
        {books.map((book, index) => (
          <div
            key={index}
            className=" bg-dark-card rounded-xl p-4 flex-shrink-0 flex gap-10 w-[410px]"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-32 h-40 object-cover rounded"
            />

            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-red-400 text-white text-xs px-2 py-1 rounded">
                    {book.tag}
                  </span>
                  <span className="flex items-center text-sm text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#facc15"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 mr-1 text-yellow-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 4.305 4.747.689a.562.562 0 01.312.958l-3.43 3.34.81 4.725a.562.562 0 01-.816.592L12 17.347l-4.268 2.261a.562.562 0 01-.816-.592l.81-4.725-3.43-3.34a.562.562 0 01.312-.958l4.747-.689 2.125-4.305z"
                      />
                    </svg>
                    {book.rating} <span className="ml-1">({book.reviews})</span>
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-dark-text mb-1">
                  {book.title}
                </h3>
                <p className="text-sm text-dark-muted-text mb-2">{book.author}</p>

                <div className="flex items-center gap-2">
                  <span className="text-red-500 font-bold text-lg">
                    ${book.price.toFixed(2)}
                  </span>
                  <span className="text-gray-400 line-through">
                    ${book.oldPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              <Button name="Add To Cart" />
                
              
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center ">
        <div className=" p-4 flex items-center gap-4 bg-dark-card">
          <RefreshCcw className="text-red-500 w-6 h-6" />
          <div>
            <h4 className="font-semibold text-sm text-dark-text">
              Return & Refund
            </h4>
            <p className="text-xs text-dark-muted-text">Money back guarantee</p>
          </div>
        </div>
        <div className=" p-4 flex items-center gap-4 bg-dark-card">
          <ShieldCheck className="text-red-500 w-6 h-6" />
          <div>
            <h4 className="font-semibold text-sm text-dark-text">
              Secure Payment
            </h4>
            <p className="text-xs text-dark-muted-text">30% off by subscribing</p>
          </div>
        </div>
        <div className=" p-4 flex items-center gap-4 bg-dark-card">
          <Headphones className="text-red-500 w-6 h-6" />
          <div>
            <h4 className="font-semibold text-sm text-dark-text">
              Quality Support
            </h4>
            <p className="text-xs text-dark-muted-text">Always online 24/7</p>
          </div>
        </div>
        <div className=" p-4 flex items-center gap-4 bg-dark-card">
          <Percent className="text-red-500 w-6 h-6" />
          <div>
            <h4 className="font-semibold text-sm text-dark-text">
              Daily Offers
            </h4>
            <p className="text-xs text-dark-muted-text">20% off by subscribing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSells;
