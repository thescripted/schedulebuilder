import React from "react";
import Modal from "./Modal";

const ModalPopUp = ({ dateTime }) => {
  const handleClick = e => {
    console.log(e);
  };
  return (
    <div>
      <Modal time={dateTime.time}>
        <h1>Add Event for {dateTime.time}</h1>
        <input type="text" placeholder="Add your Event" />
        <button onClick={handleClick}>Submit</button>
      </Modal>
    </div>
  );
};

export default ModalPopUp;
