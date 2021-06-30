//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

let counter = 0;
setInterval(() => {
	counter++;
	let num1 = Math.floor(counter / 1);
	let num2 = Math.floor(counter / 10);
	let num3 = Math.floor(counter / 100);

	//render your react application
	ReactDOM.render(
		<Home digit1={num1} digit2={num2} digit3={num3} />,
		document.querySelector("#app")
	);
}, 1000);
