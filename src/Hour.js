import React, { useState } from "react";

const Hour = ({ time, handleTime }) => {
  const [text, setText] = useState("Add some events");

  const hourClicked = () => {
    handleTime(time);
  };

  return (
    <>
      <div
        className="hour-box"
        role="button"
        tabIndex={0}
        onClick={hourClicked}
      >
        <h2>{text}</h2>
        <p>{time}</p>
      </div>
    </>
  );
};

export default Hour;
