import React, { useState, useCallback } from "react";
import Modal from "./Modal";

const Hour = ({ time, onFormSubmitted }) => {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("Add some events");

  const onChange = useCallback(e => setText(e.target.value), []);

  const handleClick = () => {
    onFormSubmitted(time);
    setShowModal(!showModal);
  };

  return (
    <>
      <div
        className="hour-box"
        role="button"
        tabIndex={0}
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        <h2>{text}</h2>
        <p>{time}</p>
      </div>
      {showModal ? (
        <Modal time={time}>
          <h1>Add Event for {time}</h1>
          <input type="text" placeholder="Add your Event" onChange={onChange} />
          <button onClick={handleClick}>Submit</button>
        </Modal>
      ) : null}
    </>
  );
};

export default Hour;
