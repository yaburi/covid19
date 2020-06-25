import axios from "axios";

const baseUrl = "https://covid19.mathdro.id/api";
const countryUrl = `${baseUrl}/countries/`;

export const fetchData = async (country = "") => {
  let url = baseUrl;
  if (country) {
    url = `${countryUrl}${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
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
