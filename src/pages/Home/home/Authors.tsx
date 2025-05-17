const Authors = () => {
  const authors = [
    { name: "Your Name", books: 10, image: "04.jpg" },
    { name: "Shikhon Islam", books: 7, image: "04.jpg" },
    { name: "Kawser Ahmed", books: 4, image: "04.jpg" },
    { name: "Brooklyn Simmons", books: 15, image: "04.jpg" },
    { name: "Leslie Alexander", books: 5, image: "04.jpg" },
    { name: "Leslie Alexander", books: 5, image: "04.jpg" },

  ];

  return (
    <div className=" py-10 bg-[#23272E]">
      <div className="flex flex-col items-center max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-dark-text mb-2">
        Featured Author
      </h2>
      <p className="text-dark-muted-text mb-8 text-center w-3/4">
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec at
        nulla nulla. Duis posuere ex lacus.
      </p>
      <div className="flex justify-center items-center gap-7">
        {authors.map((author, index) => (
          <div
            key={index}
            className="bg-dark-card2 shadow-lg rounded-2xl relative p-6 flex flex-col items-center text-center"
          >
            <div className="relative w-32 mb-4">
              <img
                src={author.image}
                alt={author.name}
                className="w-32 h-32 rounded-full  object-cover shadow-lg"
              />

            </div>
            <h3 className="text-lg font-semibold text-dark-muted-text">
              {author.name}
            </h3>
            <p className="text-dark-text mt-1">
              {String(author.books).padStart(2, "0")} Published Books
            </p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Authors;
