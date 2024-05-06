import { useState } from 'react';
import PropTypes from "prop-types";

export const CounterApp = ({value}) => {
  const [newValue, setNewValue] = useState(value);

  const handleAdd = (e) => {
    e.stopPropagation();
    console.log("Hola munfo");
    setNewValue(newValue + 1);
  }

  const handleSub = (e) => {
    e.stopPropagation();
    console.log("Hola munfo");
    setNewValue(newValue - 1);
  }

  const handleReset = (e) => {
    e.stopPropagation();
    console.log("Hola munfo");
    setNewValue(value);
  }

  return (<>
    <h1>Counter App</h1>
    <h2> { newValue } </h2>
    <button onClick={handleSub}>-1</button>
    <button aria-label="btn-reset" onClick={handleReset}>reset</button>
    <button onClick={handleAdd}>+1</button>
  </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};