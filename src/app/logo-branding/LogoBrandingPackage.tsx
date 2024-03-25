import React from "react";
import Link from "next/link";
import Button from "../components/Button";

interface Package {
  name: string;
  price: string;
  services: string[];
}

interface PackageCardProps {
  pack: Package;
}

const LogoBrandingPackage: React.FC<PackageCardProps> = ({ pack }) => {
  return (
    <div className="package-card border-2 w-full sm:w-auto rounded-md shadow-md">
      <h5 className="text-4xl md:text-xl md:font-bold font-extrabold text-center  text-wrap pt-9 text-violet-800 ">
        {pack.name}
      </h5>
      <p className="text-sm py-1 bg-white text-center font-semibold">
        Best Value for Money Guaranteed!
      </p>
      <h5 className="py-6 bg-gray-300 bg-opacity-50 text-center font-extrabold text-3xl">
        {pack.price}.00
      </h5>
      <div className="  text-start text-wrap max-h-[300px] md:max-h-[200px] overflow-y-scroll px-12">
        <ul className="py-4 leading-8 text-sm md:px-4 list-disc">
          {pack.services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-start text-center py-4 gap-3">
        <Button type="primary" btnText="Oder Now" />
        <Button btnText="Live Chat" />
      </div>
    </div>
  );
};

export default LogoBrandingPackage;
