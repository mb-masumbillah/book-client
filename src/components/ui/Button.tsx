import type { TButton } from "../../types";

const Button = (children: TButton) => {
  const { name, onClick, className } = children;

  return (
    <button
      className={
        className
          ? `${className} group relative overflow-hidden cursor-pointer`
          : "group relative overflow-hidden px-4 py-1 rounded-full  font-semibold cursor-pointer border border-[#283541] bg-[#2b313d]"
      }
      onClick={onClick}
    >
      <span
        className={` relative z-10 transition-colors duration-300 group-hover:text-dark-bg `}
      >
        {name}
      </span>

      <span className="absolute left-0 top-0 h-full w-full bg-dark-button transition-transform duration-700 ease-in-out translate-x-[-100%] group-hover:translate-x-0 rounded-full"></span>
    </button>
  );
};

export default Button;
