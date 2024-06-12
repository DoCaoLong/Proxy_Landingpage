import React from "react";
import Container from "../../atoms/container";

export default function AboutUs() {
  return (
    <section
      style={{
        background: "linear-gradient(90deg, #F63155 0%, #F6892F 100%)",
      }}
      className="py-10 lg:py-[5rem]"
    >
      <Container>
        <div className="flex flex-col md:flex-row lg:items-center lg:justify-between gap-6 text-white">
          <div className="w-full lg:w-[40%]">
            <img src="/icons/about-us.svg" alt="" />
            <h2 className="text-[2.4375rem] font-semibold">About Us</h2>
            <div className="mt-10">
              <h3 className="text-[1.5625rem] font-semibold">
                100M+ ethically sourced Residential Proxy pool
              </h3>
              <p className="text-base mt-4">
                A large proxy pool means you receive access to Residential IP
                addresses from all over the world, so you can easily overcome
                geo-location blocks.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[60%]">
            <img
              src="/about-us.png"
              alt="About Us"
              className="mix-blend-overlay"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
