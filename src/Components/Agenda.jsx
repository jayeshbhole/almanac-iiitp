// import {} from "react";
import "../styles/Agenda.scss";

const Agenda = ({ date = Date() }) => {
	return (
		<div id="agenda">
			<header>{date}</header>
		</div>
	);
};

export default Agenda;
