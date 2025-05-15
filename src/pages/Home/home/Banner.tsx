import { FaLongArrowAltRight } from "react-icons/fa";
import Button from "../../../components/ui/Button";

const Banner = () => {
  return (
    <div className="relative">
      <figure>
        <img
          src="hero.png"
          alt=""
          className="h-[36.25rem] object-cover w-full"
        />

        <figure>
            <img src="book-2.png" alt="" className="absolute top-10 z-10 right-5 animate-pulse"/>
            <img src="book-shape.png" alt="" className="absolute bottom-0  left-40 animate-pulse "/>
        </figure>
      </figure>
      <div className="absolute top-0 right-0 left-0 border-0  bg-[#16181dc1]">
        <div className="px-32 flex justify-between items-center max-w-[93.75rem] mx-auto">
          <div className="space-y-16">
          <h1 className="text-6xl font-bold">
            Your Next Favorite Book <br /> Is Just a{" "}
            <span className="text-[#58C4DC]">Click Away</span>
          </h1>
          <p>
            Sed ac arcu sed felis vulputate molestie. Nullam at urna in velit
            finibus vestibulum euismod A Urna. Sed quis aliquam leo. Duis
            iaculis lorem mauris, et convallis du
          </p>
          <div className="flex items-start gap-5">
            <Button
              className="px-6 py-2 rounded-full border-white hover:border-dark-border font-bold border "
              name={<span className="flex justify-center items-center gap-2">View All Books <FaLongArrowAltRight /></span>}
            />
            <Button
              className="px-6 py-2 rounded-full border border-dark-button font-bold bg-dark-card"
              name={<span className="flex justify-center items-center gap-2">Shop Now<FaLongArrowAltRight /></span>}
            />
          </div>
        </div>
        <figure>
          <img
            src="hero-girl.png"
            alt=""
            className="h-[34rem] w-[40rem] object-cover mt-9"
          />
        </figure>
        </div>
      </div>
    </div>
  );
};

export default Banner;
