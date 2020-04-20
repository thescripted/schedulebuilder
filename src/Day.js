import React from "react";
import Hour from "./Hour";

const Day = ({ date }) => {
  const hours = [
    "8:00 - 9:00",
    "9:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 1:00"
  ];

  const handleSubmission = time => {
    console.log(`Alright boomer I got the time: ${time}`);
  };

  return (
    <div className="calendar-day">
      <div className="today-header">
        <h1>{date}</h1>
      </div>
      {hours.map((hour, index) => {
        return (
          <Hour time={hour} key={index} onFormSubmitted={handleSubmission} />
        );
      })}
    </div>
  );
};

export default Day;
