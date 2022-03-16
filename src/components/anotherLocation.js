import { SearchCountry } from "./SearchCountry";
import { CountryDetails } from "./CountryDetails";
import { useState } from "react";

const axios = require("axios");

export const AnotherLocaton = ({ setSelectedCountry, countriesArray, setCountriesArray}) => {
    const [countries, setCountries] = useState([]);

    const addNewCountry = (newCountry) => {
        setCountries([...countries, newCountry]);
        axios
            .get(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${newCountry.country}.json?access_token=pk.eyJ1IjoiZW5raGppbnNzIiwiYSI6ImNsMGFlNWNxcjA5Y2Mzam56Znh3azh4NnkifQ.HaaiIR6m8-YJQvELtA2_AA`
            )
            .then((response) => {
                setCountriesArray(response.data.features);
            });
    };

    return (
        <div className="anotherLocationContainer flex column align-center">
            <SearchCountry addNewCountry={addNewCountry} />
            <div className="countriesContainer flex column space-around">
                {countriesArray.length > 0 && countriesArray.map((country, i) => (
                    <CountryDetails
                        key={i}
                        country={country}
                        setSelectedCountry={setSelectedCountry}
                    />
                ))}
            </div>
        </div>
    );
};
