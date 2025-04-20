import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const header = <h1>This is First header</h1>;
console.log(header);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(header);
root.render(<App/>);
