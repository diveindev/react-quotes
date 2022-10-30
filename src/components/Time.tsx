import React, { useEffect, useRef, useState } from "react";

const Time: React.FC = () => {

  const [tick, setTick] = useState(0)
  
  const date = new Date();
  const nextMinute = date.getMinutes();
  const minuteString = `0${ nextMinute < 10 ? '0' + nextMinute : nextMinute}`;
  const nextHour = `${date.getHours()}`;

  useEffect(function setTickerOnMount() {
    setTick((value) => ++value);
  }, [])

  return (
    <div className="time">
      <span className="hour">{nextHour}</span>
      <span className="delim heart-beat">:</span>
      <span className="min">{minuteString}</span>
    </div>
  )
}

export { Time };