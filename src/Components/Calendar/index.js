// Styles
import "../../styles/Calendar.scss";
// Deps
import Header from "./Header";
import Dates from "./Dates";
import { useState } from "react";

const WeekDays = () => {
	return (
		<div className="row --names">
			{["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
				<div key={i} className="day --name">
					{day}
				</div>
			))}
		</div>
	);
};

function Calendar({ minCal }) {
	const [exit, setExit] = useState("");

	return (
		<>
			<div className={`calendar min-${minCal}`}>
				<Header setExit={setExit} />
				<WeekDays />
				<Dates exit={exit} setExit={setExit} minCal={minCal} />
			</div>
		</>
	);
}

export default Calendar;
