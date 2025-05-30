import { FaLongArrowAltRight } from "react-icons/fa";
import Button from "../../../components/ui/Button";
import BookCard from "../../../components/ui/BookCard";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// Swiper modules
import { Autoplay, Pagination } from "swiper/modules";

const books = [
  {
    id: 1,
    title: "Flovely And Unicorn Erna",
    price: 30.0,
    author: "Alexander",
    rating: 3.4,
    image: "01.png",
    badge: null,
    discount: null,
    buttonAdd: "Add to Card",
  },
  {
    id: 2,
    title: "Simple Things You To Save BOOK",
    price: 30.0,
    oldPrice: 39.99,
    author: "Wilson",
    rating: 3.4,
    image: "01.png",
    badge: "Hot",
    discount: "-30%",
    buttonAdd: "Add to Card",
  },
  {
    id: 3,
    title: "Flovely And Unicorn Erna",
    price: 30.0,
    author: "Alexander",
    rating: 3.4,
    image: "01.png",
    badge: null,
    discount: null,
    buttonAdd: "Add to Card",
  },
  {
    id: 4,
    title: "Simple Things You To Save BOOK",
    price: 30.0,
    oldPrice: 39.99,
    author: "Wilson",
    rating: 3.4,
    image: "01.png",
    badge: "Hot",
    discount: "-30%",
    buttonAdd: "Add to Card",
  },
  {
    id: 5,
    title: "Flovely And Unicorn Erna",
    price: 30.0,
    author: "Alexander",
    rating: 3.4,
    image: "01.png",
    badge: null,
    discount: null,
    buttonAdd: "Add to Card",
  },
  {
    id: 6,
    title: "Simple Things You To Save BOOK",
    price: 30.0,
    oldPrice: 39.99,
    author: "Wilson",
    rating: 3.4,
    image: "01.png",
    badge: "Hot",
    discount: "-30%",
    buttonAdd: "Add to Card",
  },
];

const TopCategoryBook = () => {
  return (
    <section className="py-10 px-4 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center pb-5">
          <h2 className="text-3xl font-bold text-dark-text mb-6 text-center">
            Top Category Books
          </h2>
          <Button
            name={
              <span className="flex justify-center items-center gap-2">
                Explore More <FaLongArrowAltRight />
              </span>
            }
          />
        </div>

        <div>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {books.map((book, index) => (
              <SwiperSlide key={index}>
                <BookCard book={book} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TopCategoryBook;
