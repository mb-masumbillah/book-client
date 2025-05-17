import { CalendarDays, User2 } from "lucide-react";

const news = [
  {
    image: "09.jpg",
    tag: "Activities",
    date: "Feb 10, 2024",
    author: "Admin",
    title: "Montes Suspendisse Massa Curae Malesuada",
  },
  {
    image: "09.jpg",
    tag: "Activities",
    date: "Mar 20, 2024",
    author: "Admin",
    title: "Playful Picks Paradise: Kids’ Essentials With Dash.",
  },
  {
    image: "09.jpg",
    tag: "Activities",
    date: "Jun 14, 2024",
    author: "Admin",
    title: "Tiny Emporium: Playful Picks For Kids’ Delightful Days.",
  },
  {
    image: "09.jpg",
    tag: "Activities",
    date: "Mar 12, 2024",
    author: "Admin",
    title: "Eu Parturient Dictumst Fames Quam Tempor",
  },
];
const News = () => {
  return (
    <section className="bg-dark-card py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text">
            Our Latest News
          </h2>
          <p className="text-dark-muted-text mt-2 max-w-xl mx-auto">
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec
            at nulla nulla. Duis posuere ex lacus
          </p>
        </div>

        <div className="flex justify-center items-center gap-6 ">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-[#23272E] rounded-xl shadow-sm overflow-hidden "
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 left-2 bg-red-400 text-white text-xs px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>
              <div className="p-4">
                <div className="flex items-center text-xs gap-4 mb-2">
                  <span className="flex items-center gap-1">
                    <CalendarDays size={14} /> {item.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User2 size={14} /> By {item.author}
                  </span>
                </div>
                <h3 className="text-sm font-semibold  mb-3 leading-snug">
                  {item.title}
                </h3>
                <button className="text-sm text-red-400 font-medium flex items-center gap-1 hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
