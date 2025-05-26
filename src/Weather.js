import React, {useState} from 'react';
import WeatherInfo from './WeatherInfo';
import './Weather.css';
import axios from 'axios';


export default function Weather(props){
    const [city, setCity]= useState(props.defaultCity);
    const[ready, setReady]= useState(false); 
    const[weatherData, setweatherData]=useState([]);
    
    function handleResponse(response){

        setweatherData({
    temperature:response.data.main.temp,
    wind:response.data.wind.speed,
    city: response.data.name,
    description:response.data.weather[0].description,
    humidity:response.data.main.humidity,
    icon: response.data.weather[0].icon,
    date: new Date (response.data.dt*1000),
});

setReady(true);
     }
    function search(){
    const apiKey = "a969311cfcbb4a83dfad2cf7478397f9"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    }

     function handleSubmit(event){
        event.preventDefault();
        //search for a city
        search();
     }

     function handleCityChange(event){
       setCity(event.target.value);
     }

    if (ready){
return(
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                <input type= "Search" placeholder="City Name" className="form-control ms-2" autoFocus="on" onChange={handleCityChange}/>
            </div>
            <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100"/>
            </div>
            </div>
            </form>
            <WeatherInfo data={weatherData} />
        </div>
    )
} else{
    search();
    return "The appa is loading.."
}
    

    

}