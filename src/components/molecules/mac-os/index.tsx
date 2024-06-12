import React from "react";
import SvgIcon from "../../atoms/svg-icon/svg-icon";
import classNames from "classnames";

interface CardProps {
  imageSrc: string;
  altText: string;
  title: string;
  text: string;
  buttonText: string;
  onButtonClick?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  altText,
  title,
  text,
  buttonText,
  onButtonClick,
  className,
}) => {
  return (
    <div
      className={classNames(
        "group lg:max-w-[384px] hover:bg-white w-full hover:border-t-4 hover:border-[#F53255] hover:shadow-pricing rounded-lg",
        title === "MacOS" &&
          "bg-white w-full border-t-4 border-[#F53255] shadow-pricing",
        className
      )}
    >
      <div className="p-6">
        <div className="flex justify-center items-center">
          <SvgIcon
            src={imageSrc}
            alt={altText}
            className="w-[160px] h-[160px]"
          />
        </div>
        <div className="text-Mac-H2 text-[#091327] flex justify-center mt-4">
          {title}
        </div>
        <div className="text-small text-[#88949D] flex justify-center mt-2">
          {text}
        </div>
        <button
          className="bg-button-gradient group-hover:bg-none text-white group-hover:text-[#F53255] group-hover:shadow-none h-[44px] flex justify-center items-center rounded-lg shadow-buttonBy transition-all duration-300 group-hover:border-2 group-hover:border-solid group-hover:border-[#F53255] mt-[32px] cursor-pointer text-button-1 w-full"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
