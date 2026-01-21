import { useEffect, useReducer, useState } from "react";

function Button({ countToDisplay, buttonName }) {
  // const [count, setCount] = useState(0);

  // Reduce function
  const reduce = (state, action) => {
    if (action.type == "increment") {
      return { count: state.count + 1 };
    } else {
      return { count: state.count - 1 };
    }
  };

  const [state, dispatch] = useReducer(reduce, { count: 10000 });

  // If there is sm change to the count it will execute whats inside the braces
  useEffect(() => {
    countToDisplay(state.count);
  }, [state.count]);

  useEffect(() => {
    console.log("component is loaded");
  }, []);

  useEffect(() => {
    return console.log("component is unloaded");
  }, []);

  return (
    <>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </>
  );
}

export default Button;
