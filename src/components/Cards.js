import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import NumberFormat from "react-number-format";

const DivWrapper = styled.div`
  width: 70%;
  margin: auto;
`;

const CardBox = styled.div`
  text-align: center;
  margin: 1rem 0;
`;

const useStyles = makeStyles((theme) => ({
  confirmed: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    color: "#ff9f1c",
  },
  recovered: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    color: "#2ec4b6",
  },
  deaths: {
    fontWeight: "bold",
    fontSize: "1.5rem",
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
  
  const classes = useStyles();

  return (
    <DivWrapper>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardBox>
            <Typography>Confirmed</Typography>
            <Typography className={classes.confirmed}>
              {confirmedCases}
            </Typography>
          </CardBox>
        </Grid>
        <Grid item xs={4}>
          <CardBox>
            <Typography>Recovered</Typography>
            <Typography className={classes.recovered}>
              {recoveredCases}
            </Typography>
          </CardBox>
        </Grid>
        <Grid item xs={4}>
          <CardBox>
            <Typography>Deaths</Typography>
            <Typography className={classes.deaths}>
              {confirmedDeaths}
            </Typography>
          </CardBox>
        </Grid>
      </Grid>
    </DivWrapper>
  );
};

export default CardDetail;
