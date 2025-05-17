import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// Swiper modules
import { Autoplay, Pagination } from "swiper/modules";
import { FaLongArrowAltRight } from "react-icons/fa";
import Button from "../../../components/ui/Button";
import BookCard from "../../../components/ui/BookCard";

const books = [
  {
    id: 1,
    title: "Flovely And Unicorn Erna",
    author: "Alexander",
    rating: 3.4,
    image: "01.png",
    badge: null,
    buttonSave: "Save To Card",
  },
  {
    id: 2,
    title: "Simple Things You To Save BOOK",
    author: "Wilson",
    rating: 3.4,
    image: "01.png",
    badge: "Hot",
    buttonSave: "Save To Card",
  },
  {
    id: 3,
    title: "Flovely And Unicorn Erna",
    author: "Alexander",
    rating: 3.4,
    image: "01.png",
    badge: null,
    buttonSave: "Save To Card",
  },
  {
    id: 4,
    title: "Simple Things You To Save BOOK",
    author: "Wilson",
    rating: 3.4,
    image: "01.png",
    badge: "Hot",
    buttonSave: "Save To Card",
  },
  {
    id: 5,
    title: "Flovely And Unicorn Erna",
    author: "Alexander",
    rating: 3.4,
    image: "01.png",
    badge: null,
    buttonSave: "Save To Card",
  },
  {
    id: 6,
    title: "Simple Things You To Save BOOK",
    author: "Wilson",
    rating: 3.4,
    image: "01.png",
    badge: "Hot",
    buttonSave: "Save To Card",
    buttonAdd: "Add To Card",
  },
];

const TopReadBooks = () => {
  return (
    <section className="py-10 px-4 pb-20">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center pb-5">
          <h2 className="text-3xl font-bold text-dark-text mb-6 text-center">
            Discover Your Favorite Books
          </h2>
          <Button
            name={
              <span className="flex justify-center items-center gap-2">
                Read More <FaLongArrowAltRight />
              </span>
            }
          />
        </div>

        <div className="flex justify-center grow items-center gap-5">
          <Swiper
            slidesPerView={3}
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
          <div className="bg-dark-card p-4 w-[500px] space-y-2 relative rounded-2xl">
            <h1 className="text-xl font-bold">Find Your Nest Books!</h1>
            <p>And get your 25% discount now!</p>
            <Button
              name={
                <span className="flex justify-center gap-2 items-center">
                  Read Now <FaLongArrowAltRight />
                </span>
              }
            />
            <figure className="relative">
              <img
                src="girl-shape.png"
                alt=""
                className="relative z-10 w-40 object-cover -right-16 -bottom-4"
              />
              <img
                src="circle-shape.png"
                alt=""
                className="absolute top-[97px]   w-40"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopReadBooks;
