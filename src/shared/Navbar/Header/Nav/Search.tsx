import { useState } from "react";
import { BiSearch } from "react-icons/bi";

type SearchProps = {
  setSearchData: (value: string) => void;
};

const Search = ({ setSearchData }: SearchProps) => {
  const [showPage, setShowPage] = useState(false);
  return (
    <div className="relative">
      <BiSearch className="absolute top-[10px] left-3 text-xl" />
      <input
        onChange={(e) => {
          setSearchData(e.target.value);
          if (e.target.value) {
            setShowPage(true);
          } else {
            setShowPage(false);
          }
        }}
        type="text"
        className="border-none outline-none w-[31rem] rounded-xl bg-[#343A46] px-3 pl-9 h-10 placeholder:text-dark-muted-text text-lg "
        placeholder="Search..."
      />
      {showPage && (
        <div className="absolute bg-amber-700 h-[200px] w-64 rounded-xl">
          masum
        </div>
      )}
    </div>
  );
};

export default Search;
