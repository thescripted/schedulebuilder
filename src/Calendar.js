import React, { useState } from "react";
import Day from "./Day";
import Modal from "./Modal";
import ModalPopUp from "./ModalPopUp";
const Calendar = () => {
  const [modalMount, setModalMount] = useState(false);
  const [dateTime, setDateTime] = useState({});
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const formatModalDate = (date, time) => {
    console.log(`Calendar has received the day: ${date} and time ${time}`);
    setModalMount(true);
    setDateTime({ date: date, time: time });
  };

  return (
    <div className="container">
      {days.map((date, index) => {
        return (
          <Day date={date} key={index} formatModalDate={formatModalDate} />
        );
      })}
      {modalMount ? (
        <Modal time={dateTime.time} date={dateTime.date}>
          <ModalPopUp dateTime={dateTime} />
        </Modal>
      ) : null}
    </div>
  );
};

export default Calendar;
