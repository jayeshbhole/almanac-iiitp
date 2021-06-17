import { HiOutlineLocationMarker, HiOutlineTag } from "react-icons/hi";

const Modal = () => {
	return (
		<>
			<div className="event modal">
				<h3 className="title">Hacking</h3>
				<div className="time">11:00 am - 11:40 am</div>

				<h4>Location</h4>
				<div className="venue">
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
				<div className="description">
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
				<div className="settings">{/* <BsGear /> */}</div>
			</div>
		</>
	);
};
export default Modal;
