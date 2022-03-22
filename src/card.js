import '../src/styles/css/card.css'

const Card = (props) => {
  return <div className="card-wrapper">


    <img src={props.source}/>
    <h2>The {props.title}</h2>


  </div>;
};

export default Card;
