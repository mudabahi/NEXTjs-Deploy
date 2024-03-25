import { useState } from "react";
import React from "react";
import Logosection from "./Logosection";
import Stationerysection from "./Stationerysection";
const Portfolio = () => {
  const [tab, setTab] = useState("logo");

  const handleChange = (e: any) => {
    setTab(e);
  };

  const tabs = [
    { name: "LOGO", value: "logo" },
    { name: "STATIONERY", value: "stationery" },
    { name: "BROCHURE", value: "brochure" },
    { name: "WEBSITE", value: "website" },
    { name: "APP", value: "app" },
    { name: "ANIMATIONS", value: "ani" },
  ];

  return (
    <div
      className="py-8 text-white "
      style={{
        backgroundImage: "url('/portfolio-banner.webp')",
      }}
    >
      <h1 className="md:text-4xl text-2xl text-center text-wrap">
        Brilliant Ideas <br /> That Create Great Value
      </h1>
      <div className="home-second-wrapper-tabs">
        <div className="flex font-normal items-center justify-center gap-4 py-8 flex-wrap nav nav-tabs">
          {tabs.map((item) => (
            <button
              className={`nav-link  ${item.value == tab ? "active" : ""}`}
              key={item.value}
              type="button"
              onClick={() => handleChange(item.value)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      {/* <div className="home-second-wrapper-tabs">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="home-tab-01"
              data-toggle="tab"
              href="#home-01"
              role="tab"
              aria-controls="home-01"
              aria-selected="true"
            >
              Logo
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              id="home-tab-02"
              data-toggle="tab"
              href="#home-02"
              role="tab"
              aria-controls="home-02"
              aria-selected="false"
            >
              Stationery
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              id="home-tab-03"
              data-toggle="tab"
              href="#home-03"
              role="tab"
              aria-controls="home-03"
              aria-selected="false"
            >
              Brochure
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              id="home-tab-04"
              data-toggle="tab"
              href="#home-04"
              role="tab"
              aria-controls="home-04"
              aria-selected="false"
            >
              Website
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              id="home-tab-05"
              data-toggle="tab"
              href="#home-05"
              role="tab"
              aria-controls="home-05"
              aria-selected="false"
            >
              App
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              id="home-tab-06"
              data-toggle="tab"
              href="#home-06"
              role="tab"
              aria-controls="home-06"
              aria-selected="false"
            >
              Video
            </a>
          </li>
        </ul>
      </div> */}
      <div>
        {tab === "logo" && <Logosection />}
        {tab === "stationery" && <Stationerysection />}
      </div>
    </div>
  );
};

export default Portfolio;
