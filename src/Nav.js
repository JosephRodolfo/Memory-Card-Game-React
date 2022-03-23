import "../src/styles/css/nav.css";

const Nav = (props) => {
  return (
    <nav>
      <header>
        <h1>Memory Card Game</h1>
        <h3>
          Get points by clicking on an image but don't click on any more than
          once!
        </h3>
      </header>
      <div>
      <div className="counter-container">Score: {props.score}</div>
      <div className="counter-container">Best Score: {props.highScore}</div>
      </div>
    </nav>
  );
};

export default Nav;
