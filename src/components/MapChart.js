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
  handleChange
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
                      fill: "#D6D6DA",
                      outline: "none",
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none",
                    },
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