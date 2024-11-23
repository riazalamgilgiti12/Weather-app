import { useState } from "react";
import MediaCard from "./infocard";
import Search from "./searchBox";

export default function WeatherApp(){
    let [weather,setWeather] = useState({
        description: "overcast clouds",
        feelslike: 21.99,
        humidity: 61,
        name: "Islamabad",
        temp: 22.13,
        tempmax: 22.13,
        tempmin: 22.13,
    })

    function updateinfo(newinfo){
        setWeather(newinfo)
    }
    return(<div>
        <h1>Weather App</h1>
        <Search updateinfo={updateinfo}/>
        <MediaCard result ={weather}/>
    </div>)
}