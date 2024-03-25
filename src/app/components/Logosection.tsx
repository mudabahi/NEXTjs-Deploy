import React from "react";
import Portfolio from "./Portfolio";
import Portfolioview from "./Portfolioview";

const Logosection = () => {
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-7 justify-center px-6"
      id="logo"
    >
      <Portfolioview source="1" path="Logos" />
      <Portfolioview source="2" path="Logos" />
      <Portfolioview source="3" path="Logos" />
      <Portfolioview source="4" path="Logos" />
      <Portfolioview source="5" path="Logos" />
      <Portfolioview source="6" path="Logos" />
      <Portfolioview source="7" path="Logos" />
      <Portfolioview source="8" path="Logos" />
      <Portfolioview source="9" path="Logos" />
    </div>
  );
};

export default Logosection;
