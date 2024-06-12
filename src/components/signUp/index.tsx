import React from "react";
import CheckBox from "../atoms/checkbox/check-box";

import SvgIcon from "../atoms/svg-icon/svg-icon";
import google from "../../assets/icons-input/goodle.svg";
import InputCustom from "../atoms/input";

const SignUpForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div>
        <div className="bg-white p-8 rounded-lg shadow-lg w-full ">
          <div className="text-center mb-6">
            <h2 className="text-size-large gradient-text">Welcome</h2>
            <p className="text-size-normal text-[#88949D]">
              to enjoy all our proxies 🚀
            </p>
          </div>
          <button className="h-[60px] flex w-full border-[#DAE7E7] text-button-1 border rounded-lg   py-4 px-[75.5px] justify-center items-center gap-2 flex-shrink-0 flex mb-[24px]">
            <SvgIcon
              src={google}
              alt="ss"
              className="w-[36px] h-[36px] mr-[8px]"
            />
            <div> Sign in with Google</div>
          </button>
          <div className="flex items-center mb-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-[#091327] text-size-normal">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <form>
            <div className="mb-[16px]">
              <label
                htmlFor="password"
                className="sr-only text-size-normal text-[#091327]"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full text-size-normal text-[#DAE7E7] p-3 border shadow-inputShadow border-[#F53255] rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Password"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="Email"
                className="sr-only text-size-normal text-[#091327]"
              >
                Email
              </label>
              <input
                type="password"
                id="password"
                className="w-full text-size-normal text-[#DAE7E7] p-3 border border-[#DAE7E7] rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Email"
              />
            </div>{" "}
            <InputCustom text={"password"} />
            <InputCustom text={"Password confirmation"} />
            <div className="flex items-center mb-4">
              <label className="flex items-center text-button-1">
                <CheckBox type="checkbox" className="mr-2 " />
                <div className=" flex gap-[5px] items-center">
                  <a href="#" className="text-size-normal">
                    I accept
                  </a>
                  <a href="#" className="text-[#F53255] text-size-normal">
                    Terms of Service
                  </a>
                  <a href="#" className="text-size-normal">
                    and
                  </a>
                  <a
                    href="#"
                    className="text-[#F53255] text-size-normal hover:text-red-800"
                  >
                    Privacy Policy
                  </a>
                </div>
              </label>
            </div>
            <div className="bg-button-gradient h-[44px] flex justify-center items-center rounded-lg	shadow-buttonBy ">
              <button className="text-size-normal text-white ">Sign Up</button>
            </div>
          </form>
        </div>
        <p className="text-center text-size-normal text-[#000] mt-6">
          Already have an account?{" "}
          <a
            href="#"
            className="text-button-1 text-[#F53255] hover:text-red-800"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
