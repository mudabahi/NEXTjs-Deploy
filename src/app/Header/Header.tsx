"use client";
import Link from "next/link";
import React from "react";
import CallIcon from "@mui/icons-material/Call";
import Button from "@mui/material/Button";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { useState } from "react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const handleNav = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <div className="flex justify-between px-8 items-center  bg-slate-50 py-4 gap-x-2  max-w-screen-xl mx-auto">
        <div>
          <Link href={"/"}>
            <Image
              priority
              src={"/header-logo.webp"}
              alt=""
              width={200}
              height={200}
              className="max-h-[150px] max-w-[150px] lg:max-w-none lg:max-h-none"
              // layout="responsive"
            />
          </Link>
        </div>
        <div className="hidden md:flex md:justify-center md:items-center md:gap-4 md:whitespace-nowrap">
          <li className="list-none">
            <Link className="custom-link custom-link-black" href={"/about-us"}>
              About us
            </Link>
          </li>
          <li className="list-none">
            {" "}
            <Link className="custom-link custom-link-black" href={"/"}>
              Pricing
            </Link>
          </li>
          <li className="list-none">
            <Link className="custom-link custom-link-black" href={"/"}>
              Contact us
            </Link>
          </li>
        </div>
        <div className="hidden md:flex md:items-center md:justify-normal md:gap-2 md:whitespace-nowrap px-4 text-xl py-1 rounded-sm">
          <i>
            <CallIcon />
          </i>
          <p>(800) 840-4530</p>
          <div className="hidden lg:block lg:gap-x-2">
            <Button
              variant="contained"
              className=" bg-custom-violet hover:bg-yellow-400 transition duration-500 ease-in-out text-white py-3 px-4 rounded-md"
            >
              Reques a Custom Quote
            </Button>
          </div>
        </div>
        <div className="md:hidden" onClick={handleNav}>
          <FaBars />
        </div>
      </div>
      <div className="hidden md:flex md:items-center md:justify-center md:gap-10 bg-custom-violet md:text-white md:font-semibold py-4 text-[14px] font-[500px] tracking-normal md:gap-x-24 ">
        <Link href={"/"} className="custom-link custom-link-white ">
          LOGO & BRANDING
        </Link>
        <Link href={"/website"} className="custom-link custom-link-white ">
          WEBSITE DESIGN
        </Link>
        <Link href={"/seo"} className="custom-link custom-link-white ">
          SEO
        </Link>
        <Link href={"/mobile-app"} className="custom-link custom-link-white ">
          MOBILE APP
        </Link>
        <Link
          href={"/animation"}
          className="custom-link custom-link-white  ease-in duration-500"
        >
          ANIMATION
        </Link>
      </div>
      {/* Handle function for the menubar */}
      <div
        className={`fixed top-0 left-0 w-[65%] h-screen ease-in duration-500 p-10 md:hidden bg-black z-10 ${
          isOpen ? "left-0" : "left-[-100%]"
        }`}
      >
        <div className="flex items-center w-full justify-end text-white font-semibold underline">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose className="text-white" />
          </div>
        </div>
        <div className="flex-col py-4 text-white text-start hover:underline">
          <ul>
            <li onClick={() => setOpen(false)} className="py-4 cursor-pointer">
              <Link href={"/logo-branding"}> LOGO & BRANDING</Link>
            </li>
            <li onClick={() => setOpen(false)} className="py-4 cursor-pointer">
              <Link href={"/website"}>WEBSITE DESIGN</Link>
            </li>
            <li onClick={() => setOpen(false)} className="py-4 cursor-pointer">
              <Link href={"/seo"}>SEO</Link>
            </li>
            <li onClick={() => setOpen(false)} className="py-4 cursor-pointer">
              <Link href={"/mobile-app"}>MOBILE APPS</Link>
            </li>
            <li className="py-4 cursor-pointer">
              <Link href={"/animation"}>ANIMATION</Link>
            </li>
            <li className="py-4 cursor-pointer">
              <Link href={"/about-us"}>About Us</Link>
            </li>
            <li className="py-4 cursor-pointer">
              <Link href={"/pricing"}>Pricing</Link>
            </li>
            <li className="py-4 cursor-pointer">
              <Link href={"/contact-us"}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
