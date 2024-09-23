import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Layout() {
	const getNavLinkClass = ({ isActive }) =>
		`transition-colors duration-500 uppercase font-black ${
			isActive ? " text-burgundy-500 pointer-events-none" : "text-white hover:text-burgundy-400"
		}`;
	const getTopNavLinkClass = ({ isActive }) =>
		`flex items-start transition-colors duration-500 uppercase font-black ${
			isActive ? " text-burgundy-500 pointer-events-none" : "text-white hover:text-burgundy-400"
		}`;

	return (
		<>
			<Helmet>
				{/* Title */}
				<title>The Silencer - Action Stealth Game</title>
				{/* Global Meta Tags */}
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="Official website for The Silencer game." />
				<meta property="og:title" content="The Silencer - Action Stealth Game" />
				<meta property="og:description" content="Official website for The Silencer game." />
				<meta property="og:type" content="website" />
				<meta name="twitter:title" content="The Silencer - Action Stealth Game" />
				<meta name="twitter:description" content="Official website for The Silencer game." />
				{/* Favicon */}
				<link rel="icon" href="/vite.svg" type="image/svg+xml" />
				<link rel="canonical" href="http://localhost:5173/" />
			</Helmet>
			<header className="flex flex-col justify-start items-center w-full pt-4 bg-dark-950 shadow-md mb-4">
				<nav>
					<NavLink to={"/"} className={getTopNavLinkClass}>
						<h1 className="text-2xl leading-none">the silencer</h1>
						<img
							src="/gun.webp"
							alt="animated image of a gun"
							width="96"
							height="39.4"
							className="hover:scale-105 hover:rotate-6 transition-all drop-shadow-lg hover:drop-shadow-2xl select-none ml-1"
						/>
					</NavLink>

					<ul className="flex flex-row gap-5 pb-4">
						<li>
							<NavLink to={"/features"} className={getNavLinkClass}>
								features
							</NavLink>
						</li>
						<li>
							<NavLink to={"/story"} className={getNavLinkClass}>
								story
							</NavLink>
						</li>
						<li>
							<NavLink to={"/order"} className={getNavLinkClass}>
								pre-order
							</NavLink>
						</li>
					</ul>
				</nav>
				<div className="w-full h-1 bg-gold-500"> </div>
			</header>
			<Outlet />
			<footer className="flex flex-col  pb-4 justify-center items-center w-full mt-auto bg-black text-white">
				<div className="w-full h-1 bg-gold-500"> </div>
				<img src="ESRB_2013_Rating.svg" alt="ESRB Mature 17+" width="90px" className="aspect-[2/3] pt-4" />
				<ul className="w-20 text-[8px] font-semibold">
					<li>Violent behavior</li>
					<li>Alcohol Reference</li>
					<li>Use of Tobacco</li>
				</ul>
				<p className="text-sm pt-2">©2024 SubSilo. All rights reserved.</p>
			</footer>
		</>
	);
}
