import React, { memo, useState, useEffect } from "react";
import { scaleQuantile } from "d3-scale";
import CircularProgress from "@material-ui/core/CircularProgress";

import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const geoData =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const DEFAULT_COLOR = "#EEE";

const COLOR_RANGE = [
  "#FFFAFA",
  "#F4C2C2",
  "#FF6961",
  "#FF5C5C",
  "#FF1C00",
  "#FF0800",
  "#FF0000",
  "#CC0000",
  "#A40000",
  "#800000",
  "#701C1C",
  "#3C1414",
];

const MapChart = ({
  setTooltipContent,
  handleChange,
  allCountryData,
  countrySelected,
}) => {
  const [isLoadingChloropleth, setIsLoadingChloropleth] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoadingChloropleth(false);
    }, 2000);
  }, []);

  const colourScale = scaleQuantile()
    .domain(allCountryData.map((country) => country.value))
    .range(COLOR_RANGE);

  return (
    <>
      {isLoadingChloropleth ? <CircularProgress /> : ""}
      <ComposableMap data-tip="" height={300}>
        <ZoomableGroup center={[15, 0]} zoom={0.6} minZoom={0.6}>
          <Geographies geography={geoData} stroke="#fff" strokeWidth={1}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const current = allCountryData.find(
                  (country) => country.iso2 === geo.properties.ISO_A2
                );
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => {
                      const { ISO_A2 } = geo.properties;
                      handleChange(ISO_A2);
                    }}
                    onMouseEnter={() => {
                      const { NAME } = geo.properties;
                      setTooltipContent(`${NAME} `);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    fill={current ? colourScale(current.value) : DEFAULT_COLOR}
                    style={{
                      default: {
                        fill:
                          countrySelected === geo.properties.ISO_A2
                            ? "#065180" // show this colour if a country is selected
                            : current
                            ? colourScale(current.value) // else show the choropleth colours
                            : DEFAULT_COLOR,
                        outline: "none",
                      },
                      hover: {
                        fill: "#93cef5",
                        transition: "all 100ms",
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      )
    </>
  );
};

export default memo(MapChart);
