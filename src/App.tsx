import React from 'react';
import { connect, useSelector } from "react-redux";
import {
  increaseCountAction,
  decreaseCountAction,
} from "./actions/countAction";
import "./App.css";

type Props = {
  increaseCountAction: Function,
  decreaseCountAction: Function,
}

const App = ({ increaseCountAction, decreaseCountAction }: Props) => {
  const { count } = useSelector((state:any) => ({
    count: state.countReducer.value,
  }));
  return (
    <div className="App">
      <header className="App-header">
        <h1>{count}</h1>
        <div className="action-div">
          <button onClick={() => {decreaseCountAction()}}>Decrese(-1)</button>
          <button onClick={() => {increaseCountAction()}}>Increase(+1)</button>
        </div>
      </header>
    </div>

  );
}

export default connect(null, { increaseCountAction, decreaseCountAction })(App);
