import "./styles/index.scss";
import Calendar from "./Components/Calendar";
function App() {
	return (
		<>
			<header className="App-header">Almanac IIIT-P</header>
			<div className="calendar-container">
				<Calendar />
			</div>
		</>
	);
}

export default App;
