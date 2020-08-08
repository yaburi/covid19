import React, { memo, Fragment } from 'react';
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from 'react-simple-maps';

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({
  setTooltipContent,
  handleChange,
  countrySelected
}) => {
  return (
    <Fragment>
      <ComposableMap data-tip="" height={300}>
        <ZoomableGroup center={[15, 0]} zoom={0.5} minZoom={0.5}>
          <Geographies geography={geoUrl} stroke="#FFFFFF" strokeWidth={0.5}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => {
                    const { ISO_A2 } = geo.properties;
                    handleChange(ISO_A2);
                  }}
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;
                    setTooltipContent(`${NAME}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill:
                        countrySelected === geo.properties.ISO_A2
                          ? "#43AA8B"
                          : "#577590",
                      outline: "none",
                    },
                    hover: {
                      fill: "#90BE6D",
                      outline: "none",
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </Fragment>
  );
};

export default memo(MapChart);