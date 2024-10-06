import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export default function HeroAbout() {
	return (
		<div
			className="flex flex-col justify-center items-center min-h-screen border-b border-black"
			id="hero"
		>
			{/* Heading */}
			<div className="max-w-[90%] sm:max-w-[60%] text-center pt-10 sm:pt-20">
				<h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold">
					Who We Are
				</h1>
				<p className="text-lg sm:text-2xl mt-4">
					Binny is India’s leading decarbonisation solutions provider on a
					mission to build a fossil-free future through innovative and
					sustainable solutions.
				</p>
			</div>

			{/* Image below the text */}
			<div className="w-full mt-8">
				<Image
					src="/eth.jpg"
					alt="background"
					width={1920}
					height={1080}
					className="object-contain"
					quality={100}
					priority
				/>
			</div>

			{/* marquee */}
			<Marquee pauseOnHover className="py-[10%]">
				<div className="flex flex-col sm:flex-row justify-around gap-4 sm:gap-x-20 items-center w-full">
					<Stat value="85%" label="Financial Returns" />
					<Stat value="95%" label="System Performance" />
					<Stat value="75%" label="Adoption Rates" />
					<Stat value="65%" label="Customer Growth" />
				</div>
			</Marquee>
		</div>
	);
}

interface StatProps {
	value: string;
	label: string;
}

const Stat: React.FC<StatProps> = ({ value, label }) => (
	<div className="group cursor-pointer">
		<h1 className="text-2xl sm:text-3xl lg:text-4xl font-light transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:text-red-700">
			{value}
		</h1>
		<p className="font-light uppercase text-xs sm:text-sm pt-2 transition-colors duration-300 group-hover:text-red-600">
			{label}
		</p>
	</div>
);
