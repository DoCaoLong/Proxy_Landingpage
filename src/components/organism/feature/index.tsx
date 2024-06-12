import React from "react";
import PricingPlan from "../../molecules/pricing-plan/index";
import TextGradient from "../../atoms/text-gradient/index";

export default function Feature() {
  const features = [
    {
      title: "Monetize Your Bandwidth",
      description: "Earn money by sharing your unused internet bandwidth.",
      src: "/icons/feature-1.svg",
    },
    {
      title: "Proxy P2P Residential",
      description:
        "Our P2P proxy service enables you to monetize your connection effortlessly.",
      src: "/icons/feature-2.svg",
    },
    {
      title: "Secure and Private",
      description:
        "All data passing through our P2P proxies is encrypted, ensuring that your personal information remains protected.",
      src: "/icons/feature-3.svg",
    },
  ];

  return (
    <div className={"bg-[#FFFFFF] py-[80px] flex justify-center"}>
      <div>
        <div className="flex justify-center">
          <div className={"text-center text-size-large"}>Our</div>
          <div className={"w-[4px] h-auto bg-[#F53255] mx-[10px] mt-1"}></div>
          <TextGradient
            text={"Features & Services"}
            type={1}
            className={"text-center text-size-large"}
          />
        </div>
        <div className={"flex justify-center 	mt-6"}>
          <div className={"text-base max-w-[600px] text-center text-black/40"}>
            We bring you an innovative Peer-to-Peer (P2P) proxy service that not
            only enhances your internet browsing experience.
          </div>
        </div>
        <div className={"flex justify-between mt-[8rem] lg:mt-[5rem]"}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-28 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative bg-white px-[1.5rem] pb-[1.5rem] pt-[5.5rem] rounded-lg shadow-pricing flex flex-col items-center justify-center`}
              >
                <img
                  src={feature.src}
                  alt={feature.title}
                  className="absolute top-0 -translate-y-1/2"
                />
                <div className="text-center">
                  <h3 className="text-[#091327] text-[1.25rem] font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-black/40 text-base mt-2">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
