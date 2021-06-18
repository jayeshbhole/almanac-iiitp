import { HiOutlineLocationMarker, HiOutlineTag } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
const Modal = ({ setSelectedEvent }) => {
	return (
		<>
			<span
				style={{ zIndex: 3 }}
				id="close-modal"
				onClick={() => setSelectedEvent(false)}>
				<VscChromeClose />
			</span>
			<div className="event modal">
				<div className="modal-header event-info">
					<h3 className="title">Hacking</h3>
					<div className="time">11:00 am - 11:40 am</div>
				</div>

				<h4>Location</h4>
				<div className="venue event-info">
					<div className="icon">
						<HiOutlineLocationMarker />
					</div>
					<div className="data">
						Virtual
						<a
							href="https://meet.google.com/"
							target="_blank"
							rel="noopener noreferrer">
							meet.google.com/
						</a>
					</div>
				</div>
				<h4>Description</h4>
				<div className="description event-info">
					<div className="icon">
						<HiOutlineTag />
					</div>
					<div className="data">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
						velit iure rerum molestias aliquid, est similique unde porro
						suscipit corrupti labore doloribus quasi blanditiis provident.
						Asperiores perspiciatis dolorum ex quisquam.
					</div>
				</div>
				<h4>Settings</h4>
				<div className="settings event-info">{/* <BsGear /> */}</div>
			</div>
		</>
	);
};
export default Modal;
