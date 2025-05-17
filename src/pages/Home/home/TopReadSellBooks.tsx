const TopReadSellBooks = () => {
  const data = [
    {
      bgImg: "book-banner-3.jpg",
      read: "Read",
      buy: "Buy",
      name: "Romantic Novels",
      details: "Sed ac arcu sed felis vulputate molestie. Nullam at urna",
      bookImg: "book-3.png",
    },
    {
      bgImg: "book-banner-3.jpg",
      read: "Read",
      buy: "Buy",
      name: "Romantic Novels",
      details: "Sed ac arcu sed felis vulputate molestie. Nullam at urna",
      bookImg: "book-3.png",
    },
    {
      bgImg: "book-banner-3.jpg",
      read: "Read",
      buy: "Buy",
      name: "Romantic Novels",
      details: "Sed ac arcu sed felis vulputate molestie. Nullam at urna",
      bookImg: "book-3.png",
    },
  ];

  return (
   <div className="bg-dark-card">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto py-10">
      {data.map((item) => (
        <div className="relative  h-[220px] rounded-2xl overflow-hidden shadow-lg">
          {/* Background image */}
          <img
            src={item.bgImg}
            alt="Romantic Novels"
            className="w-full h-full object-cover"
          />

          {/* Content */}
          <div className="absolute top-0 w-full h-full z-10 text-white p-4 flex flex-col space-y-8 bg-[#00000076]">
            <div className="flex justify-between items-start">
              <span className="bg-white text-red-500  font-semibold px-2 py-1 rounded-full">
                {item.read}
              </span>
              <span className="bg-white text-red-500  font-semibold px-2 py-1 rounded-full">
                {item.buy}
              </span>
            </div>

            <div className="">
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p className="text-sm">{item.details}</p>
            </div>
          </div>

          {/* Bottom book image */}
          <img
            src={item.bookImg}
            alt="Books"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[120px]"
          />
        </div>
      ))}
    </div>
   </div>
  );
};

export default TopReadSellBooks;
