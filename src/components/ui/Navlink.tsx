import { NavLink } from "react-router-dom";
import type { TNavlink } from "../../types";

const Navlink = (children: TNavlink) => {
  const { name, path } = children;
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? "group relative overflow-hidden bg-dark-button-hover px-3 py-1 rounded-full  font-semibold flex  items-center dark:text-dark-button"
          : "border-transparent group relative overflow-hidden px-3 py-1 rounded-full  font-semibold  flex  items-center hover:bg-[#2c313d] "
      }
    >
      {name}
    </NavLink>
  );
};

export default Navlink;
