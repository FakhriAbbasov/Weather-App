import { AsyncPaginate } from "react-select-async-paginate";
import React, { useState } from "react";
import { GEOurl, geoApiOptions } from "../api";

const Search = ({ handleSearch }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${GEOurl}?minPopulation=300000&&sort=-population&namePrefix=${inputValue}`,
        geoApiOptions
      );
      const ans = await response.json();
      if (!response.ok) {
        throw new Error("Invalid search");
      }
      const options = ans.data.map((city) => ({
        value: `${city.latitude} ${city.longitude}`,
        label: `${city.name}, ${city.countryCode}`,
      }));
      return { options };
    } catch (error) {
      console.error(error);
      return { options: [] };
    }
  };

  const citySearched = (searchCity) => {
    setSearch(searchCity);
    handleSearch(searchCity);
  };

  return (
    <AsyncPaginate
      placeholder="Search for a city"
      value={search}
      onChange={citySearched}
      loadOptions={loadOptions}
      debounceTimeout={500}
    />
  );
};

export default Search;
