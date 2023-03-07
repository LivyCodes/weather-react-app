import React from "react";

function FormatDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let day = days[props.date.getDay()];
  let dates = props.date.getDate();
  let month = months[props.date.getMonth()];
  let hour = props.date.getHours();
  if (hour < 10) {
    return `0${hour}`;
  }
  let minute = props.date.getMinutes();
  if (minute < 10) {
    return `0${minute}`;
  }

  return (
    <div>
      {day}, {dates} {month}, {hour}:{minute}
    </div>
  );
}
export default FormatDate;
