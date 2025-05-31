import React from 'react';
import ForecastIcon from './ForecastIcon';

export default function ForecastDay(props){
function maxTemp(){
    let temp= Math.round(props.data.temperature.maximum);
    return `${temp}°`
}
function minTemp(){
    let temp= Math.round(props.data.temperature.minimum);
    return `${temp}°`
}

function day(){
    let days=["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
    let date= new Date(props.data.time*1000);
    let  day = date.getDay();

    

    return days[day];
}

    return(
        <div className='forecast-data'>
    <div className='forecast-day'>{day()}</div>
                <div className='forecast-icon mb-3 me-4'><ForecastIcon code={props.data.condition.icon} size={36}/></div>
                <div className='forecast-temps'>
                <span className='forecast-temp-max'>{maxTemp()}</span>
                <span className='forecast-temp-min'>{minTemp()}</span>
             </div>
            </div>
        
    );
}