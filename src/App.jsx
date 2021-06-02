import "./styles/index.scss";
import { CgMenuGridO } from "react-icons/cg";
import Calendar from "./Components/Calendar";
import Agenda from "./Components/Agenda";

function App() {
	return (
		<>
			<header>
				<h2>Batch '23</h2>
				<div className="menu">
					<CgMenuGridO />
				</div>
			</header>
			<div className="calendar-container">
				<Calendar />
			</div>
			<Agenda />
		</>
	);
}

export default App;
