import React, { useState } from "react";
import MapChart from "../components/MapChart";
import ReactTooltip from "react-tooltip";
import "../styles/Map.scss";

const Map = ({ handleChange, countrySelected, allCountryData }) => {
  const [content, setContent] = useState("");

  return (
    <>
      <MapChart
        setTooltipContent={setContent}
        handleChange={handleChange}
        countrySelected={countrySelected}
        allCountryData={allCountryData}
      />
      <ReactTooltip className="toolTip">{content}</ReactTooltip>
    </>
  );
};

export default Map;
