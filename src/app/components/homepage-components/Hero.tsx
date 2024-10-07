"use client";

import Image from "next/image";
import { Carousel } from "../../utils/util";

export default function Hero() {
	const images = [
		"/banner-1.jpg",
		"/banner-2.jpg",
		"/banner-3.jpeg",
		"/banner-4.jpeg",
	];

	return (
		<div className="relative w-full h-screen" id="hero">
			<Carousel
				autoplay={true}
				loop={true}
				autoplayDelay={2000}
				className="w-full h-full"
				navigation={({ setActiveIndex, activeIndex }) => (
					<div className="absolute bottom-4 left-2/4 z-30 flex -translate-x-2/4 gap-2">
						{images.map((_, i) => (
							<span
								key={i}
								className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
									activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
								}`}
								onClick={() => setActiveIndex(i)}
							/>
						))}
					</div>
				)}
				placeholder=""
				prevArrow={() => null}
				nextArrow={() => null}
				onPointerEnterCapture={() => {}}
				onPointerLeaveCapture={() => {}}
			>
				{images.map((image) => (
					<div key={image} className="relative w-full h-full">
						<Image
							src={image}
							alt="Background"
							fill
							style={{ objectFit: "cover" }}
							quality={100}
							priority
						/>
						<div className="absolute inset-0 bg-black bg-opacity-50" />
						<HeroContent />
					</div>
				))}
			</Carousel>
		</div>
	);
}

function HeroContent() {
	return (
		<div className="absolute inset-0 flex items-center justify-center">
			<div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center [text-shadow:_0_4px_0_rgb(0_0_0_/_40%)]">
				<h1 className="sm:text-xl md:text-3xl lg:text-5xl font-bold mb-2 sm:mb-4 text-white">
					We bring robots to life
				</h1>
				<p className="text-xs sm:text-sm md:text-base font-light mb-4 sm:mb-8 text-white max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
					Quetzal Robotics is an AI and robotics company dedicated to creating
					socially intelligent machines that enrich the quality of our lives.
				</p>
			</div>
		</div>
	);
}
