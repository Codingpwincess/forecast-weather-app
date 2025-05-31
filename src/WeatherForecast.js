import React, {useState, useEffect} from 'react';
import ForecastDay from './ForecastDay';
import './WeatherForecast.css';
import axios from 'axios';
import {Helix} from 'ldrs/react';
import 'ldrs/react/Helix.css';



export default function WeatherForecast(props){
    let [loaded, setLoaded]= useState(false);
    let [forecast, setForecast]= useState(null);
    useEffect(() =>{
setLoaded(false);
    }, [props.coordinates]);
    
    function handleResponse(response){
    console.log(props);
    setLoaded(true);
    setForecast(response.data.daily);
    }


if(loaded){
 return(
<div className='WeatherForecast'>
    <h1>Six day Forecast</h1>
        <div className='row'>
            <div className='col'> 
                <ForecastDay data={forecast[1]}/>
        </div>
            <div className='col'> 
                <ForecastDay data={forecast[2]}/>
        </div>
            <div className='col'> 
                <ForecastDay data={forecast[3]}/>
        </div>
            <div className='col'> 
                <ForecastDay data={forecast[4]}/>
        </div>
            <div className='col'> 
                <ForecastDay data={forecast[5]}/>
        </div>
            <div className='col'> 
                <ForecastDay data={forecast[6]}/>
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

return <Helix size={40} speed={1.3} color="black"/>
  
}
       

    
}