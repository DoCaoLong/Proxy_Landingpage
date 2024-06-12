import React from "react";
import PricingPlan from "../../molecules/pricing-plan/index";
import TextGradient from "../../atoms/text-gradient/index";

export default function SectionPricing() {
  const arrButtonImage = [
    {
      text: "Ad Verification",
    },
    {
      text: "SERP Tracking",
    },
    {
      text: "Social Media",
    },
    {
      text: "Brand Protection",
    },
  ];

  return (
    <div className={"bg-[#FFFFFF] py-[80px] flex justify-center"}>
      <div>
        <div className="flex justify-center">
          <div className={"text-size-large"}>Chose</div>
          <div className={"w-[4px] h-auto bg-[#F53255] mx-[10px] mt-1"}></div>
          <TextGradient
            text={"Your Plan"}
            type={1}
            className={"text-size-large"}
          />
        </div>
        <div
          className={
            "flex lg:flex-row flex-col justify-between lg:gap-16 mt-[3.75rem]"
          }
        >
          <div className={"py-[1.875rem] lg:py-[3.7813rem]"}>
            <div>
              <div className="text-H6">Residential Proxies</div>
              <div className="text-base text-black/40 mt-4">
                Unlock the power of residential proxies with our cutting-edge
                solutions tailored for your browsing needs. Experience seamless
                anonymity and reliability with our high-quality proxy services.
              </div>
            </div>

            <div>
              <div className={"text-H2 text-[#F53255] mt-[56px]"}>
                User cases
              </div>

              <div className="grid grid-cols-2 gap-1 gap-x-4 max-w-[384px]">
                {arrButtonImage.map((i) => (
                  <div className={"flex mt-4"}>
                    <img
                      src="/icons/arrow.svg"
                      alt="arrow"
                      className={"w-6 h-6 mr-2"}
                    />
                    <div>{i.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <PricingPlan />
        </div>
      </div>
    </div>
  );
}
