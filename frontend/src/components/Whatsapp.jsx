import '../css/Walink.css';
import walink from "../assests/images/walink.png";

function Whatsapp() {
	return (
		<>
			<div>
				<a href="https://api.whatsapp.com/send?phone=573058513904&text=Hola quiero mas informacion" target="blank">
					<img className="App-walink" src={walink} alt="walink" />
				</a>
			</div>
		</>
	);
}

export default Whatsapp;
