import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { countries } from "../data/countries";

const SearchBar = () => {
  const [countrySelected, setCountrySelected] = useState("Global");
  console.log(countrySelected);

  console.log(countries);

  const handleChange = () => {
    console.log("hello");
  };

  return (
    <div>
      <FormControl>
        <InputLabel>Country</InputLabel>
        <Select value={countrySelected} onChange={handleChange}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SearchBar;
