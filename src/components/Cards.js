import React from "react";
import { Card, Typography, CardContent, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import NumberFormat from "react-number-format";

const DivWrapper = styled.div`
  width: 70%;
  margin: auto;
`;

const LastUpdated = styled.h1`
  font-size: 0.8rem;
  margin: 1rem 0;
  font-family: Helvetica;
`;

const CardBox = styled.div`
  text-align: center;
`;

const useStyles = makeStyles((theme) => ({
  confirmed: {
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#ff9f1c",
  },
  recovered: {
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#2ec4b6",
  },
  deaths: {
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#e71d36",
  },
}));

const CardDetail = ({
  data: { confirmed, deaths, recovered, lastUpdate },
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
  
  if (lastUpdate !== "-") {
    lastUpdate = new Date(lastUpdate).toLocaleDateString();
  }
  
  const classes = useStyles();

  return (
    <DivWrapper>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <CardBox>
            <Card>
              <CardContent>
                <Typography>Confirmed</Typography>
                <Typography className={classes.confirmed}>
                  {confirmedCases}
                </Typography>
              </CardContent>
            </Card>
          </CardBox>
        </Grid>
        <Grid item xs={4}>
          <CardBox>
            <Card>
              <CardContent>
                <Typography>Recovered</Typography>
                <Typography className={classes.recovered}>
                  {recoveredCases}
                </Typography>
              </CardContent>
            </Card>
          </CardBox>
        </Grid>
        <Grid item xs={4}>
          <CardBox>
            <Card>
              <CardContent>
                <Typography>Deaths</Typography>
                <Typography className={classes.deaths}>
                  {confirmedDeaths}
                </Typography>
              </CardContent>
            </Card>
          </CardBox>
        </Grid>
      </Grid>
      <LastUpdated>{`Last Updated: ${lastUpdate}`}</LastUpdated>
    </DivWrapper>
  );
};

export default CardDetail;
