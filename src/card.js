import "../src/styles/css/card.css";
import "../src/styles/css/index.css";


const Card = (props) => {
  return (
    <div className="card-wrapper">
      <div className="img-wrapper">
      <img src={props.source} />
      </div>
      <div>
      <h2>The {props.title}</h2>
      </div>
    </div>
  );
};

export default Card;
