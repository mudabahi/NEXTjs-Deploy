import Link from "next/link";
import React from "react";

function HeroSectionBtns({
  btn1text,
  btn2text,
  showArrowIcon,
}: {
  btn1text: String;
  btn2text: String;
  showArrowIcon?: boolean;
}) {
  return (
    <section className="pt-8  pb-16 md:pt-4 md:pb-4 mt-4 ">
      <div className="flex gap-1">
        <Link
          href={""}
          className="home-btn  py-2 px-4 text-base font-bold "
          // className="bg-custom-violet hover:bg-violet-500 py-2 px-4"
        >
          {btn1text}
          {showArrowIcon && <i>{<img src="/arrow.webp" alt="" />}</i>}
        </Link>
        <Link
          href={""}
          className="bg-custom-yellow h-[42px] md:h-[52px] w-auto py-1.5 px-3 md:py-3 md:px-7 text-black text-lg font-normal"
        >
          {btn2text}
        </Link>
      </div>
    </section>
  );
}

export default HeroSectionBtns;
