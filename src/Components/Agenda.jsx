import "../styles/Agenda.scss";

function Agenda() {
	return (
		<>
			<div className="header">
				<h5>On This Day</h5>
				<hr />
			</div>

			<div className="events">
				<div className="interval">
					<span className="time">9:00 AM</span>
					<div className="event">
						<div className="title">Data Structures And Algorithms</div>
						<div className="duration">45 min</div>
					</div>
					<div className="event">
						<div className="title">Code Review</div>
						<div className="duration">15 min</div>
					</div>
				</div>
				<div className="interval">
					<span className="time">10:00 AM</span>
					<div className="event">
						<div className="title">Robotics</div>
						<div className="duration">30 min</div>
					</div>
				</div>
				<div className="interval">
					<span className="time">11:00 AM</span>
					<div className="event">
						<div className="title">Hacking</div>
						<div className="duration">40 min</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Agenda;
