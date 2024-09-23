import { Helmet } from "react-helmet-async";
import ScreenshotCard from "./components/screenshotCard";

export default function Story() {
	return (
		<main className="w-full flex flex-col justify-center items-center py-4 px-8 gap-4">
			<Helmet>
				<title>Story - The Silencer</title>
				<meta name="description" content="Read about the thrilling story in The Silencer game." />
				<meta property="og:title" content="Story - The Silencer" />
				<meta property="og:description" content="Read about the thrilling story in The Silencer game." />
				<meta property="og:type" content="website" />
				<meta name="twitter:title" content="Story - The Silencer" />
				<meta name="twitter:description" content="Read about the thrilling story in The Silencer game." />
				<link rel="canonical" href="http://localhost:5173/story" />
			</Helmet>
			<div className="flex flex-col lg:flex-row gap-4 max-w-[512px] lg:max-w-[1024px] text-white mb-auto">
				<section className="flex flex-col gap-4 p-4 max-h-[246px] lg:max-h-[322px] rounded bg-dark-950/80 shadow-xl overflow-auto">
					<h2 className=" text-xl font-bold uppercase">The story</h2>
					<p className="text-xs md:text-sm">
						<span className="text-gold-300">John Kane</span> is a man with a mission: revenge. Ever since the tragic
						death of his girlfriend, Kane has been on a relentless quest to hunt down those responsible. His memories of
						betrayal and loss fuel his violent crusade. But the deeper he digs, the more he realizes something is wrong.
					</p>
					<p className="text-xs md:text-sm">
						Kane's so-called vendetta is a lie—an elaborate web of false memories implanted by a secret society. <span className="text-burgundy-700">The
						Illuminati</span> has used advanced nanomachines to manipulate his mind, turning him into their personal assassin,
						making him believe every target he's killed had wronged him. As the truth begins to surface, Kane must
						grapple with the reality that the people he's been ordered to kill were never his enemies—and his greatest
						enemy might just be his own mind.
					</p>
					<p className="text-xs md:text-sm">
						Will Kane discover the truth before it’s too late, or will he continue to be a weapon in the hands of those
						who control him?
					</p>
				</section>
				<ScreenshotCard image="/screens/concept_three_medium.webp" />
			</div>
		</main>
	);
}
