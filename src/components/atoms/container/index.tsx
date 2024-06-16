import React from "react";

function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-[77.5rem] px-[1.25rem] mx-auto flex flex-col justify-center items-center">
            {children}
        </div>
    );
}

export default Container;
