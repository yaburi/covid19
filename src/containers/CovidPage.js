import React, { Component } from "react";
import { fetchData } from "../api";
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
    };
  }

  async componentDidMount() {
    const covidData = await fetchData();
    this.setState({ covidData: covidData });
  }

  handleChange = async (country) => {
    this.setState({ countrySelected: country });
    const covidData = await fetchData(country);
    this.setState({ covidData: covidData });
  };

  TitleBar = styled.header`
    text-align: center;
    padding: 1.5rem 0;
    margin-bottom: 1rem;
    background: #174558;
    font-size: 1.5rem;
    color: white;
    font-family: Montserrat, Helvetica;
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.5);
  `;

  Wrapper = styled.div`
    text-align: center;
  `;

  render() {
    const { covidData, countrySelected } = this.state;
    if (!covidData) {
      return (
        <this.Wrapper>
          <CircularProgress />
        </this.Wrapper>
      );
    }
    return (
      <div>
        <this.TitleBar>Covid-19 Statistics</this.TitleBar>
        <this.Wrapper>
          <SearchBar
            handleChange={this.handleChange}
            countrySelected={countrySelected}
          />
          <Cards data={covidData} countrySelected={countrySelected} />
          <Map covidData={covidData} handleChange={this.handleChange} />
        </this.Wrapper>
      </div>
    );
  }
}

export default CovidPage;
