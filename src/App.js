import React from "react";
//import reducer from "./app/reducer";
import { connect } from "react-redux";

import "./App.css"
class App extends React.Component {
  increment = () => {
    this.props.dispatch({
      type: "INCREMENT"
    });
  };

  decrement = () => {
    this.props.dispatch({
      type: "DECREMENT"
    });
  };
  reset = () => {
    this.props.dispatch({
      type: "RESET"
    });
  };

  render() {
    return (
      <>
      <div><h1 className="head">REDUX COUNTER</h1></div>
      <div className="App">
        <button onClick={this.increment} className="success">
          INCREMENT
        </button>
        <button onClick={this.decrement} className="danger">
          DECREMENT
        </button><br/>
        <h1 className="display">{this.props.count}</h1><br/>
        <button onClick={this.reset} className="warning">
          RESET
        </button>
      </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(App);
