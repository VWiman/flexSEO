import { Helmet } from "react-helmet-async";
import ScreenshotCard from "./components/screenshotCard";

export default function Features() {
	return (
		<main className="w-full flex flex-col justify-center items-center py-4 px-8 gap-4">
			<Helmet>
				<title>Features - The Silencer</title>
				<meta name="description" content="All the amazing features included in The Silencer game." />
				<meta property="og:title" content="Features - The Silencer" />
				<meta property="og:description" content="All the amazing features included in The Silencer game." />
				<meta property="og:type" content="website" />
				<meta name="twitter:title" content="Features - The Silencer" />
				<meta name="twitter:description" content="All the amazing features included in The Silencer game." />
				<link rel="canonical" href="http://localhost:5173/features" />
			</Helmet>

			<div className="flex flex-col lg:flex-row gap-4 max-w-[512px] lg:max-w-[1024px] text-white mb-auto">
				<ScreenshotCard image="/screens/concept_two_medium.webp" />
				<section className="flex flex-col gap-4 p-4 max-h-[246px] lg:max-h-[322px] rounded bg-dark-950/80 shadow-xl overflow-auto">
					<h2 className=" text-xl font-bold uppercase">Features</h2>
					<ul className="flex flex-col gap-4 text-xs md:text-sm">
						<li>
							<h4 className="text-burgundy-700">Stealth and Strategy Gameplay:</h4>
							<p>
								Plan each mission with precision, using stealth, manipulation, and quick reflexes. Use the environment
								and advanced tech to your advantage, whether you choose silent eliminations or all-out chaos.
							</p>
						</li>
						<li>
							<h4 className="text-gold-300">Dynamic AI and Environments:</h4>
							<p>
								Enemies are intelligent and react to your decisions in real time. Create diversions, hack systems, and
								use advanced technology to gain the upper hand in complex, interactive environments.
							</p>
						</li>
						<li>
							<h4 className="text-burgundy-700">Nanotech Upgrades:</h4>
							<p>
								Unlock nanomachine-driven abilities that enhance Kane’s physical and mental capabilities. Improve his
								strength, speed, and perception to outsmart enemies and turn the tide of missions.
							</p>
						</li>
						<li>
							<h4 className="text-gold-300">Toxin Darts:</h4>
							<p>
								As part of Kane’s arsenal, he can equip toxin darts to silently disable enemies from a distance. The
								toxins can either incapacitate targets instantly or slowly disorient them, causing confusion and making
								it easier to slip through enemy defenses undetected.
							</p>
						</li>
					</ul>
				</section>
			</div>
		</main>
	);
}
