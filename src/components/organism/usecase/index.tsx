import React from "react";
import TextGradient from "../../atoms/text-gradient/index";
import SvgIcon from "../../atoms/svg-icon/svg-icon";
import Search from "../../../assets/icons-input/Note_Search.svg";
import Keyboard from "../../../assets/icons-input/Keyboard.svg";
import Swatches from "../../../assets/icons-input/Swatches_Palette.svg";
import File_Search from "../../../assets/icons-input/File_Search.svg";
import youtube from "../../../assets/icons-input/youtube.svg";
import Bookmark from "../../../assets/icons-input/Bookmark.svg";
import Tag from "../../../assets/icons-input/Tag.svg";
import Globe from "../../../assets/icons-input/Globe.svg";
import Reddit from "../../../assets/icons-input/reddit.svg";
import Link_Vertical from "../../../assets/icons-input/Link_Vertical.svg";
import Insta from "../../../assets/icons-input/insta.svg";
import Google from "../../../assets/icons-input/goodle.svg";
import Chat from "../../../assets/icons-input/Chat.svg";
import Tiktok from "../../../assets/icons-input/SocialIcons.svg";
import Box from "../../atoms/box/index";
import Amazon from "../../../assets/icons-input/Amazon.png";
import Frame95 from "../../../assets/Frame95.png";

export default function UseCase() {
  const iconUrl = [
    {
      url: Search,
      text: "Data collection",
    },
    {
      url: Keyboard,
      text: "Brand Protection",
    },
    {
      url: Swatches,
      text: "Etsy",
    },
    {
      url: File_Search,
      text: "Marketing Research",
    },
    {
      url: Bookmark,
      text: "SEO Optimization",
    },
    {
      url: youtube,
      text: "Youtube",
    },
    {
      url: Tag,
      text: "Pricing Monitoring",
    },
    {
      url: Globe,
      text: "Social Media",
    },
    {
      url: Reddit,
      text: "Reddit",
    },
    {
      url: Link_Vertical,
      text: "Verification",
    },
    {
      url: Insta,
      text: "Instagram",
    },
    {
      url: Google,
      text: "Google",
    },
    {
      url: Chat,
      text: "Snap Up Merchandise",
    },
    {
      url: Amazon,
      text: "Amazon",
    },
    {
      url: Tiktok,
      text: "TikTok",
    },
  ];
  return (
    <div className={"bg-[#FFFFFF] py-[80px] w-full flex justify-center"}>
      <div className="w-full">
        <div className="flex justify-center">
          <div className={"text-center text-size-large"}>Proxy</div>
          <div className={"w-[4px] h-auto bg-[#F53255] mx-[10px] mt-1"}></div>
          <TextGradient
            text={"Usercase"}
            type={1}
            className={"text-center text-size-large"}
          />
        </div>
        <div className={"flex justify-center 	mt-6"}>
          <div
            className={"text-size-normal w-[434px] text-center text-[#88949D]"}
          >
            Few among the multiple use cases that could be solved with our
            products
          </div>
        </div>
        <div
          className={
            "flex lg:flex-row flex-col justify-between mt-[60px] gap-[3.75rem] w-full"
          }
        >
          <div className={"flex-shrink-0"}>
            <SvgIcon
              src={Frame95}
              alt={"frame"}
              className="aspect-[282/230] h-auto max-h-[230px] w-full lg:max-w-[282px] object-contain"
            />
          </div>
          <div></div>
          <div className={"grid grid-cols-1 md:grid-cols-3 gap-4"}>
            {iconUrl.map((i) => (
              <Box src={i.url} text={i.text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
