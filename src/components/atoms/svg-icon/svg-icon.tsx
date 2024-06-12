// src/components/SvgIcon.tsx
import React from "react";

// interface SvgIconProps {
//   src: any;
//   alt: string;
//   className?: string;
// }

const SvgIcon: React.FC<any> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};

export default SvgIcon;
