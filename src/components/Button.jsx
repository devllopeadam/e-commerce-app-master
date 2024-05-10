/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Button = ({ text, bgColor, borderColor, textColor, href, className }) => {
  return (
    <Link
      to={href}
      className={`${className} text-[13px] font-bold w-fit transition-all duration-300 ${textColor} ${bgColor} border ${borderColor} uppercase py-[14px] px-[30px]`}>
      {text}
    </Link>
  );
};

export default Button;
