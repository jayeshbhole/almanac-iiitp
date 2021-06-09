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
	const [minCal, setMinCal] = useState(false);
	const remSize = parseFloat(
		getComputedStyle(document.documentElement).fontSize
	);
	const [selectedDate, setSelectedDate] = useState(new Date());

	// Springy Stuff
	const [{ marginTop }, api] = useSpring(() => ({
		marginTop: "-5rem",
		config: config.stiff,
	}));
	const open = () => {
		setMinCal(true);
		api.start({
			marginTop: "-20rem",
			immediate: false,
		});
	};
	const close = () => {
		setMinCal(false);
		api.start({
			marginTop: "-5rem",
			immediate: false,
		});
	};
	const bind = useDrag(
		({ last, vxvy: [, vy], movement: [, my], cancel, tap }) => {
			if (tap) return;
			const cur = parseFloat(marginTop.get());
			if (my > 70 || my < -90) {
				cancel();
			}
			if (last) {
				if (cur < -8 || vy < -0.1) open();
				if (cur >= -8 || vy > 0.1) close();
			} else {
				if (cur >= -10) {
					api.start({
						marginTop: `${-5 + my / remSize}rem`,
						immediate: true,
					});
				} else if (cur <= -15) {
					api.start({
						marginTop: `${-20 + my / remSize}rem`,
						immediate: true,
					});
				}
			}
		},
		{
			delay: 200,
			rubberband: true,
			filterTaps: true,
		}
	);

	return (
		<>
			<div className="calendar-container">
				<Calendar
					minCal={minCal}
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
