import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";

function randomizePeople() {
  return personData
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

function App() {
  const [people, setPeople] = useState(randomizePeople());
  const [clickedPeople, setClickedPeople] = useState([]);

  function onPersonClicked(person) {
    setPeople(randomizePeople());
    if (clickedPeople.includes(person.id)) {
      setClickedPeople([]);
    } else {
      setClickedPeople(clickedPeople.concat(person.id));
    }
  }

  return (
    <div className="App">
      <Header score={clickedPeople.length} />
      <Board people={people} onPersonClicked={onPersonClicked} />
    </div>
  );
}

export default App;

const personData = [
  {
    id: 1,
    name: "Amelina",
  },
  {
    id: 2,
    name: "Ermann",
  },
  {
    id: 3,
    name: "Karoliver",
  },
  {
    id: 4,
    name: "Tantoniklara",
  },
  {
    id: 5,
    name: "Andra",
  },
  {
    id: 6,
    name: "Louisabi",
  },
  {
    id: 7,
    name: "Mariemhild",
  },
  {
    id: 8,
    name: "Chrin",
  },
  {
    id: 9,
    name: "Mar",
  },
  {
    id: 10,
    name: "Johann barald",
  },
  {
    id: 11,
    name: "Lamprechtilli",
  },
  {
    id: 12,
    name: "Emilia",
  },
];
