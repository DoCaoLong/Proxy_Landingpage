import React from "react";

import SvgIcon from "../../atoms/svg-icon/svg-icon";
import Hides from "../../../assets/icons-input/hide.svg";
interface CheckBoxProps {
  text: string;
}

const InputCustom: React.FC<CheckBoxProps> = ({ text }) => {
  return (
    <div className="relative mb-6">
      <input
        type="password"
        className="w-full text-size-normal text-[#DAE7E7] p-3 border border-[#DAE7E7] rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        placeholder={text}
      />
      <SvgIcon
        src={Hides}
        alt="ss"
        className="w-[24px] h-[24px] absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-400 mr-[17px]"
      />
    </div>
  );
};
export default InputCustom;
