import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    console.log(event.target);
  };
  return { value, onChange };
};

//function에서 event 처리
const App = () => {
  const name = useInput("Mr.");
  return (
    //{...name} = name unpack
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
