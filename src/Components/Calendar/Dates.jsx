// Deps
import { useContext } from "react";
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
// Context
import { DateContext } from "../../Context/DateContext";

const Dates = () => {
	const { selectedDate, currentDate, today, setSelectedDate, setCurrentDate } =
		useContext(DateContext);

	const selectDay = (day) => {
		setSelectedDate(day);
		if (!isSameMonth(day, currentDate)) {
			setSelectedDate(day);
			setCurrentDate(day);
		}
	};

	const dates = () => {
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
		return rows;
	};

	return <div className={`dates `}>{dates()}</div>;
};

export default Dates;
