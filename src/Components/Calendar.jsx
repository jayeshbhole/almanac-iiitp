import React, { useState } from "react";
import {
	format,
	addMonths,
	subMonths,
	startOfMonth,
	endOfMonth,
	endOfWeek,
	startOfWeek,
	addDays,
	isSameMonth,
	isSameDay,
	parse,
} from "date-fns";

function Calendar() {
	const [currentDate, setCurrentDate] = useState(new Date());
	const [selectedDate, setSelectedDate] = React.useState(new Date());

	const header = () => {
		const dateFormat = "MMMM yy";
		const monthYear = format(currentDate, dateFormat).split(" ");
		return (
			<div>
				<div>
					<button onClick={prevMonth}>chevron_left</button>
				</div>
				<div>
					<span>{`${monthYear[0]} '${monthYear[1]}`}</span>
				</div>
				<div>
					<button onClick={nextMonth}>chevron_right</button>
				</div>
			</div>
		);
	};
	const nextMonth = () => {
		setCurrentDate(addMonths(currentDate, 1));
	};
	const prevMonth = () => {
		setCurrentDate(subMonths(currentDate, 1));
	};
	const weekDays = () => {
		return (
			<div className="row">
				{["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
					<div key={i} className="day --name">
						{day}
					</div>
				))}
			</div>
		);
	};
	const selectDay = (day) => {
		console.log(day);
	};

	const cells = () => {
		const monthStart = startOfMonth(currentDate);
		const monthEnd = endOfMonth(monthStart);

		const startDate = startOfWeek(monthStart);
		const endDate = endOfWeek(monthEnd);

		const dateFormat = "d";

		let days = [];
		let day = startDate;
		let formattedDate = "";
		const rows = [];

		while (day <= endDate) {
			let flag = false;

			for (let i = 0; i < 7; i++) {
				if (isSameDay(day, selectedDate)) flag = true;
				formattedDate = format(day, dateFormat);
				days.push(
					<div
						className={`day --month-${
							isSameMonth(day, monthStart) ? "" : "not"
						}${isSameDay(day, selectedDate) ? " --selected" : ""}`}
						onClick={() => {
							selectDay(day);
						}}>
						{formattedDate}
					</div>
				);

				day = addDays(day, 1);
			}
			rows.push(
				<div className={`row ${flag ? "--active" : ""}`} key={day}>
					{days}
				</div>
			);
			days = [];
		}
		return rows.map((row) => row);
	};
	return (
		<>
			<h3>{header()}</h3>

			<div className="calendar">
				{weekDays()}
				{cells()}
			</div>
		</>
	);
}

export default Calendar;
