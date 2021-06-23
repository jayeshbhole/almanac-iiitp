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
				<h2>Schedule</h2>
				<div className="menu">
					<CgMenuGridO />
				</div>
			</header>
			<Main />
		</>
	);
}
const Main = () => {
	const [isMinCal, setIsMinCal] = useState(false);
	const remSize = parseFloat(
		getComputedStyle(document.documentElement).fontSize
	);

	// Springy Stuff
	const [{ marginTop }, api] = useSpring(() => ({
		marginTop: "-5rem",
		config: config.gentle,
	}));

	const snap = (doMinimise) => {
		if (isMinCal === doMinimise) {
			api.start({
				marginTop: "-5rem",
				immediate: !isMinCal & doMinimise,
				config: config.wobbly,
			});
		} else {
			setIsMinCal(doMinimise);
			api.start({
				marginTop: "-5rem",
				immediate: !isMinCal & doMinimise,
				config: { ...config.stiff, friction: 90 },
			});
		}
	};

	const bind = useDrag(
		({ last, vxvy: [, vy], movement: [, my], cancel, tap }) => {
			if (tap) return;
			const cur = parseFloat(marginTop.get());

			if (my > 60 || my < -60) cancel();

			if (last) {
				if (cur < -8 || vy < -0.3) snap(true);
				if (cur >= -8 || vy > 0.3) snap(false);
			} else {
				api.start({
					marginTop: `${-5 + my / remSize}rem`,
					immediate: true,
				});
			}
		},
		{
			delay: 200,
			filterTaps: true,
		}
	);

	return (
		<>
			<DateContextProvider>
				<div className="calendar-container">
					<Calendar isMinCal={isMinCal} />
				</div>

				<animated.div id="agenda" style={{ marginTop }}>
					<div className="resize" {...bind()}>
						<div />
					</div>
					<Agenda />
				</animated.div>
			</DateContextProvider>
		</>
	);
};

export default App;
