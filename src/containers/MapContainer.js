import React, { useState } from "react";
import MapChart from "../components/MapChart";
import ReactTooltip from "react-tooltip";
import "../styles/Map.scss";

const Map = ({ handleChange, countrySelected, allCountryData }) => {
  const [content, setContent] = useState("");
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <div className="mapContainer">
      <MapChart
        setTooltipContent={setContent}
        handleChange={handleChange}
        countrySelected={countrySelected}
        allCountryData={allCountryData}
      />
      <ReactTooltip
        className="toolTip"
        style={{ cursor: "pointer" }}
        globalEventOff={isMobile ? "touchstart" : undefined}
      >
        {content}
      </ReactTooltip>
    </div>
  );
};

export default Map;
