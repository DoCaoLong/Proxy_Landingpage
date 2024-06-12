import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-[77.5rem] px-[1.25rem] mx-auto">{children}</div>;
}

export default Container;
