"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Websectionone from "./Websectionone";
import Websitesectiontwo from "./Websitesectiontwo";
import Webpackage from "./Webpackage";
import Websitesectionthree from "./Websitesectionthree";
import Websitesectionfour from "./Websitesectionfour";
import Websiteportfolio from "./Websiteportfolio";
import Websitesectionfive from "./Websitesectionfive";
import Testimonial from "../Home/Testimonial";
import Leadform from "../components/Leadform";
import Footer from "../components/Footer";
import Copyrights from "../components/Copyrights";
import Websitesectionsix from "./Websitesectionsix";
import HeroSectionBtns from "../components/HeroSectionBtns";

const page = () => {
  return (
    <>
      <div
        className="Hero"
        style={{
          backgroundImage: "url('/cms-new-banner.webp')",
        }}
      >
        <div className="flex flex-col items-start justify-center text-white  h-[400px] md:bg-cover md:bg-center md:h-screen w-full md:pl-12 px-12 md:px-0 container">
          <h5 className="font-normal text-3xl text-yellow-300  md:text-4xl">
            Professional{" "}
          </h5>
          <h6 className="text-3xl font-light text-wrap tracking-tight leading-[48px] ">
            Web Design Services <br />{" "}
          </h6>

          <p className="py-4 text-pretty break-all animate_animated animate__slideOutDown">
            Get attractive designs for your business website.
            <br /> We create designs to deliver seamless experiences to{" "}
            <br className="block md:hidden" />
            users.
          </p>

          {/* <HeroSectionBtns btn1text="Custom Website design From $499" btn2text={"Live Chat"} showArrowIcon={false}/> */}
          <section className="py-4">
            <div className="flex flex-col md:flex-row gap-2">
              <Link
                href={""}
                className="bg-custom-violet hover:bg-violet-500 py-2 md:px-4 px-2 text-sm md:text-xl"
              >
                Custom Website design From $499{" "}
              </Link>
              <Link
                href={""}
                className="bg-yellow-500 hover:bg-violet-500 py-2 md:px-6 px-4 text-xs md:text-base"
                // className="bg-yellow-500 hover:bg-violet-500 py-2 md:px-6 px-2 text-sm md:text-xl text-center"
              >
                Live Chat
              </Link>
            </div>
          </section>
        </div>
      </div>
      <div className="container">
        <Websectionone />
        <Websitesectiontwo />
        <Webpackage />
        <Websitesectionthree />
        <Websitesectionfour />
        <Websiteportfolio />
        <Websitesectionfive />
        <Websitesectionsix />
        <Testimonial />
      </div>
    </>
  );
};

export default page;
