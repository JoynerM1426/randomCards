import "./App.css";
import users from "/src/data/users";
import Cards from "./components/Cards";
import Button from "./components/Button";
import { useState } from "react";
import colors from "./components/Colors";

function App() {
  function random(element) {
    let numberRandom = Math.floor(Math.random() * element.length);
    return numberRandom;
  }
  const [indexButton, setIndexButton] = useState(random(users));
  let indexRandom = random(users);
  let color = random(colors);
  const card = (
    <Cards
      name={`${users[indexRandom].name.title} ${users[indexRandom].name.first} ${users[indexRandom].name.last}`}
      imagen={users[indexRandom].picture.large}
      email={users[indexRandom].email}
      iconEmail={<i className="fa-solid fa-envelope email_img" />}
      phone={users[indexRandom].phone}
      iconPhone={<i className="fa-solid fa-phone phone_img" />}
      location={`${users[indexRandom].location.country} ${users[indexRandom].location.state} ${users[indexRandom].location.city}`}
      iconLocation={<i className="fa-solid fa-location-dot icon_img" />}
    />
    
  );

  const buttonRandom = (
    <Button
      click={() => setIndexButton(random(users))}
      iconRandom={<span className="fa-solid fa-shuffle button_click" />}
    />
  );
  return (
    <div
      className="App"
      style={{ backgroundColor: colors[color], color: colors[color] }}
    >
      {card}
      {buttonRandom}
    </div>
  );
}

export default App;
