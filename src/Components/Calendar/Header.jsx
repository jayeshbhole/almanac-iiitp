// Deps
import { useState } from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { format, subMonths, addMonths } from "date-fns";
import { useContext } from "react";
import { DateContext } from "../../Context/DateContext";

const Header = () => {
	const { selectedDate, currentDate, setCurrentDate, setSelectedDate } =
		useContext(DateContext);

	const dateFormat = "dd MMM yyyy";
	const monthYear = format(selectedDate, dateFormat).split(" ");

	const nextMonth = () => {
		setCurrentDate(addMonths(currentDate, 1));
		setSelectedDate(addMonths(selectedDate, 1));
	};
	const prevMonth = () => {
		setCurrentDate(subMonths(currentDate, 1));
		setSelectedDate(subMonths(selectedDate, 1));
	};

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
export default Header;
