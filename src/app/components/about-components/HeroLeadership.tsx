"use client";
import React, { useState } from "react";
import { Modal } from "../Modal";

export default function HeroLeadership() {
	return (
		<div className="flex flex-col items-center justify-center w-full" id="hero">
			<div className="max-w-[90%] md:max-w-[75%] lg:max-w-[60%] text-center pt-10 md:pt-20">
				<h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
					Leadership
				</h1>
				<p className="text-lg md:text-xl lg:text-2xl mt-4">
					Meet the team behind the global energy transition.
				</p>
			</div>
			<div className="mt-10 md:mt-16 px-4 lg:px-0">
				<div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 bg-gradient-to-b from-gray-200 to-white rounded-xl p-4 md:p-8">
					<BackgroundBlogCard
						name="Mohammed Abdul Salman"
						position="Executive Director"
						imageSrc="/salman.png"
						longMessage={[
							"At BNREL, we envision a world powered entirely by clean, sustainable energy. Starting with our ethanol production, we've been committed to reducing carbon emissions and promoting renewable resources. Today, I am thrilled to share our bold vision to expand beyond ethanol into the realms of solar, wind, and hydrogen energy.",
							"Our decision to venture into solar and wind power aligns with our mission to harness the natural, abundant resources around us. By investing in these technologies, we aim to provide reliable and affordable clean energy solutions that not only meet today's demands but also safeguard the environment for future generations.",
							"Moreover, our exploration into hydrogen energy represents our commitment to pioneering the next frontier of clean fuel. Hydrogen holds immense potential as a zero-emission energy carrier, and we are dedicated to unlocking its possibilities to revolutionize industries and transportation.",
							"BNREL stands at the cusp of a transformative journey. Together with our dedicated team and supportive community, we are poised to redefine the future of energy production. We invite you to join us as we forge a path toward a cleaner, more sustainable world.",
						]}
					/>
					<BackgroundBlogCard
						name="Sultan Abbas"
						position="Executive Director"
						imageSrc="/sultan.png"
						longMessage={[
							"At BNREL, our vision is to illuminate the path toward a sustainable and cleaner future. Since our inception, our ethanol plant has been a testament to our commitment to renewable energy and reducing environmental impact. Today, I am proud to announce our ambitious plans to expand our horizons into solar, wind, and hydrogen energy sectors.",
							"We recognize that the future of energy lies in diversifying our renewable resources. By investing in solar and wind technologies, we aim to harness the natural power of the sun and wind to generate efficient, reliable, and eco-friendly energy solutions. These ventures not only align with our sustainability goals but also contribute to global efforts in combating climate change.",
							"Our exploration into hydrogen energy represents our dedication to pioneering innovative solutions in the clean tech industry. Hydrogen holds immense potential as a zero-emission fuel, and we are eager to develop this technology to revolutionize energy consumption across various sectors.",
							"BNREL stands at the forefront of an exciting transformation in energy production. We are committed to leading with integrity, innovation, and a steadfast dedication to environmental stewardship. We invite you to join us on this journey as we work together to power a brighter, cleaner future for all.",
						]}
					/>
				</div>
			</div>
		</div>
	);
}

interface BackgroundBlogCardProps {
	name: string;
	position: string;
	imageSrc: string;
	longMessage?: string[];
}

const BackgroundBlogCard: React.FC<BackgroundBlogCardProps> = ({
	name,
	position,
	imageSrc,
	longMessage,
}) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className="relative grid h-[30rem] md:h-[40rem] w-full items-end justify-center overflow-hidden text-center rounded-lg shadow-2xl"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div
				className="absolute inset-0 m-0 h-full w-full bg-cover bg-center"
				style={{ backgroundImage: `url(${imageSrc})` }}
			>
				<div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
			</div>
			<div className="relative pt-10 md:pt-14 pb-4 px-4 md:px-6 lg:px-12">
				<h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
					{name}
				</h2>
				<h3 className="text-lg md:text-xl font-medium text-gray-300 mb-4">
					{position}
				</h3>
				<div
					className={`mt-6 transition-all duration-300 ease-in-out ${
						isHovered
							? "opacity-100 transform translate-y-0"
							: "opacity-0 transform translate-y-4"
					}`}
				>
					<Modal buttonText="Read More" heading={name} message={longMessage} />
				</div>
			</div>
		</div>
	);
};
