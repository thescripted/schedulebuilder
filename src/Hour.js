import React, { useState } from "react";
import Modal from "./Modal";

const Hour = props => {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("Add some events");
  const time = props.time;

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div
        className="hour-box"
        role="button"
        tabIndex={0}
        onClick={toggleModal}
      >
        <h2>{text}</h2>
        <p>{time}</p>
      </div>
      {showModal ? (
        <Modal time={time}>
          <form>
            <h1>Add Event for {time}</h1>
            <input
              type="text"
              placeholder="Add your Event"
              onChange={e => setText(e.target.value)}
            />
            <button onClick={toggleModal}>Submit</button>
          </form>
        </Modal>
      ) : null}
    </>
  );
};

export default Hour;
