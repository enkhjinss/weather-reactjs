import { useState } from "react";
import { HourlyWeather } from "./HourlyWeather";
import { AnotherLocaton } from "./AnotherLocation";
import { WeatherDetails } from "./WeatherDetails";

import "../assets/styles/flex.css";
const TheWeather = () => {
    const [selectedCountry, setSelectedCountry] = useState({});
    const [countriesArray, setCountriesArray] = useState([]);

    return (
        <main className="flex">
            <HourlyWeather selectedCountry={selectedCountry} />
            <div className="other flex column">
                <AnotherLocaton
                    countriesArray={countriesArray}
                    setCountriesArray={setCountriesArray}
                    setSelectedCountry={setSelectedCountry}
                />
                <WeatherDetails selectedCountry={selectedCountry}/>
            </div>
        </main>
    );
};

export default TheWeather;
