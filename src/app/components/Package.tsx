import React from "react";
import PriceCard from "./Price";

const Package = () => {
  return (
    <div className=" md:py-10 md:px-4 px-4 ">
      <ul className="flex flex-col md:flex-row justify-around items-center text-center font-semibold cursor-pointer">
        <li className="w-full md:w-auto px-6 py-2 transition-all ease-linear delay-300 hover:text-white hover:bg-custom-violet-100 active:bg-custom-violet-100 text-sm border-2 border-[#dadada] hover:border-custom-violet-100 ">
          LOGO & BRANDING
        </li>
        <li className="w-full md:w-auto  px-6 py-2 transition-all ease-linear delay-300 hover:text-white hover:bg-custom-violet-100 active:bg-custom-violet-100 text-sm border-2 border-[#dadada] hover:border-custom-violet-100 ">
          WEBSITE
        </li>
        <li className="w-full md:w-auto px-6 py-2 transition-all ease-linear delay-300 hover:text-white hover:bg-custom-violet-100 active:bg-custom-violet-100 text-sm border-2 border-[#dadada] hover:border-custom-violet-100 ">
          EXPLAINER VIDEO
        </li>
        <li className="w-full md:w-auto px-6 py-2 transition-all ease-linear delay-300 hover:text-white hover:bg-custom-violet-100 active:bg-custom-violet-100 text-sm border-2 border-[#dadada] hover:border-custom-violet-100 ">
          PRINTING
        </li>
        <li className="w-full md:w-auto px-6 py-2 transition-all ease-linear delay-300 hover:text-white hover:bg-custom-violet-100 active:bg-custom-violet-100 text-sm border-2 border-[#dadada] hover:border-custom-violet-100 ">
          WEB PORTAL
        </li>
        <li className="w-full md:w-auto px-6 py-2 transition-all ease-linear delay-300 hover:text-white hover:bg-custom-violet-100 active:bg-custom-violet-100 text-sm border-2 border-[#dadada] hover:border-custom-violet-100 ">
          SEO
        </li>

        <li className="w-full md:w-auto px-6 py-2 transition-all ease-linear delay-300 hover:text-white hover:bg-custom-violet-100 active:bg-custom-violet-100 text-sm border-2 border-[#dadada] hover:border-custom-violet-100 ">
          SMM
        </li>
        <li className="w-full md:w-auto px-6 py-2 transition-all ease-linear delay-300 hover:text-white hover:bg-custom-violet-100 active:bg-custom-violet-100 text-sm border-2 border-[#dadada] hover:border-custom-violet-100 ">
          MOBILE APPLICATION
        </li>
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center pt-10 gap-y-10 gap-x-5">
        <PriceCard title="Logo " highlightText={"Special"} price={49} />
        <PriceCard title="Logo" highlightText={"Plus"} price={199} />
        <PriceCard title="Logo" highlightText={"Platinum"} price={399} />
        <PriceCard title="The" highlightText={"Boss"} price={599} />
        <PriceCard title="Logo " highlightText={"Infinite"} price={1259} />
        <PriceCard title="Logo " highlightText={"Combo"} price={1499} />
      </div>
    </div>
  );
};

export default Package;
