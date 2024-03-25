import React from "react";
import Portfolioview from "./Portfolioview";
const Stationerysection = () => {
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-2"
      id="stationery"
    >
      <Portfolioview source="1" path="Stationery"  />
      <Portfolioview source="2" path="Stationery"  />
      <Portfolioview source="3" path="Stationery"  />
      <Portfolioview source="4" path="Stationery"  />
      <Portfolioview source="5" path="Stationery"  />
      <Portfolioview source="6" path="Stationery"  />
      <Portfolioview source="7" path="Stationery"  />
      <Portfolioview source="8" path="Stationery"  />
      <Portfolioview source="9" path="Stationery"  />
    </div>
  );
};

export default Stationerysection;
