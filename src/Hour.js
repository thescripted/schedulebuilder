import React from "react";

const Hour = () => {
  return (
    <div
      className="hour-box"
      role="button"
      tabIndex={0}
      onClick={console.log("clicked")}
    >
      <h2>Text is here</h2>
    </div>
  );
};

export default Hour;
