import TextGradient from "../../atoms/text-gradient/index";
import React from "react";
import CheckBox from "../../atoms/checkbox/check-box";
import SvgIcon from "../../atoms/svg-icon/svg-icon";

const PricingPlan = () => {
  return (
    <div className="bg-white w-full border-t-4 border-[#F53255] shadow-pricing rounded-lg">
      <div className="p-6">
        <div className="flex justify-between">
          <div className="text-size-normal">Plan price start from</div>
          <img
            src="/icons/arrow.svg"
            alt="arrow"
            className={"w-6 h-6 mr-2 rotate-90"}
          />
        </div>
        <div className="flex items-center ">
          <div className="text-center text-size-large">$2.00</div>
          <div className="ml-1">/ GB</div>
        </div>

        <div className=" my-[28px]">
          <div className="flex">
            <CheckBox type="checkbox" className="mr-2" />
            <div className={"flex text-size-normal"}>High quality</div>
            <TextGradient text={"7M+ IPs"} type={1} className={"ml-[5px]"} />
          </div>
          <div className="flex mt-[16px]">
            <CheckBox type="checkbox" className="mr-2" />
            <TextGradient text={"195+"} type={2} className={"mr-[5px]"} />
            <div className={"flex text-size-normal"}>country targetting</div>
          </div>
          <div className="flex mt-[16px]">
            <CheckBox type="checkbox" className="mr-2" />
            <div className={"flex text-size-normal"}>
              Dedicated residential proxies
            </div>
          </div>
          <div className="flex mt-[16px]">
            <CheckBox type="checkbox" className="mr-2" />
            <TextGradient text={"HTTP(s)"} type={1} className={"mr-[5px]"} />
            <div className={"flex text-size-normal"}>and</div>
            <TextGradient text={"SOCKS5"} type={1} className={"mx-[5px]"} />
            <div className={"flex text-size-normal"}>support</div>
          </div>
          <div className="flex mt-[16px]">
            <CheckBox type="checkbox" className="mr-2" />
            <div className={"flex text-size-normal"}>Non-Expricing Traffic</div>
          </div>
        </div>
        <button className="bg-button-gradient hover:bg-none text-white hover:text-[#F53255] hover:shadow-none h-[44px] flex justify-center items-center rounded-lg shadow-buttonBy transition-all duration-300 hover:border-2 hover:border-solid hover:border-[#F53255] cursor-pointer text-button-1 w-full">
          By Now
        </button>
      </div>
    </div>
  );
};
export default PricingPlan;
