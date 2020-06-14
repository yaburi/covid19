import React from "react";
import { Card, Typography, CardContent, Grid } from "@material-ui/core";
import styled from "styled-components";

const DivWrapper = styled.div`
  width: 70%;
  margin: auto;
`;

const CardDetail = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  return (
    <DivWrapper>
      <h1>{`Last Updated: ${lastUpdate}`}</h1>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Card className="covid-cards__confirmed">
            <CardContent>
              <Typography className="title">Confirmed</Typography>
              <Typography className="value">{confirmed.value}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className="covid-cards__recovered">
            <CardContent>
              <Typography className="title">Recovered</Typography>
              <Typography className="value">{recovered.value}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className="covid-cards__deaths">
            <CardContent>
              <Typography className="title">Deaths</Typography>
              <Typography className="value">{deaths.value}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DivWrapper>
  );
};

export default CardDetail;
