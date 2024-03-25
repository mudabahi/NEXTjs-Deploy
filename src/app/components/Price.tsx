import React from "react";
import Link from "next/link";
import { logoItems } from "../utils/constants";
import Button from "./Button";

const PriceCard = ({
  title,
  highlightText,
  price,
}: {
  title: string;
  highlightText: string;
  price: number;
}) => {
  return (
    <section className="border-2 w-full sm:w-auto">
      <div className="px-4 md:px-8 flex gap-y-3 flex-col py-5 md:pt-10">
        <h5 className="text-4xl uppercase md:text-xl md:font-bold font-extrabold text-wrap">
          {title} <br />
          <span className="text-violet-500">{highlightText}</span>
        </h5>
        <p className="text-sm py-1 bg-white font-normal text-[#727272]">
          Best value for Money Guranteed
        </p>
      </div>
      <h5 className="py-6 flex items-start gap-x-1 justify-center bg-gray-300 bg-opacity-50 text-center font-extrabold text-5xl tracking-tighter relative">
        <span className="text-violet-500 font-extrabold text-2xl pt-1">$</span>
        {price}.00
      </h5>
      <div className=" text-wrap max-h-[300px] overflow-y-scroll packages-custom-scroll">
        <ul className="py-4 leading-8 text-sm px-4 md:px-8 lg:px-10">
          {logoItems.map((items, index) => (
            <li className="list-disc" key={index}>
              {items}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-start text-center py-4 gap-3">
        <Button type="primary" btnText="Oder Now" />
        <Button btnText="Live Chat" />
      </div>
    </section>
  );
};

export default PriceCard;
