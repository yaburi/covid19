import React, { Component } from "react";
import { fetchData, fetchAllCountryConfirmedData } from "../api";
import Cards from "../components/Cards";
import SearchBar from "../components/SearchBar";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";
import Map from "./MapContainer";

class CovidPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      covidData: null,
      countrySelected: "world",
      allCountryData: null,
    };
  }

  async componentDidMount() {
    const covidData = await fetchData();
    const allCountryData = await fetchAllCountryConfirmedData();
    this.setState({ covidData: covidData });
    this.setState({ allCountryData: allCountryData });
  }

  handleChange = async (country) => {
    this.setState({ countrySelected: country });
    const covidData = await fetchData(country);
    this.setState({ covidData: covidData });
  };

  TitleBar = styled.header`
    @media (max-width: 813px) {
      font-size: 1rem;
      padding: 1rem;
      margin-bottom: 0.75rem;
    }
    text-align: center;
    padding: 1.5rem 0;
    margin-bottom: 1rem;
    background: #293241;
    font-size: 1.5rem;
    color: white;
    font-family: Roboto, Helvetica;
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.5);
  `;

  Wrapper = styled.div`
    text-align: center;
  `;

  Loader = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
  `;

  Footer = styled.div`
    text-align: center;
    font-size: 0.7rem;
    margin: 1rem;
    font-family: Helvetica;
  `;

  render() {
    const { covidData, countrySelected, allCountryData } = this.state;

    if (!covidData || !allCountryData) {
      return (
        <this.Loader>
          <CircularProgress />
        </this.Loader>
      );
    }

    if (covidData.lastUpdate !== "-") {
      covidData.lastUpdate = new Date(covidData.lastUpdate).toDateString();
    }

    return (
      <div>
        <this.TitleBar>COVID-19 Statistics</this.TitleBar>
        <this.Wrapper>
          <SearchBar
            handleChange={this.handleChange}
            countrySelected={countrySelected}
          />
          <Cards data={covidData} countrySelected={countrySelected} />
          <Map
            handleChange={this.handleChange}
            countrySelected={countrySelected}
            allCountryData={allCountryData}
          />
        </this.Wrapper>
        <this.Footer>
          Last updated: {covidData.lastUpdate}
          {" // "}
          Created by{" "}
          <a
            href="https://github.com/yaburi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @yaburi
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/preetycool/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @preetycool
          </a>
        </this.Footer>
      </div>
    );
  }
}

export default CovidPage;
