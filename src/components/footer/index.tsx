import React from "react";
import F from "../../assets/icon-app/fb.svg";
import Inta from "../../assets/icon-app/intaram.svg";
import Message from "../../assets/icon-app/mess.svg";
import whapsap from "../../assets/icon-app/wha.png";
import SvgIcon from "../atoms/svg-icon/svg-icon";
import Container from "../atoms/container";

const Footer = () => {
  const icons = [Message, Inta, whapsap, F];
  const listMenu = [
    "Features",
    "Pricing",
    "User cases",
    "Top location",
    "About us",
    "Contact",
    "Download",
  ];
  const protectList = ["Privacy", "Terms of USs", "Security", "Cookies"];
  return (
    <footer className="w-full py-[3.75rem] flex justify-center bg-[#F9F9F9]">
      <div className=" w-full ">
        <Container>
          <div className="flex lg:flex-row items-start gap-10 flex-col w-full lg:justify-between lg:items-center">
            <a href="/" className="text-H4 gradient-text cursor-pointer">
              Proxy
            </a>
            <div className="flex flex-col md:flex-row gap-10 text-small text-[#091327]">
              {listMenu.map((i) => (
                <div className="cursor-pointer hover:underline">{i}</div>
              ))}
            </div>
            <div className="text-size-normal">info@proxies.com</div>
          </div>
        </Container>

        <div className="bg-[#DAE7E7] h-[1px] my-4 w-full"></div>

        <Container>
          <div className="flex flex-col gap-10 lg:flex-row w-full lg:justify-between">
            <div className="text-small text-[#091327] mr-[40px]">
              Ⓒ 2024 Bentofy. All Rights Reserved
            </div>
            <div className="flex flex-col md:flex-row gap-10 text-small text-[#88949D]">
              {protectList.map((i) => (
                <div className="cursor-pointer hover:underline">{i}</div>
              ))}
            </div>
            <div className="gap-4 flex">
              {icons.map((i) => (
                <SvgIcon
                  src={i}
                  alt="img"
                  className="w-[32px] h-[32px] cursor-pointer"
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
