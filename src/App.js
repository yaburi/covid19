import React from "react";
import CovidPage from "./containers/CovidPage";
import ReactGA from "react-ga";
import './styles/App.scss';

ReactGA.initialize("UA-175694066-1");

function App() {
  ReactGA.pageview("/homepage");
  return <CovidPage />;
}

export default App;
