import { useState, useContext, useEffect, createContext } from "react";

const DateContext = createContext({
	selectedDate: null,
	setSelectedDate: () => {},
	today: null,
	currentDate: null,
	setCurrentDate: () => {},
	prevMonth: () => {},
	nextMonth: () => {},
});

const DateContextProvider = (props) => {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [currentDate, setCurrentDate] = useState(new Date());
	const today = new Date();

	return (
		<DateContext.Provider
			value={{
				selectedDate,
				setSelectedDate,
				today,
				currentDate,
				setCurrentDate,
			}}>
			{props.children}
		</DateContext.Provider>
	);
};

export { DateContext, DateContextProvider };
