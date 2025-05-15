import { BiMailSend } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { BsInstagram } from "react-icons/bs";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-light-bg dark:bg-dark-card">
      <div className="max-w-[93.75rem] mx-auto flex justify-between items-start py-16 px-5 text-dark-muted-text">
        <div className="space-y-5">
          <div>
            <h1 className="text-4xl font-bold text-dark-button">Book.</h1>
          </div>
          <div>
            <span>Got Questions? Call us</span>
            <p className="flex items-center gap-3 pt-1">
              <IoCall className="text-dark-button" /> +670 413 90 762
            </p>
          </div>
          <div className="space-y-2">
            <p className="flex items-center gap-3 ">
              <BiMailSend className="text-dark-button text-xl" />{" "}
              masum.stack.dev@gmail.com
            </p>
            <p className="flex items-center gap-3 ">
              <CiLocationOn className="text-dark-button text-xl " /> 79 Sleepy
              Hollow St. Jamaica, New York 1432
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <h1 className="text-xl font-bold">Costumers Support</h1>
          <ul className="list-disc pl-5 space-y-2">
            <li className="hover:text-[#58C4DC] cursor-pointer">Store List</li>
            <li className="hover:text-[#58C4DC] cursor-pointer">
              Opening Hours
            </li>
            <li className="hover:text-[#58C4DC] cursor-pointer">Contact Us</li>
            <li className="hover:text-[#58C4DC] cursor-pointer">
              Return Policy
            </li>
          </ul>
        </div>
        <div className="space-y-5">
          <h1 className="text-xl font-bold">Categories</h1>
          <ul className="list-disc pl-5 space-y-2">
            <li className="hover:text-[#58C4DC] cursor-pointer">Novel Books</li>
            <li className="hover:text-[#58C4DC] cursor-pointer">
              Poetry Books
            </li>
            <li className="hover:text-[#58C4DC] cursor-pointer">
              Political Books
            </li>
            <li className="hover:text-[#58C4DC] cursor-pointer">
              History Books
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h1 className="text-xl font-bold">Subcribe.</h1>
          <div className="space-y-2">
            <p>Our conversation is just getting started</p>
            <div className="relative">
              <input
                type="text"
                className="border-none outline-none w-[18rem] rounded-full bg-[#343A46] px-4  h-8 placeholder:text-dark-muted-text text-lg"
                placeholder="Enter your email"
              />
              <button className="absolute right-0 top-0 bg-dark-button text-dark-bg font-bold  rounded-full px-4 py-1 cursor-pointer">
                Subcribe
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-lg">Follow Us On</p>
            <div className="flex items-center gap-3 text-xl">
              <FaFacebook className=" hover:text-dark-button" />
              <LiaLinkedin className="text-[28px] hover:text-dark-button" />
              <BsInstagram className=" hover:text-dark-button" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-dark-border">
        <p className="text-center text-dark-muted-text py-2">
          ©All Rights reserved 2025 by{" "}
          <span className="text-dark-button">masum.stack.dev@gmail.com</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
