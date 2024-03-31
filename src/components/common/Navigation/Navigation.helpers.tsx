import { AiFillGithub } from "react-icons/ai";
import {
  FaLinkedinIn,
  FaPinterest,
  FaInstagram,
  FaStackOverflow,
  FaHome,
} from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";
import { SiAboutdotme } from "react-icons/si";
import { AiOutlineProject } from "react-icons/ai";
import Icon from "./Icon";
import { Home } from "lucide-react";

export const getIcon = (icon: string) => {
  // any class name you add here is passed to the svg
  switch (icon) {
    case "home":
      return (
        <Icon iconClass="home" exRef="https://github.com/yilmazbingo">
          <FaHome />
        </Icon>
      );
    case "about":
      return (
        <Icon iconClass="user" exRef="/about">
          <SiAboutdotme />
        </Icon>
      );

    case "contact":
      return (
        <Icon iconClass="contact" exRef="/contac">
          <GrContact />
        </Icon>
      );

    case "github":
      return (
        <Icon iconClass="github" exRef="https://github.com/yilmazbingo">
          <AiFillGithub />
        </Icon>
      );
    case "linkedin":
      return (
        <Icon iconClass="linkedin" exRef="https://github.com/yilmazbingo">
          <FaLinkedinIn />
        </Icon>
      );
    case "pinterest":
      return (
        <Icon
          iconClass="pinterest"
          exRef="https://www.pinterest.com/zeyinstore/"
        >
          <FaPinterest />
        </Icon>
      );
    case "instagram":
      return (
        <Icon
          iconClass="instagram"
          exRef="https://www.instagram.com/zeyin_art/"
        >
          <FaInstagram />
        </Icon>
      );
    case "stackoverflow":
      return (
        <Icon
          iconClass="stackoverflow"
          exRef="https://stackoverflow.com/users/10262805/yilmaz"
        >
          <FaStackOverflow />
        </Icon>
      );
    case "youtube":
      return (
        <Icon
          iconClass="youtube"
          exRef="https://www.youtube.com/channel/UCiWhssryq8kgsFwFB5NrWSQ"
        >
          <TiSocialYoutubeCircular />
        </Icon>
      );
    case "twitter":
      return (
        <Icon iconClass="twitter" exRef="https://twitter.com/bingolyilmazNy">
          <FaXTwitter />
        </Icon>
      );
    case "projects":
      return (
        <Icon iconClass="contact" exRef="/projects">
          <AiOutlineProject />
        </Icon>
      );
    default:
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
  }
};
