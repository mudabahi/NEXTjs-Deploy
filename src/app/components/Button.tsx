import React from "react";

function Button({
  btnText,
  type,
  className,
}: {
  btnText: string;
  type?: string;
  className?: string;
}) {
  return (
    <>
      {type === "primary" ? (
        <a
          href=""
          className={` animate-btn uppercase font-normal py-2 px-4 text-sm bg-custom-violet  text-white ${className}`}
        >
          {btnText}
        </a>
      ) : (
        <a
          href=""
          className={`uppercase font-normal text-sm bg-[#ffeb3b] hover:bg-[#ffeb3b] py-2 px-4 ${className}`}
        >
          {btnText}
        </a>
      )}
    </>
  );
}

export default Button;
