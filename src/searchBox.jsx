import "./App.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { ariaHidden } from '@mui/material/Modal/ModalManager';

export default function Search({updateinfo}){
    let [city,setCity] = useState('')

    let API_URL = "https://api.openweathermap.org/data/2.5/weather"
    let API_KEY  ="9105cd90dacf90317b10e5c048885fa3"

    async function getweather (){
        let url = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let responsejson = await url.json();
        let result  = {
            name:responsejson.name,
            temp:responsejson.main.temp,
            tempmin:responsejson.main.temp_min,
            tempmax:responsejson.main.temp_max,
            feelslike:responsejson.main.feels_like,
            humidity:responsejson.main.humidity,
            description:responsejson.weather[0].description


        }
        return result;
        console.log(result)
        console.log(responsejson)
    }


    function inphndle(){
        setCity(()=>{
            return(event.target.value)
        })
    }
    async function hndlesub (){
        event.preventDefault()
        console.log(city)
        setCity('');
        let newinfo = await getweather();
        updateinfo(newinfo);
    }
    return(
        <div className='searchbox'>
            
            <form action="" onSubmit={hndlesub}>
            <TextField id="outlined-basic" label="City name" variant="outlined" value={city} onChange={inphndle} />
            <br /><br />
            <Button type='submit' variant="contained" >Search</Button>

            </form>
        </div>
    )
}