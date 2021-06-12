import { useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import { useDrag } from "react-use-gesture";

import Calendar from "./Components/Calendar/";
import Agenda from "./Components/Agenda";
import { DateContextProvider } from "./Context/DateContext";

import { CgMenuGridO } from "react-icons/cg";
import "./styles/index.scss";

function App() {
	return (
		<>
			<header>
				<h2>Batch '23</h2>
				<div className="menu">
					<CgMenuGridO />
				</div>
			</header>
			<Main />
		</>
	);
}
const Main = () => {
	const [minCal, setMinCal] = useState(false);
	const remSize = parseFloat(
		getComputedStyle(document.documentElement).fontSize
	);

	// Springy Stuff

	return (
		<>
			<DateContextProvider>
				<div className="calendar-container">
					<Calendar minCal={minCal} />
				</div>

				<animated.div id="agenda" style={{}}>
					<div className="resize">
						<div />
					</div>
					<Agenda />
				</animated.div>
			</DateContextProvider>
		</>
	);
};

export default App;
