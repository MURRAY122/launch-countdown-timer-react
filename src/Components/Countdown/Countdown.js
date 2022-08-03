import { useState, useEffect } from 'react'; 
import './Countdown.css';
import {getRemainingTime} from './Utils/CountdownUtils';

function Countdown(props) {
    var [CountdownTime, setCountdownTime] = useState(props.CountdownTime);
    const [remainingTime, setRemainingTime] = useState({
        seconds: '00',
        minutes: '00',
        hours: '00',
        days: '00'
    });

    useEffect(() => {
        const intervalId =  setInterval(() => {
            updateRemainingTime(CountdownTime);
        }, 1000);
        return () => clearInterval(intervalId);
    },[CountdownTime])
    

    function updateRemainingTime(countdown){
        setRemainingTime(getRemainingTime(countdown));
    }

    return(
        <div>
        <input title='Select Date' className='date-btn' type="Date" onChange={(e) => {setCountdownTime(new Date(e.target.value))}}></input>
        <div className='countdown-timer'>
            <div className='countdown-number'>
            <span className='numbers'><div className='card-up'></div><div className='card-down'></div><div className='card-number'>{remainingTime.days}</div></span>
            <span className='numbers-label'>Days</span>
            </div>
            <div className='countdown-number'>
            <span className='numbers'><div className='card-up'></div><div className='card-down'></div><div className='card-number'>{remainingTime.hours}</div></span>
            <span className='numbers-label'>Hours</span>
            </div>
            <div className='countdown-number'>
            <span className='numbers'><div className='card-up'></div><div className='card-down'></div><div className='card-number'>{remainingTime.minutes}</div></span>
            <span className='numbers-label'>minutes</span>
            </div>
            <div className='countdown-number'>
            <span className='numbers'><div className='card-up'></div><div className='card-down'></div><div className='card-number'>{remainingTime.seconds}</div></span>
            <span className='numbers-label'>seconds</span>
            </div>
        </div>
        </div>
    );
}

export default Countdown;