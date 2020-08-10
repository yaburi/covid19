import React, { useState, useEffect } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import {
  makeStyles,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ListSubheader from "@material-ui/core/ListSubheader";
import { fetchCountryList } from "../api";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: 10,
    minWidth: 400,
  },
  dropDown: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    color: "white",
    height: "3rem",
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
  },
}));

const overrideFocusTheme = createMuiTheme({
  overrides: {
    MuiSelect: {
      select: {
        "&:focus": {
          backgroundColor: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
        },
      },
    },
  },
});

const SearchBar = ({ handleChange, countrySelected }) => {
  const [countries, setCountriesList] = useState([]);

  useEffect(() => {
    async function getCountries() {
      setCountriesList(await fetchCountryList());
    }
    getCountries();
  }, []);
  
  if (!countries.some((country) => country.iso2 === countrySelected)) {
    if (countrySelected !== "world") {
      countrySelected = "";
    } 
  }

  const classes = useStyles();
  return (
    <div>
      <MuiThemeProvider theme={overrideFocusTheme}>
        <FormControl className={classes.formControl}>
          <InputLabel>Country</InputLabel>
          <Select
            className={classes.dropDown}
            onChange={(e) => handleChange(e.target.value)}
            value={countrySelected}
          >
            <MenuItem key="World" value="world">
              World
            </MenuItem>
            <ListSubheader disableSticky>Country</ListSubheader>
            {countries
              ? countries.map((country) => (
                  <MenuItem key={country.name} value={country.iso2}>
                    {country.name}
                  </MenuItem>
                ))
              : ""}
          </Select>
        </FormControl>
      </MuiThemeProvider>
    </div>
  );
};

export default SearchBar;
