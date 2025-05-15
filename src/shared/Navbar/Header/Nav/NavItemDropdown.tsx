import type { Props } from "../../../../types";
import { MdArrowDropDown } from "react-icons/md";
import Navlink from "../../../../components/ui/Navlink";

const NavItemDropdown = ({ navItem }: Props) => {
  const { name, path, dropdown } = navItem;

  const content = (
    <span className="flex justify-center items-end">
      {name} {dropdown && <MdArrowDropDown className="text-2xl" />}
    </span>
  );

  return (
    <div className="group relative">
      <Navlink path={path} name={content} />

      {dropdown && (
        <div className="absolute top-[2.2rem] w-[20rem] -left-7  pt-[1.375rem] dark:bg-dark-bg  shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transform scale-95 translate-y-2 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-300 ease-out z-10">
          <div className="pt-5 flex flex-col gap-2 dark:bg-dark-bg px-5 pb-5 bg-light-bg">
            {dropdown.map((item) => (
              <Navlink path={item.path} name={item.name} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavItemDropdown;
