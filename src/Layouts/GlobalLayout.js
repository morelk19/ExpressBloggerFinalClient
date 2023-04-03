import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const GlobalLayout = () => {
	return (
		<div>
			<NavBar/>
			<Outlet/>
		</div>
	)
}

export default GlobalLayout