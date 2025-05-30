import React, {useState} from 'react';
import WeatherIcon from './WeatherIcon';
import './WeatherForecast.css';
import axios from 'axios';
import ForecastIcon  from './ForecastIcon';


export default function WeatherForecast(props){
    let [loaded, setLoaded]= useState(false);
    let [forecast, setForecast]= useState(null);
    
    function handleResponse(response){
    console.log(props);
    setLoaded(true);
    setForecast(response.data.daily);
    }


if(loaded){
 return(
<div className='WeatherForecast'>
        <div className='row'>
            <div className='col'> 
                <div className='forecast-day'>{forecast[0].time}</div>
                <div className='forecast-icon'><ForecastIcon code={forecast[0].condition.icon} size={36}/></div>
                <div className='forecast-temps'>
                <span className='forecast-temp-max'>{forecast[0].temperature.maximum}°</span>
                <span className='forecast-temp-min'>{forecast[0].temperature.minimum}°</span>
             </div>
            </div>
        </div>
    </div>
);

}else{
    let apiKey="63cfca8914bd477f3o208b63ta8c064a";
    let lati= props.coordinates.lat;
    let longi=props.coordinates.lon;
    let apiUrl=`https://api.shecodes.io/weather/v1/forecast?lon=${longi}&lat=${lati}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

return "Loading forecast";
  
}
       

    
}