import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Wonderland",
        feelslike: 29.42,
        temp:30.05,
        tempMin:30.05,
        tempMax:30.05,
        humidity:37,
        weather: "haze",
    });

    let updateInfo = (newinfo) =>{
        setWeatherInfo(newinfo);
    }

    return(
    <div style={{textAlign: "center"}}>
        <h2>Weather App by Delta</h2>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
    </div>
    );
}