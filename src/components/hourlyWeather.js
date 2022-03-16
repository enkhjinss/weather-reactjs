import { useEffect } from "react";
import image from "../assets/images/sean-oulashin-KMn4VEeEPR8-unsplash.jpg";

export const HourlyWeather = ({ selectedCountry }) => {
    // console.log(selectedCountry);
    // console.log(selectedCountry.currently);
    const data = selectedCountry.currently || { temperature: "0" };

    // console.log(selectedCountry);
    return (
        <div className="hourlyWeatherContainer" style={{}}>
            <div
                className="flex align-center"
                style={{ height: "20%", marginTop: "100%", color: "#fff" }}
            >
                <p className="temperature">{data.temperature}</p>
                <h1>{selectedCountry.place_name}</h1>
                <img src={image} />
            </div>
        </div>
    );
};
