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
