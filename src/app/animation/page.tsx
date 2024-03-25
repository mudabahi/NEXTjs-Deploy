import React from "react";
import AnimationSectionone from "./AnimationSectionone";
import AnimationSectiontwo from "./AnimationSectiontwo";
import AnimationPackageview from "./AnimationPackageview";
import LogoAnimation from "../components/LogoAnimation";
import PortfolioAnimation from "./PortfolioAnimation";
import Logoani from "./Logoani";

const page = () => {
  return (
    <div className="">
      <AnimationSectionone />
      <div className="container">
        <AnimationSectiontwo />
        <AnimationPackageview />
        <PortfolioAnimation />
      </div>
    </div>
  );
};

export default page;
