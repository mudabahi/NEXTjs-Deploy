import React from "react";
import Link from "next/link";
import Image from "next/image";

const Websitesectiontwo = () => {
  return (
    <div className=" bg-orange-50 md:flex items-center justify-center lg:gap-x-14  pb-12 max-w-screen">
      {" "}
      <div className="md:px-8 px-4">
        <h4 className="text-4xl font-bold mb-8 text-indigo-700 pt-12">
          CMS Website
        </h4>
        <h5 className="text-xl font-medium md:pl-4 md:pb-2 md:text-nowrap">
          Get CMS Website for a Seamless Functionality, <br />
          Contribute, Schedule or Edit
        </h5>
        <p className="text-wrap text-gray-400 leading-8 md:leading-10 pb-5  pt-6 md:pl-8 text-sm md:text-base pr-10 ">
          CMS (content management system) is the most convenient solution which
          enables authorized users to manage publications and content easily.
          Logo Zeal provides custom CMS websites to anyone who wishes complete
          control. Custom CMS is a tool preferred by leading enterprises. We
          create CMS websites to provide your business with advanced control and
          website administration. Our services ensure website performance and
          flexibility. The advanced services are aimed at initiating a positive
          impact on the website.
        </p>
        <div className="flex flex-col gap-y-4 md:flex-row justify-start lg:gap-x-44 py-8 font-semibold mb-6 md:pl-8">
          <ul className="flex flex-col justify-start items-start gap-y-4">
            <li>Simplified Redesigning</li>
            <li>Time-Saving Maintenance</li>
            <li>Easy Collaboration</li>
          </ul>
          <ul className="flex flex-col justify-start items-start gap-y-1 md:gap-y-4 text-xs sm:text-base list-disc">
            <li>All-inclusive Marketing strategy</li>
            <li>Multiple Access</li>
            <li>Streamlined Workflow</li>
          </ul>
        </div>
        <Link
          href={""}
          className="px-8 text-white font-bold text-center rounded-[2px] text-xl py-6 bg-custom-violet mt-6 md:ml-8"
        >
          Request a Custom Quote
        </Link>
      </div>
      <div className="md:pr-12 pt-12">
        <Image src={"/cms-02.webp"} alt="CMS 2" width={2800} height={2800} />
      </div>
    </div>
  );
};

export default Websitesectiontwo;
