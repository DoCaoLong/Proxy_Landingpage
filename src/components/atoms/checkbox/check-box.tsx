import React from "react";

interface CheckBoxProps {
  type: "checkbox" | "radio";
  className?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ type, className }) => {
  const inputStyles = {
    width: "24px",
    height: "24px",
    color: "red",
  };

  return (
    <div>
      <input
        type={type}
        className={`${className} accent-[#F53255]`}
        style={inputStyles}
        checked={true}
      />
    </div>
  );
};

export default CheckBox;
