import "../styles/Board.css";
import Card from "./Card";

export default function Board(props) {
  return (
    <div className="board">
      {props.people.map((person) => (
        <div key={person.id}>
          <Card person={person} onClick={() => props.onPersonClicked(person)} />
        </div>
      ))}
    </div>
  );
}
