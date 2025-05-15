import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const ToggleTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleSpan =
    theme === "dark" ? (
      <span>
        <CiLight />
      </span>
    ) : (
      <span >
        <MdDarkMode />
      </span>
    );

  return (
    <Button
      onClick={toggleTheme}
      className={
        " p-2 font-bold text-xl rounded-full border border-light-border dark:border-dark-border text-light-text dark:text-dark-text"
      }
      name={toggleSpan}
    ></Button>
  );
};

export default ToggleTheme;
