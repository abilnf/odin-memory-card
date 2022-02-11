import "../styles/Card.css";

export default function Card(props) {
  return (
    <div className="card" onClick={props.onClick}>
      <img
        src={require("../assets/person" + props.person.id + ".jpg")}
        alt={props.person.name}
      />
      <h2>{props.person.name}</h2>
    </div>
  );
}
