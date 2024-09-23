import Skeleton from "react-loading-skeleton";
import { useState, useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";


export default function ScreenshotCard({ image }) {
	const [isImageLoaded, setIsImageLoaded] = useState(false);

	useEffect(() => {
		const img = new Image();
		img.src = image;
		img.onload = () => setIsImageLoaded(true);
		img.onerror = () => setIsImageLoaded(false);
	}, [image]);

	return isImageLoaded ? (
		<img
			width="512px"
			height="322px"
			src={image}
			alt="concept art"
			className="aspect-auto h-auto rounded shadow-xl mb-auto"
		/>
	) : (
		<Skeleton baseColor="#ebebeb" highlightColor="#f5f5f5" width="512px" height="322px" />
	);
}
