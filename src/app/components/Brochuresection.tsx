import React from "react";
import Portfolioview from "./Portfolioview";

const Brochuresection = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Portfolioview source="1" path="Brochure" />
      <Portfolioview source="2" path="Brochure" />
      <Portfolioview source="3" path="Brochure" />
      <Portfolioview source="4" path="Brochure" />
      <Portfolioview source="5" path="Brochure" />
      <Portfolioview source="6" path="Brochure" />
      <Portfolioview source="7" path="Brochure" />
      <Portfolioview source="8" path="Brochure" />
      <Portfolioview source="9" path="Brochure" />
    </div>
  );
};

export default Brochuresection;
