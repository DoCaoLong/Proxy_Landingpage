import React from "react";
import HamburgerMenu from "../atoms/hamburger-menu";

const menuLinks = [
  {
    name: "Features",
    url: "#",
  },
  {
    name: "Pricing",
    url: "#",
  },
  {
    name: "User cases",
    url: "#",
  },
  {
    name: "Top location",
    url: "#",
  },
  {
    name: "About us",
    url: "#",
  },
  {
    name: "Contact",
    url: "#",
  },
  {
    name: "Download",
    url: "#",
  },
];

export default function Header() {
  return (
    <header className="from-pink-500 via-orange-500 to-red-500 bg-no-repeat bg-top bg-cover bg-hero-pattern center fixed left-0 right-0 text-size-normal flex justify-center items-center px-[40px] py-[16px] z-[999]">
      <div className="gap-4 flex justify-between items-center w-full max-w-[77.5rem] px-[1.25rem] mx-auto">
        <a href="/" className="text-2xl font-bold text-white cursor-pointer">
          Proxy
        </a>

        <nav className="hidden lg:flex space-x-6 text-white text-[0.8125rem]">
          {menuLinks.map((link) => (
            <a key={link.name} href={link.url} className="hover:underline">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <button className="text-button-1 text-white px-[16px] py-[10px] rounded-md  border-white border-[1px] bg-transparent hover:border-solid hover:border-[#F53255] hover:bg-white transition-all duration-300 hover:text-[#F53255]">
            Get Started
          </button>

          <HamburgerMenu menuLinks={menuLinks} className="block lg:hidden" />
        </div>
      </div>
    </header>
  );
}
