import React from 'react';
import { getRemainingTimeUntilMsTimeStamp } from './utils/countDownUtils';

const defaultRemainingTime ={
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00',
}

const CountDown = ({countdownTimestamp}) => {
  const [remainingTime, setRemainingTime] = React.useState(defaultRemainingTime);
  React.useEffect(() =>{
    const intervarlId = setInterval(() => {
        updateRemainingTime(countdownTimestamp);
    },1000);
    return () => clearInterval(intervarlId);
  },[countdownTimestamp])

  function updateRemainingTime(countdowns){
     setRemainingTime(getRemainingTimeUntilMsTimeStamp(countdowns));
  }
  return (
        <div className="countdownContainer">
            <p>Our web site is under construction.</p>
            <div className="first">
                <span className="value">{remainingTime.days}</span>
                <span className="unit">days</span>
            </div>
            <div>
                <span className="value">{remainingTime.hours}</span>
                <span className="unit">hours</span>
            </div>
            <div>
                <span className="value">{remainingTime.minutes}</span>
                <span className="unit">minutes</span>
            </div>
            <div>
                <span className="value">{remainingTime.seconds}</span>
                <span className="unit">seconds</span>
            </div>

        </div>
    );
};

export default CountDown;
