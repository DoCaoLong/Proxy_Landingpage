import React from "react";
import TextGradient from "../../atoms/text-gradient/index";
import Card from "../../molecules/mac-os";
import Ximg from "../../../assets/pngegg1.png";
import Windown from "../../../assets/windows.png";

export default function ProxyApp() {
  return (
    <div className={"bg-[#FFFFFF] py-[80px] bg-no-repeat bg-top"}>
      <div className="flex justify-center">
        <TextGradient
          text={"Contact Us"}
          type={1}
          className={"text-size-large"}
        />{" "}
        <div className={"w-[4px] h-auto bg-[#F53255] mx-[10px] mt-1"}></div>
        <div className={"text-size-large"}>Proxy app</div>
      </div>

      <div
        className={
          "mt-[60px] flex md:flex-row flex-col justify-center gap-[24px]"
        }
      >
        <Card
          imageSrc={Ximg}
          altText="X"
          title="MacOS"
          text="MacOS Operating system 10.1 or higher"
          buttonText="DOWNLOAD NOW"
        />
        <Card
          imageSrc={Windown}
          altText="X"
          title="WindowOS"
          text="WindowOS Operating system 12.1 or higher"
          buttonText="DOWNLOAD NOW"
        />
      </div>
    </div>
  );
}
