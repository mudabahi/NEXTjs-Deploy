import React from "react";
import Link from "next/link";
import Button from "../components/Button";

const Sectionfour = () => {
  return (
    <div className="relative">
      <div className="bg-violet-700 text-center md:py-20 py-10 relative overflow-hidden">
        <div className="home-wrapper-dot-01 hidden lg:block">
          <img loading="lazy" src="/dots.webp" />
        </div>
        <h5 className="md:text-4xl text-2xl font-bold text-white">
          Let Us Give Your Brand An Identity <br />
          That Speaks It All For You!
        </h5>
        <p className="text-yellow-300 md:text-xl text-base md:py-8 py-4 text-wrap px-4">
          We transform creative ideas into stunning realities. Share your vision
          with us, we will turn it into reality for you.
        </p>
        <div className="flex items-center justify-center gap-2 md:pb-8 pb-2 ">
          <Button
            type="primary"
            className="h-[50px] animate-btn-yellow !bg-custom-yellow"
            btnText="Request a Custom Quote"
          />
          <Button
            type="primary"
            className="h-[50px] animate-btn-white !bg-white"
            btnText="View All Project"
          />
        </div>
        <div className="home-wrapper-dot-02 hidden lg:block">
          <img loading="lazy" src="/dots.webp" />
        </div>
      </div>

      <div className="text-center text-wrap md:pt-24 pb-5 pt-12">
        <h5 className="text-2xl md:text-4xl font-bold">
          Perfect Logo Packages for <br />
          Corporations Globally
        </h5>
        <p className="pt-8 md:leading-6 md:font-normal italic md:text-base text-sm px-8 md:px-4">
          Our team of experts focus on client and customer satisfaction as the
          ultimate goal for our projects. <br />
          This is one of the many reasons why our work is globally recognized.
        </p>
      </div>
    </div>
  );
};

export default Sectionfour;
