import React from "react";
import SvgIcon from "../../atoms/svg-icon/svg-icon";

interface BoxProps {
  src: any;
  text: string;
}

const Box: React.FC<BoxProps> = ({ src, text }) => {
  return (
    <div className="flex items-center rounded-lg border border-[#DAE7E7] p-3 bg-white text-size-normal">
      <SvgIcon src={src} alt="icon" className="w-[40px] h-[40px] mr-2" />
      <div className="text-base font-normal line-clamp-1 w-full">{text}</div>
    </div>
  );
};

export default Box;
