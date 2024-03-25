import Image from "next/image";
import React from "react";

const Portfolioview = ({
  path,
  source,
}: {
  path: string;
  source: string;
}) => {
  return (
    <div className="">
      <Image
        src={`/${path}/${source}.webp`}
        className="w-full cursor-pointer"
        alt=""
        width={300}
        height={300}
      />
    </div>
  );
};

export default Portfolioview;
