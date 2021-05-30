import "./styles/index.scss";
import Calendar from "./Components/Calendar";
function App() {
	return (
		<div className="App">
			<header className="App-header">Almanac IIIT-P</header>
			<div className="calendar-container">
				{/* Helo */}
				<Calendar />
			</div>
		</div>
	);
}

export default App;
