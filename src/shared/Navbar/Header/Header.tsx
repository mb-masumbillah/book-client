import { BiPhone } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import Button from "../../../components/ui/Button";

const Header = () => {
  return (
    <div className="flex justify-between items-center border-b border-[#2b313d] pb-2 px-5">
      <div className="flex justify-between items-center gap-5">
        <div className="flex justify-center items-center gap-3">
          <FaFacebook className="text-dark-button" />
          <p>75006k Followers</p>
        </div>
        <div className="flex justify-center items-center gap-3 border-l pl-5">
          <BiPhone className="text-dark-button"/>
          <p>+402 763 282 46</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5">
        <div>english</div>
        <div>BDT</div>
        <Button name='LOG IN'/>
      </div>
    </div>
  );
};

export default Header;
