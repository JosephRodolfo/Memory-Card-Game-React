
import React from 'react';

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.plusOne = this.plusOne.bind(this);
      this.minusOne = this.minusOne.bind(this);
      this.reset = this.reset.bind(this);
      this.state = {
        count: 0
      };
    }
  
  
  

    plusOne() {
      this.setState((prevState) => {
        //prevState is previous state value before changes applied
        return {
          count: prevState.count + 1,
        };
      });
    }
    minusOne() {
      this.setState((previousState) => {
        return {
          count: previousState.count - 1,
        };
      });
    }
  
    reset() {
      this.setState(() => {
        return {
          count: 0,
        };
      });
    }
    render() {
      return (
        <div>
       
              <h3>Score: {this.state.count}</h3>
           
          
        </div>
      );
    }
  }

  export default Counter;