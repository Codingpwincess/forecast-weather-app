import React from 'react'
import FormattedDate from './FormattedDate'
import WeatherIcon from './WeatherIcon'
import WeatherUnit from './WeatherUnit'

export default function WeatherInfo(props){
    return(
    <div className='WeatherInfo'>
        <h1 className="mt-5">{props.data.city}, {props.data.country}</h1> 
            <ul>
                <li><FormattedDate date={props.data.date}/></li>
                <li>{props.data.description}</li>
                </ul>
                <div className="row">
<div className="col-6">
    <div className='float-left'>
    <WeatherIcon code={props.data.icon} size={150}/>
    </div>
                </div>
                <div className="col-6">
                    <WeatherUnit celcius={props.data.temperature}/>
                    <ul>
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {props.data.wind} km/h</li>
                    </ul>
                </div>
        </div>
    </div>
    );
}