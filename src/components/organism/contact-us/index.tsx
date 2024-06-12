import React from "react";
import TextGradient from "../../atoms/text-gradient";
import SvgIcon from "../../atoms/svg-icon/svg-icon";
import Mail from "../../../assets/icons-input/Mail.svg";
import Phone from "../../../assets/icons-input/Phone.svg";
import Home from "../../../assets/icons-input/House_01.svg";
import CheckBox from "../../atoms/checkbox/check-box";

const ContactUs = () => {
  const contact = [
    {
      url: Mail,
      text: "info@proxies.com",
    },
    {
      url: Phone,
      text: "+84 000 000",
    },
    {
      url: Home,
      text: "123 Some St, City SMTH 11000 US",
    },
  ];
  return (
    <div className={"bg-[#FFFFFF] py-[80px] flex justify-center "}>
      <div>
        <div className="flex justify-center">
          <div className={"text-size-large"}>Contact Us </div>
          <div
            className={"w-[4px] h-auto bg-[#F53255] mx-[10px] mt-1"}
          ></div>{" "}
          <TextGradient text={"Proxy"} type={1} className={"text-size-large"} />{" "}
        </div>
        <div className={"flex justify-center 	mt-6"}>
          <div
            className={
              "text-size-normal max-w-[600px] text-center text-[#88949D]"
            }
          >
            Hi, need help from real people, not bots? Connect us experts for
            quick, effective support
          </div>
        </div>

        <div className="py-8 flex flex-col lg:flex-row lg:gap-10 items-start gap-5 lg:mt-[80px] mt-10">
          <div>
            <h3 className="text-H6 text-[#000] mb-3">Got a Question?</h3>
            <p className="text-size-normal mb-8">
              We're here to help and answer any questions you might have. We
              look forward to hearing from you. Fill in this form or send as an
              email at{" "}
              <a
                href="mailto:contact@proxy.com"
                className="text-red-600 text-size-normal"
              >
                contact@proxy.com
              </a>
            </p>
            <h3 className="text-H6 text-[#000] mb-3">Greater cooperation?</h3>
            <p className="text-size-normal mb-8">
              Send an email to contact the sales team
              <a
                href="mailto:sales@proxy.com"
                className="text-red-600 text-size-normal"
              >
                sales@proxy.com
              </a>
            </p>
            <div className="mt-10 lg:mt-[70px]">
              {contact.map((i) => (
                <div className="flex items-center">
                  <SvgIcon
                    src={i.url}
                    alt={"arrow"}
                    className={" mr-2 w-[32px] h-[32px]"}
                  />
                  <div className={"text-size-normal text-[#091327]"}>
                    {i.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg w-full">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="sr-only text-size-normal text-[#88949D]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="sr-only text-size-normal text-[#88949D]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="sr-only text-size-normal text-[#88949D]"
                >
                  Leave Your Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-[16px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Leave Your Message"
                  rows={4}
                />
              </div>
              <div className="flex items-center mb-4">
                <CheckBox type="checkbox" className="mr-2 bg-[#bd0303]" />
                <label className="text-gray-600 text-size-normal">
                  Accept our Private Policy
                </label>
              </div>
              <button className="bg-button-gradient hover:bg-none text-white hover:text-[#F53255] hover:shadow-none h-[44px] flex justify-center items-center rounded-lg shadow-buttonBy transition-all duration-300 hover:border-2 hover:border-solid hover:border-[#F53255] cursor-pointer text-button-1 w-full">
                SEND NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
