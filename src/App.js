import { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TweenMax, Power3 } from "gsap";

function App() {
	let logoItem = useRef(null);
	console.log(logoItem);

	return (
		<div className="App">
			<header className="App-header">
				<img
					ref={(el) => {
						logoItem = el;
					}}
					src={logo}
					className="App-logo"
					alt="logo"
				/>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
