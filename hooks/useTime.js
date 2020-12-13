import { useState, useEffect } from "react";

//Defaults settings: update interval = 1000ms, hours, minutes, seconds type = string
export const useTime = (options = {interval: 1000, string: true}) => {
  //Current time
  const [now, setNow] = useState(new Date());
  //Final time object
  const [time, setTime] = useState(null);

  //Time format function (12:1:1 = 12:01:01)
  const formatTime = (num) => {
    const formattedNum = num.toString().padStart(2, "0");

    return formattedNum;
  };

  //Update time
  useEffect(() => {
    const getTime = setInterval(() => {
      setNow(new Date());
    }, options.interval);
    return () => {
      clearInterval(getTime);
    };
  }, [options.interval]);

  //Get object with current hours, minutes, seconds and rotate degrees for analog clock arrows
  useEffect(() => {
    const timeData = {
      hours: options.string ? formatTime(now.getHours()) : now.getHours(),
      minutes: options.string ? formatTime(now.getMinutes()) : now.getMinutes(),
      seconds: options.string ? formatTime(now.getSeconds()) : now.getSeconds(),
      //360 deg / 12 hours = 30 deg per hour
      hh: now.getHours() * 30,
      //360 deg / 60 = 6 deg per second/minute
      mm: now.getMinutes() * 6,
      ss: now.getSeconds() * 6,
    };

    setTime(timeData);
  }, [now, options.string]);

  return time;
};
