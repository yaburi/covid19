import React, { useState } from "react";
import MapChart from "../components/MapChart";
import ReactTooltip from "react-tooltip";
import '../styles/Map.scss';

export default function Map({ handleChange }) {
  const [content, setContent] = useState("");
  return (
    <>
      <MapChart
        setTooltipContent={setContent}
        handleChange={handleChange}
      />
      <ReactTooltip className="toolTip">{content}</ReactTooltip>
    </>
  );
}