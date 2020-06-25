import React, { useState, useEffect } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
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

  const classes = useStyles();
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel>Country</InputLabel>
        <Select
          onChange={(e) => handleChange(e.target.value)}
          value={countrySelected}
        >
          {countries
            ? countries.map((country) => (
                <MenuItem key={country.name} value={country.name}>
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
