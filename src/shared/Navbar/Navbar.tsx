import { useEffect, useState } from "react";
import Header from "./Header/Header";
import Nav from "./Header/Nav/Nav";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 130) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-light-bg dark:bg-dark-bg py-1 pt-2 ${
        isFixed &&
        "fixed top-0 left-0 w-full z-50 shadow-2xl border-b border-light-border dark:border-dark-border"
      }`}
    >
      <Header />
      <Nav />
    </div>
  );
};

export default Navbar;
