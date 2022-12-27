import React from "react";
const Cards = ({
  name,
  imagen,
  email,
  phone,
  location,
  iconEmail,
  iconPhone,
  iconLocation,
}) => {
  return (
    <section className="all-card">
      <div className="main-card" style={{ background: "white" }}>
        <div className="name-card">
          <h1>{name}</h1>
          <img src={imagen} alt="" />
        </div>
        <section className="content-card">
          <h3>
            {iconEmail}
            {email}
          </h3>
          <h3>
            {iconPhone}
            {phone}
          </h3>
          <h3>
            {iconLocation}
            {location}
          </h3>
        </section>
      </div>
    
    </section>
  );
};
export default Cards;
