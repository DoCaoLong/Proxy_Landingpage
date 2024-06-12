import React from "react";

interface TextGradientProps {
  text: string;
  type: number;
  className?: string; // Optional className prop
}

const TextGradient: React.FC<TextGradientProps> = ({
  text,
  type,
  className,
}) => {
  const gradientClass = type === 1 ? "text-gradient-1" : "text-gradient-2";

  return <div className={`${gradientClass} ${className}`}>{text}</div>;
};

export default TextGradient;
