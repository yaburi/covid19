import React from "react";
import { VectorMap } from "react-jvectormap";
import styled from "styled-components";

const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ChildMapWrapper = styled.div`
  width: 70%;
  height: 400px;
`;

const Map = ({ countrySelected }) => {
  return (
    <MapWrapper>
      <ChildMapWrapper>
        <VectorMap
          map="world_mill"
          zoomOnScroll={false}
          regionsSelectable={false}
          containerStyle={{
            width: "100%",
            height: "100%",
          }}
          containerClassName="map"
          series={{
            regions: [
              {
                values: countrySelected,
              },
            ],
          }}
        />
      </ChildMapWrapper>
    </MapWrapper>
  );
};

export default Map;
