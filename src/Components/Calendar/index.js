// Styles
import "../../styles/Calendar.scss";
// Deps
import { useContext, useState } from "react";
import {
	format,
	startOfMonth,
	endOfMonth,
	endOfWeek,
	startOfWeek,
	addDays,
	isSameMonth,
	isSameDay,
} from "date-fns";
import { DateContext } from "../../Context/DateContext";
import Header from "./Header";
import Dates from "./Dates";

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
	return (
		<>
			<div className={`calendar min-${minCal}`}>
				<Header />
				<WeekDays />
				<Dates />
			</div>
		</>
	);
}

export default Calendar;
