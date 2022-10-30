import React, { useEffect, useRef, useState } from "react";

const Time: React.FC = () => {

  const [tick, setTick] = useState(0)
  
  const date = new Date();
  const nextMinute = date.getMinutes();
  const minuteString = `${ nextMinute < 10 ? '0' + nextMinute : nextMinute}`;
  const nextHour = `${date.getHours()}`;

  useEffect(function setTickerOnMount() {
    const interval = setInterval(()=> setTick((value) => ++value), 1000);
    return () => {
      clearInterval(interval)
    }
  }, []);

  return (
    <div className="time">
      <div className="hour">{nextHour}</div>
      <div className="delim heart-beat">:</div>
      <div className="min">{minuteString}</div>
    </div>
  )
}

export { Time };