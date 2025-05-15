import ToggleTheme from "../../../../components/toggleTheme/ToggleTheme";
import { useState } from "react";
import NavItemDropdown from "./NavItemDropdown";
import Search from "./Search";
import { navItem } from "../../../../utils/NavRoute";
import { GiSelfLove } from "react-icons/gi";
import Navlink from "../../../../components/ui/Navlink";
import { FaShoppingCart } from "react-icons/fa";

const Nav = () => {
  const [searchData, setSearchData] = useState<string | undefined>(undefined);

  console.log(searchData);

  return (
    <nav className=" flex justify-between items-center text-lg py-2 max-w-[93.75rem] mx-auto">
      <div>
        <h1 className="text-center text-3xl font-bold text-dark-button bg-dark-button-hover px-4 py-1 rounded-lg">Book.</h1>
      </div>
      <div className="flex justify-center items-center gap-3">
        {navItem.map((item) => (
          <NavItemDropdown navItem={item} />
        ))}
      </div>

      <div className="flex justify-between items-center gap-5">
        <Search setSearchData={setSearchData} />
        <Navlink
          path="/"
          name={
            <span className="flex justify-center items-center gap-2">
              Saved <GiSelfLove />
            </span>
          }
        ></Navlink>
        <Navlink
          path="/"
          name={
            <span className="flex justify-center items-center gap-2">
              Buy <FaShoppingCart />
            </span>
          }
        ></Navlink>
        <ToggleTheme />
      </div>
    </nav>
  );
};

export default Nav;
