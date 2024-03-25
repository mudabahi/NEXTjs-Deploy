import React from "react";
import Portfolioview from "./Portfolioview";
const AppPortfolio = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 px-2 pb-8">
      <Portfolioview source="1" path="Mobile App" />
      <Portfolioview source="2" path="Mobile App" />
      <Portfolioview source="3" path="Mobile App" />
      <Portfolioview source="4" path="Mobile App" />
      <Portfolioview source="5" path="Mobile App" />
      <Portfolioview source="6" path="Mobile App" />
      <Portfolioview source="7" path="Mobile App" />
      <Portfolioview source="8" path="Mobile App" />
      <Portfolioview source="9" path="Mobile App" />
    </div>
  );
};

export default AppPortfolio;
