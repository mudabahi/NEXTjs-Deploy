import React from "react";

const Seosectionone = () => {
  return (
    <div
      className="Hero !bg-left lg:!bg-right-top w-full border border-red-600"
      style={{
        backgroundImage: "url('/SEO/banner-seo.webp')",
      }}
    >
      <div className="container md:h-screen flex flex-col md:justify-center pt-44 md:pt-0 items-start px-4 md:px-10 w-full h-[600px] gap-y-8 md:gap-y-0">
        <h5 className="text-white text-xl md:text-4xl md:font-extrabold md:py-4 md:leading-normal text-start font-semibold ">
          Optimized Marketing to
        </h5>

        <h5 className="text-2xl md:text-4xl text-yellow-300">
          {" "}
          Enhance Your Business
          <br className="hidden md:block" /> Position
        </h5>
        <p className="text-white text-wrap text-base md:text-xl pb-4">
          Market your business to appear the best on the search engines
        </p>
        {/* <div className="flex justify-center items-center rounded-sm">
        <button className=" py-2 px-4 md:py-3 md:px-6 bg-violet-600 text-white text-center font-bold text-sm md:text-lg"> */}
        <div className="flex justify-center flex-col md:flex-row items-center gap-1">
          <button className=" py-2 px-4 md:py-4 md:px-6 bg-custom-violet text-white text-center font-bold">
            Custom Degital Marketing From
            <span className="text-yellow-400 md:text-lg text-center">
              {" "}
              $299
            </span>{" "}
          </button>
          <button className="py-2 px-4 md:py-3 md:px-4 bg-yellow-400 text-center md:text-lg font-bold text-sm">
            {/* <button className="py-2 px-4 md:py-4 md:px-4 bg-yellow-400 text-center md:text-2xl font-bold w-full md:w-fit"> */}
            Live Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Seosectionone;
