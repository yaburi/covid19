import React, { Component } from "react";
import { fetchData } from "../api";
import Cards from "../components/Cards";
import SearchBar from "../components/SearchBar";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

class CovidPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  async componentDidMount() {
    const covidData = await fetchData();
    this.setState({ data: covidData });
  }

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
    const { data } = this.state;
    return (
      <div>
        <this.TitleBar>Covid-19 Statistics</this.TitleBar>
        {data ? (
          <Cards data={data} />
        ) : (
          <this.Wrapper>
            <CircularProgress />
          </this.Wrapper>
        )}
        <SearchBar />
      </div>
    );
  }
}

export default CovidPage;
