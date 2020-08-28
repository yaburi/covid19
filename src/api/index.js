import axios from "axios";

const baseUrl = "https://covid19.mathdro.id/api";
const countryUrl = `${baseUrl}/countries/`;

export const fetchData = async (country = "") => {
  let url = baseUrl;
  if (country && country !== "world") {
    url = `${countryUrl}${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    const data = {
      confirmed: { value: "-" },
      recovered: { value: "-" },
      deaths: { value: "-" },
      lastUpdate: "-",
    };
    return data;
  }
};

export const fetchDailyData = async () => {
  try {
    const response = await axios.get(`${baseUrl}daily`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountryList = async () => {
  try {
    const response = await axios.get(countryUrl);
    return response.data.countries;
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllCountryConfirmedData = async () => {
  try {
    const countryArray = await fetchCountryList();
    const allCountryData = [];
    countryArray.map(async (country) => {
      const individualCountryInfo = await fetchIndividualCountryTotalData(
        country
      );
      if (!!individualCountryInfo) {
        allCountryData.push({
          name: country.name,
          iso2: country.iso2,
          ...individualCountryInfo,
        });
      }
    });
    console.log(allCountryData);
    return allCountryData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchIndividualCountryTotalData = async ({ name }) => {
  try {
    const countryData = await axios.get(`${countryUrl}${name}`);
    return countryData.data.confirmed;
  } catch (e) {
    console.log(e);
  }
};
