import React from "react";
import { Card, Typography, CardContent, Grid } from "@material-ui/core";
import styled from "styled-components";
import NumberFormat from "react-number-format";

const DivWrapper = styled.div`
  width: 70%;
  margin: auto;
`;

const LastUpdated = styled.h1`
  font-size: 0.9rem;
  font-weight: 600;
  margin: 1rem 0;
  font-family: Helvetica;
`;

const CardBox = styled.div`
  text-align: center;
  border-top: ${(props) => props.borderColor};
`;

const borderColor = {
  deaths: "5px solid red",
  recovered: "5px solid green",
  confirmed: "5px solid orange",
};

const CardDetail = ({
  data: { confirmed, deaths, recovered, lastUpdate },
  countrySelected,
}) => {
  const confirmedCases = (
    <NumberFormat
      value={confirmed.value}
      displayType={"text"}
      thousandSeparator={true}
    />
  );
  const recoveredCases = (
    <NumberFormat
      value={recovered.value}
      displayType={"text"}
      thousandSeparator={true}
    />
  );
  const confirmedDeaths = (
    <NumberFormat
      value={deaths.value}
      displayType={"text"}
      thousandSeparator={true}
    />
  );

  return (
    <DivWrapper>
      <LastUpdated>{`Last Updated: ${new Date(
        lastUpdate
      ).toDateString()}`}</LastUpdated>
      <LastUpdated>
        {countrySelected ? countrySelected : "Global Count"}
      </LastUpdated>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <CardBox borderColor={borderColor.confirmed}>
            <Card>
              <CardContent>
                <Typography>Confirmed</Typography>
                <Typography variant="body1">{confirmedCases}</Typography>
              </CardContent>
            </Card>
          </CardBox>
        </Grid>
        <Grid item xs={4}>
          <CardBox borderColor={borderColor.recovered}>
            <Card>
              <CardContent>
                <Typography>Recovered</Typography>
                <Typography>{recoveredCases}</Typography>
              </CardContent>
            </Card>
          </CardBox>
        </Grid>
        <Grid item xs={4}>
          <CardBox borderColor={borderColor.deaths}>
            <Card>
              <CardContent>
                <Typography>Deaths</Typography>
                <Typography>{confirmedDeaths}</Typography>
              </CardContent>
            </Card>
          </CardBox>
        </Grid>
      </Grid>
    </DivWrapper>
  );
};

export default CardDetail;
