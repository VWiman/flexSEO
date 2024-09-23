import ScreenshotCard from "./components/screenshotCard";

export default function Home() {
	return (
		<main className="w-full flex flex-col justify-center items-center py-4 px-8 gap-4">
			<div className="flex flex-col lg:flex-row gap-4 max-w-[512px] lg:max-w-[1024px] text-white mb-auto">
				<section className="flex flex-col gap-4 p-4 max-h-[246px] lg:max-h-[322px] rounded bg-dark-950/80 shadow-xl overflow-auto">
					<h2 className=" text-xl font-bold uppercase">
						Who will you <span className="text-burgundy-700">silence</span>
					</h2>
					<p className="text-xs md:text-sm">
						Dive deep into a mind-twisting conspiracy in The Silencer, an intense stealth-action game where the lines
						between reality and manipulation blur.
					</p>
					<p className="text-xs md:text-sm">
						You play as John Kane, a man driven by a vendetta—or so he thinks. Haunted by the memory of a lost love and
						fueled by the desire for revenge, Kane hunts down those he believes are responsible for her death. But
						nothing is as it seems. Uncover the truth behind a shadowy organization manipulating Kane’s mind with
						nanotechnology, implanting false memories and using him as their ultimate weapon.
					</p>
					<p className="text-xs md:text-sm">
						As the fog of deception lifts, Kane must decide: will he remain their pawn, or break free and uncover the
						real enemy?
					</p>
				</section>
				<ScreenshotCard image="/screens/concept_four_medium.webp" />
			</div>
			<div className="flex flex-col lg:flex-row gap-4 max-w-[512px] lg:max-w-[1024px] text-white">
				<ScreenshotCard image="/screens/concept_one_medium.webp" />
				<section className="flex flex-col gap-4 p-4 max-h-[246px] lg:max-h-[322px] rounded bg-dark-950/80 shadow-xl overflow-auto">
					<h2 className=" text-xl font-bold uppercase">
						Say hi to <span className="text-gold-300 normal-case">SubSilo</span>
					</h2>
					<p className="text-xs md:text-sm">
						The Silencer is being developed by SubSilo, a small but passionate indie studio founded by two longtime
						friends and collaborators. The team consists of people, who share a deep love for crafting games with a
						focus on psychological depth and stealth.
					</p>
					<p className="text-xs md:text-sm">
						With The Silencer, SubSilo aims to deliver an experience that not only challenges players' skills but also
						provokes thought about identity, memory, and control. SubSilo prides itself on creating games where every
						detail is carefully crafted to give players a truly immersive experience.
					</p>
					<p className="text-xs md:text-sm">
						Join SubSilo on this journey to uncover the truth behind the lies—and decide your own path in The Silencer.
					</p>
				</section>
			</div>
		</main>
	);
}
