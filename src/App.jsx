import { useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import { useDrag } from "react-use-gesture";

import Calendar from "./Components/Calendar";
import Agenda from "./Components/Agenda";

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
	// const [minCal, setMinCal] = useState(false);
	const remSize = parseFloat(
		getComputedStyle(document.documentElement).fontSize
	);
	const [selectedDate, setSelectedDate] = useState(new Date());

	const open = (canceled) => {
		api.start({
			marginTop: "-20rem",
			immediate: false,
			config: canceled ? config.wobbly : config.slow,
		});
	};
	const close = (canceled) => {
		api.start({
			marginTop: "-5rem",
			immediate: false,
			config: canceled ? config.wobbly : config.slow,
		});
	};
	// Springy Stuff
	const [{ marginTop }, api] = useSpring(() => ({
		marginTop: "-5rem",
		config: config.slow,
	}));

	const bind = useDrag(
		({ last, vxvy: [, vy], movement: [, my], cancel, canceled, tap }) => {
			if (tap) return;
			const cur = parseFloat(marginTop.get());
			// console.log(last, my, vy, cur);

			if (my > 90 || my < -90) {
				// console.log("Cancel");
				cancel();
			}

			if (last) {
				// console.log("Last");
				if (cur < -8 || vy < -0.1) open(canceled);
				if (cur >= -8 || vy > 0.1) close(canceled);
			} else {
				// console.log("Hehe", cur);
				if (cur >= -10) {
					api.start({
						marginTop: `${-5 + my / remSize}rem`,
						immediate: true,
						config: config.slow,
					});
				} else if (cur <= -15) {
					api.start({
						marginTop: `${-20 + my / remSize}rem`,
						immediate: true,
						config: config.slow,
					});
				}
			}
		},
		{
			bounds: { marginTop: "-20rem" },
			delay: 200,
			rubberband: true,
			filterTaps: true,
		}
	);

	return (
		<>
			<div className="calendar-container">
				<Calendar
					// styleProps={aniPropsCal}
					selectedDate={selectedDate}
					setSelectedDate={setSelectedDate}
				/>
			</div>
			<animated.div id="agenda" style={{ marginTop }}>
				<div className="resize" {...bind()}>
					<div />
				</div>
				<Agenda />
			</animated.div>
		</>
	);
};

export default App;
