import { FaLongArrowAltRight } from "react-icons/fa";
import Button from "../../../components/ui/Button";
import BookCard from "../../../components/ui/Card/BookCard";

const books = [
  {
    id: 1,
    title: "Flovely And Unicorn Erna",
    price: 30.0,
    author: "Alexander",
    rating: 3.4,
    image: "https://i.ibb.co/r6HbQyL/book1.png",
    badge: null,
    discount: null,
  },
  {
    id: 2,
    title: "Simple Things You To Save BOOK",
    price: 30.0,
    oldPrice: 39.99,
    author: "Wilson",
    rating: 3.4,
    image: "https://i.ibb.co/r2CLgLz/book2.png",
    badge: "Hot",
    discount: "-30%",
  },
  // Add more book objects like above
];

const TopCategoryBook = () => {
  return (
    <section className="py-10 px-4 bg-dark-card">
      <div className="max-w-[80rem] mx-auto">
        <div className="flex justify-between items-center pb-5">
          <h2 className="text-3xl font-bold text-dark-text mb-6 text-center">
            Top Category Books
          </h2>
          <Button name={<span className="flex justify-center items-center gap-2">Explore More <FaLongArrowAltRight /></span>}/>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategoryBook;
