// Styles
import "../../styles/Calendar.scss";
// Deps
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

function Calendar({ isMinCal }) {
	return (
		<>
			<div className={`calendar min-${isMinCal}`}>
				<Header isMinCal={isMinCal} />
				<WeekDays />
				<Dates isMinCal={isMinCal} />
			</div>
		</>
	);
}

export default Calendar;
