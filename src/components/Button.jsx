import React from "react";

const Button = ({ click, iconRandom }) => {
  return (
    <div className="container-button">
      <button className="button-card" onClick={click}>
        {iconRandom}
      </button>
    </div>
  );
};

export default Button;
