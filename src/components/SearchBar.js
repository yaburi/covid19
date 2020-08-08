import React, { useState, useEffect } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ListSubheader from "@material-ui/core/ListSubheader";
import { fetchCountryList } from "../api";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: 10,
    minWidth: 200,
  },
}));

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
      <FormControl className={classes.formControl}>
        <InputLabel>Country</InputLabel>
        <Select
          onChange={(e) => handleChange(e.target.value)}
          value={countrySelected}
        >
          <MenuItem key="World" value="world">World</MenuItem>
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
    </div>
  );
};

export default SearchBar;
