import { Helmet } from "react-helmet-async";

export default function Order() {
	return (
		<main className="w-full flex flex-col justify-center items-center py-4 px-8 gap-4">
			<Helmet>
				<title>Pre-order - The Silencer</title>
				<meta name="description" content="Secure your copy of The Silencer game by pre-ordering today!" />
				<meta property="og:title" content="Pre-order - The Silencer" />
				<meta property="og:description" content="Secure your copy of The Silencer game by pre-ordering today!" />
				<meta property="og:type" content="website" />
				<meta name="twitter:title" content="Pre-order - The Silencer" />
				<meta name="twitter:description" content="Secure your copy of The Silencer game by pre-ordering today!" />
				<link rel="canonical" href="http://localhost:5173/order" />
			</Helmet>
			<div className="flex flex-col lg:flex-row gap-4 max-w-[512px] lg:max-w-[1024px] text-white mb-auto">
				<section className="flex flex-row justify-center items-center p-4 max-h-[246px] lg:max-h-[322px] rounded bg-dark-950/80 shadow-xl overflow-auto">
					<h3 className="text-xs md:text-sm lg:text-xl">
						<span className="text-gold-300">Pre-Order</span> soon...
					</h3>
				</section>
			</div>
		</main>
	);
}
