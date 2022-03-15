import { HourlyWeather } from "./components/hourlyWeather";
import { AnotherLocaton } from "./components/anotherLocation";
import { WeatherDetails } from "./components/weatherDetails";

import "./flex.css";
const TheWeather = () => {
    return (
       <main className="flex">
           <HourlyWeather />
           <div className="other flex column">
               <AnotherLocaton />
               <WeatherDetails />
           </div>
       </main>
    )
}

export default TheWeather;