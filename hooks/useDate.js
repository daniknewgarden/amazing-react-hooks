import { useState, useEffect } from "react";

export const useDate = (shortNames = true) => {
  //Get current date
  const [now] = useState(new Date());
  //Obj with current date (day, month, year)
  const [date, setDate] = useState(null);

  useEffect(() => {
    //Names
    const monthsNames = {
      short: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Nov",
        "Oct",
        "Dec",
      ],
      full: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };

    const daysNames = {
      short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      full: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    };

    //Data
    const dateData = {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      monthName: shortNames
        ? monthsNames.short[now.getMonth()]
        : monthsNames.full[now.getMonth()],
      day: now.getDate(),
      dayName: shortNames
        ? daysNames.short[now.getDay()]
        : daysNames.full[now.getDay()],
    };

    //Set data
    setDate(dateData);
  }, [now, shortNames]);

  return date;
};
