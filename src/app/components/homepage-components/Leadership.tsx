"use client";
import Image from "next/image";
import React from "react";
import { Modal } from "../Modal";

interface LeadershipCardProps {
	name: string;
	position: string;
	message: string;
	imageSrc: string;
	longMessage?: string[];
}

const LeadershipCard: React.FC<LeadershipCardProps> = ({
	name,
	position,
	message,
	imageSrc,
	longMessage,
}) => (
	<div className="flex flex-col sm:flex-row items-center gap-6 rounded-lg shadow-2xl p-6 bg-white">
		<div className="relative w-[200px] h-[200px] flex-shrink-0">
			<Image
				src={imageSrc}
				alt={`${name} - ${position}`}
				layout="fill"
				objectFit="cover"
				className="rounded-full"
			/>
		</div>
		<div className="flex flex-col justify-start items-start gap-y-3">
			<h2 className="text-2xl font-bold text-[#0D6E78]">{name}</h2>
			<h3 className="text-lg font-medium text-gray-700">{position}</h3>
			<p className="text-base text-gray-600 max-w-md">{message}</p>
			<Modal buttonText="Read More" heading={name} message={longMessage} />
		</div>
	</div>
);

export default function Leadership() {
	return (
		<div className="mt-16 px-4 lg:px-0">
			<div className="flex justify-start mb-6">
				<h1 className="text-xl uppercase font-bold text-[#0D6E78] border-b-2 border-[#0D6E78] pb-2">
					Leadership Speaks
				</h1>
			</div>
			<div className="w-full grid lg:grid-cols-2 gap-8 bg-gradient-to-b from-[#0D6E78] to-white rounded-xl p-8">
				<LeadershipCard
					name="Mohammed Abdul Salman"
					position="Executive Director"
					message="At BNREL, we envision a world powered entirely by clean, sustainable energy. Starting with our ethanol production, we've been committed to reducing carbon emissions and promoting renewable resources."
					imageSrc="/salman.png"
					longMessage={[
						"At BNREL, we envision a world powered entirely by clean, sustainable energy. Starting with our ethanol production, we've been committed to reducing carbon emissions and promoting renewable resources. Today, I am thrilled to share our bold vision to expand beyond ethanol into the realms of solar, wind, and hydrogen energy.",
						"Our decision to venture into solar and wind power aligns with our mission to harness the natural, abundant resources around us. By investing in these technologies, we aim to provide reliable and affordable clean energy solutions that not only meet today's demands but also safeguard the environment for future generations.",
						"Moreover, our exploration into hydrogen energy represents our commitment to pioneering the next frontier of clean fuel. Hydrogen holds immense potential as a zero-emission energy carrier, and we are dedicated to unlocking its possibilities to revolutionize industries and transportation.",
						"BNREL stands at the cusp of a transformative journey. Together with our dedicated team and supportive community, we are poised to redefine the future of energy production. We invite you to join us as we forge a path toward a cleaner, more sustainable world.",
					]}
				/>
				<LeadershipCard
					name="Sultan Abbas"
					position="Executive Director"
					message="At BNREL, our vision is to illuminate the path toward a sustainable and cleaner future. Since our inception, our ethanol plant has been a testament to our commitment to renewable energy and reducing environmental impact."
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
	);
}
