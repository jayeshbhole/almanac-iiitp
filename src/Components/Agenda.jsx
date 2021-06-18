import "../styles/Agenda.scss";
import { useEffect, useRef, useState } from "react";
import Modal from "./Modal";

function Agenda() {
	const currentRef = useRef();
	const parentRef = useRef();
	const [selectedEvent, setSelectedEvent] = useState();

	useEffect(() => {
		setTimeout(() => {
			parentRef.current?.scroll({
				top: currentRef.current.offsetTop,
				behavior: "smooth",
			});
		}, 200);
	}, []);

	const openEvent = (eventId) => {
		setSelectedEvent(true);
	};
	return (
		<>
			{selectedEvent && <Modal setSelectedEvent={setSelectedEvent} />}

			<div className="header">
				<h3>On This Day</h3>
				<hr />
			</div>

			<div className="events" ref={parentRef}>
				<div className="interval">
					<div className="time">9:00 AM</div>
					<div className="event" onClick={openEvent}>
						<div className="title">Data Structures And Algorithms</div>
						<div className="duration">45 min</div>
					</div>
					<div className="event" onClick={openEvent}>
						<div className="title">Code Review</div>
						<div className="duration">15 min</div>
					</div>
				</div>
				<div className="interval">
					<div className="time">10:00 AM</div>
					<div
						className="event --active"
						ref={true && currentRef}
						onClick={openEvent}>
						<div className="title">Robotics</div>
						<div className="duration">30 min</div>
					</div>
				</div>
				<div className="interval">
					<div className="time">11:00 AM</div>
					<div className="event" onClick={openEvent}>
						<div className="title">Hacking</div>
						<div className="duration">40 min</div>
					</div>
					<div className="event" onClick={openEvent}>
						<div className="title">Majja</div>
						<div className="duration">40 min</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Agenda;
