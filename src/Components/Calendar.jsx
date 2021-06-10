// Styles
import "../styles/Calendar.scss";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
// Deps
import { useContext, useState } from "react";
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
} from "date-fns";
import { DateContext } from "../Context/DateContext";

function Calendar({ minCal }) {
	const { selectedDate, currentDate, setCurrentDate, setSelectedDate } =
		useContext(DateContext);
	const [exit, setExit] = useState("");
	const today = new Date();
	// const [minimised, setMinimised] = useState(false);

	// Components
	const header = () => {
		const dateFormat = "dd MMM yyyy";
		const monthYear = format(selectedDate, dateFormat).split(" ");
		return (
			<div className="header">
				<h3>
					{`${monthYear[0]} ${monthYear[1]}`} <span>{`${monthYear[2]}`}</span>
				</h3>
				<div>
					<button onClick={prevMonth}>
						<HiChevronLeft />
					</button>
					<button onClick={nextMonth}>
						<HiChevronRight />
					</button>
				</div>
			</div>
		);
	};
	const weekDays = () => {
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
	const dates = (date = currentDate) => {
		const monthStart = startOfMonth(date);
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
				const cloneDay = day;
				if (isSameDay(day, selectedDate)) flag = true;
				formattedDate = format(day, dateFormat);

				const classNames = `day --month${
					isSameMonth(day, monthStart) ? "" : "-not "
				}${isSameDay(day, selectedDate) ? " --selected" : ""}${
					isSameDay(day, today) ? " --today" : ""
				}`;

				days.push(
					<div
						key={day}
						className={classNames}
						onClick={() => selectDay(cloneDay)}>
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
		return <div className={`dates exit-${exit}`}>{rows}</div>;
	};

	// Utils
	const selectDay = (day) => {
		setSelectedDate(day);
		if (!isSameMonth(day, currentDate)) {
			if (day > currentDate) setExit("up");
			else setExit("down");
			setTimeout(() => {
				setSelectedDate(day);
				setCurrentDate(day);
				setExit("");
			}, 200);
		}
	};
	const nextMonth = () => {
		setExit("down");
		setTimeout(() => {
			setCurrentDate(addMonths(currentDate, 1));
			setSelectedDate(addMonths(selectedDate, 1));
			setExit("");
		}, 200);
	};
	const prevMonth = () => {
		setExit("up");
		setTimeout(() => {
			setCurrentDate(subMonths(currentDate, 1));
			setSelectedDate(subMonths(selectedDate, 1));
			setExit("");
		}, 200);
	};

	return (
		<>
			<div className={`calendar min-${minCal}`}>
				{header()}
				{weekDays()}
				{dates()}
			</div>
		</>
	);
}

export default Calendar;
