import React from "react";
import Day from "./Day";

const Calendar = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <div className="container">
      {days.map((date, index) => {
        return <Day date={date} key={index} />;
      })}
    </div>
  );
};

export default Calendar;
