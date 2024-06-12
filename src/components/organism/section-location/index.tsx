import React from "react";
import TextGradient from "../../atoms/text-gradient";
import Container from "../../atoms/container";

export default function SectionLocation() {
  const flagKingdom = [
    {
      src: "/flags/america.svg",
      name: "United States",
      ips: "341,785 IPs",
    },
    {
      src: "/flags/united.svg",
      name: "United Kingdom",
      ips: "293,744 IPs",
    },
    {
      src: "/flags/china.svg",
      name: "China",
      ips: "189,982 IPs",
    },
    {
      src: "/flags/germany.svg",
      name: "Germany",
      ips: "89,782 IPs",
    },
    {
      src: "/flags/canada.svg",
      name: "Canada",
      ips: "67,882 IPs",
    },
    {
      src: "/flags/france.svg",
      name: "France",
      ips: "64,934 IPs",
    },
  ];

  return (
    <div className={"bg-[#F9F9F9] py-[60px] flex justify-center"}>
      <Container>
        <div className="flex justify-center ">
          <div className={"text-center text-size-large"}>Top</div>
          <div className={"w-[4px] h-auto bg-[#F53255] mx-[10px] mt-1"}></div>
          <TextGradient
            text={"Location"}
            type={1}
            className={"text-center text-size-large "}
          />
        </div>
        <div className=" mt-[60px]  grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[1.5rem]">
          {flagKingdom.map((i) => (
            <div className=" bg-white rounded-xl">
              <div className="p-4">
                <img
                  src={i.src}
                  alt={i.name}
                  className={"mr-2 w-[3.5rem] h-[3.5rem] object-contain"}
                />
                <div className={"text-size-normal text-[#000] mt-[1.25rem]"}>
                  {i.name}
                </div>
                <div className={"text-[#000] text-H6 mt-2"}> {i.ips}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
