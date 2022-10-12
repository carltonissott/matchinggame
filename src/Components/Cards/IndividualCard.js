import "../UX/styles.css";

const IndividualCard = (props) => {
  return (
    <div
      id={props.id}
      onClick={props.onClick}
      className="card-main"
    >
      <img alt={props.object} src={props.src} />
      <h3>{props.object}</h3>
    </div>
  );
};

export default IndividualCard;
