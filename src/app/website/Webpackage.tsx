import React from "react";
import Priceweb from "./Priceweb";
import PriceCard from "../components/Price";

const Webpackage = () => {
  return (
    <div className="pt-12 w-full md:w-auto">
      <h5 className="text-center md:text-4xl font-bold pt-6 text-2xl">
        Crafting Perfect Website Packages <br /> for Corporations Globally
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8  pt-6 pb-12 px-4 md:px-8 ">
        <PriceCard title="Basic" highlightText="WEBSITE" price={499} />
        <PriceCard title="START-UP" highlightText="WEBSITE" price={899} />
        <PriceCard title="PROFESSIONAL" highlightText="WEBSITE" price={1499} />
        <PriceCard title="E-COMMERCE " highlightText="WEBSITE" price={2999} />
        <PriceCard title="CORPORATE " highlightText="WEBSITE" price={3999} />
        <PriceCard title="PLATINUM " highlightText="WEBSITE" price={6999} />
      </div>
    </div>
  );
};

export default Webpackage;
