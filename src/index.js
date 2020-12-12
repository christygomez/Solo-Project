import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-dom';  //? is this just a choice for how to render? ReactDom vs. { render } ?
import App from './App.js';

ReactDOM.render(<App />, document.getElementById('root'));

//*This is using hooks "usestate/setstate??", returns button with state, but on click it updates with setState. This does work and renders button.
// import React, { useState } from "react";
// import { render } from "react-dom";

// function App2() {
//     const [state, setState] = useState("CLICK ME");

//     return <button onClick={() => setState("CLICKED")}>{state}</button>;
// }

// render(<App2 />, document.getElementById("root"));
