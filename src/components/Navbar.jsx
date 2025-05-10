import React from "react";
import { Link, useNavigate } from "react-router";

function Navbar() {
	const navigate = useNavigate();

	const onLogout = (e) => {
		console.log("Logout clicked!");
		navigate("/"); 
		
	};

	return (
		<div className="navbar navbar-expand-md bg-secondary m-4" data-bs-theme="dark">
			<div className="container-fluid mx-3">
				<Link className="navbar-brand" to="/home">
					Home
				</Link>

				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav mx-3">
						<li className="nav-item">
							<Link className="nav-link mx-3" to="/myquotes">
								My Quotes
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link mx-3" to="/profile">
								Profile
							</Link>
						</li>
						
						<li className="nav-item mx-3 px-3">
							<button onClick={onLogout} className="btn link">
								Logout
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
