// useReducer: simple Counter

import * as React from "react";
import Task2 from "./Task2";
import Task3 from "./Task3";
import Task4 from "./Task4";
import Task5 from "./Task5";

function countReducer(state, newState) {
  return newState;
}

function Counter({ initialCount = 0, step = 1 }) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  const [count, setCount] = React.useReducer(countReducer, initialCount);

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  const increment = () => setCount(count + step);
  return <button onClick={increment}>{count}</button>;
}

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <Task2 /> */}
      {/* <Task3 /> */}
      {/* <Task4 /> */}
      <Task5 />
    </>
  );
}

export default App;
