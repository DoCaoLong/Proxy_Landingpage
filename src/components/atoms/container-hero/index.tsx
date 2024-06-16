import React from "react";

function ContainerHero({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-[77.5rem] px-[1.25rem] mx-auto h-[100vh] flex flex-col justify-center items-center custom-header">
            {children}
        </div>
    );
}

export default ContainerHero;
