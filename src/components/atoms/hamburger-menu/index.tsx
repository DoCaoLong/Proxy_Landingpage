import classNames from "classnames";
import React from "react";

interface HamburgerMenuProps {
  className?: string;
  menuLinks: Array<{ name: string; url: string }>;
}

const HamburgerMenu = ({ className = "", menuLinks }: HamburgerMenuProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={classNames(className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-menu text-white"
        onClick={() => setOpen(!open)}
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>

      {/* Drawer */}
      <div
        style={{
          background: "linear-gradient(180deg, #F63155 0%, #F6892F 100%)",
        }}
        className={classNames(
          "fixed top-0 right-0 h-full w-[90%] sm:w-1/2 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out",
          {
            "translate-x-0": open,
            "translate-x-full": !open,
          }
        )}
      >
        <div className="flex justify-end p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-x text-white"
            onClick={() => setOpen(false)}
          >
            <line x1="18" x2="6" y1="6" y2="18" />
            <line x1="6" x2="18" y1="6" y2="18" />
          </svg>
        </div>
        <nav className="flex flex-col relative top-[20%] items-center w-full h-full gap-4 p-4">
          {menuLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="text-white text-xl hover:underline"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;
