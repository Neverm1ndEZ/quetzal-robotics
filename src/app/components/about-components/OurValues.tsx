"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Modal } from "../Modal";

interface SustainabilityCardProps {
	imageSrc: string;
	title: string;
	description: string;
}

const SustainabilityCard: React.FC<SustainabilityCardProps> = ({
	imageSrc,
	title,
	description,
}) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className="relative bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* Background Image */}
			<div
				className={`absolute inset-0 transition-opacity duration-300 z-0 ${
					isHovered ? "opacity-100" : "opacity-0"
				}`}
			>
				<Image
					src={imageSrc}
					alt={title}
					layout="fill"
					objectFit="cover"
					className="transition-transform duration-300 hover:scale-105"
				/>
				{/* Dark overlay for better text readability */}
				<div className="absolute inset-0 bg-black opacity-50"></div>
			</div>

			{/* Content */}
			<div
				className={`relative z-10 p-6 transition-colors duration-300 ${
					isHovered ? "bg-transparent" : "bg-white"
				}`}
			>
				<h3
					className={`text-xl sm:text-2xl font-bold mb-3 transition-colors duration-300 ${
						isHovered ? "text-white" : "text-[#0D6E78]"
					}`}
				>
					{title}
				</h3>
				<p
					className={`text-sm sm:text-base mb-4 transition-colors duration-300 ${
						isHovered ? "text-gray-200" : "text-gray-600"
					}`}
				>
					{description}
				</p>
				<Modal buttonText="Read More" />
			</div>
		</div>
	);
};

export const OurValues: React.FC = () => {
	const sustainabilityItems: SustainabilityCardProps[] = [
		{
			imageSrc: "/red-envirnoment.jpg",
			title: "Pioneer",
			description:
				"Encourage creative and inspirational ideas, take bold calls, and respond to change in an agile manner to deliver sustainable future value.",
		},
		{
			imageSrc: "/red-envirnoment.jpg",
			title: "Responsible",
			description:
				"Care for the planet, prioritize safety and deliver high-quality ESG-compliant solutions to clients with the highest ethical and governance standards.",
		},
		{
			imageSrc: "/red-envirnoment.jpg",
			title: "Excellence",
			description:
				"Take charge and dive deep to build the best in class and deliver on time consistently by inculcating past learnings and embracing continuous improvement.",
		},
		{
			imageSrc: "/red-envirnoment.jpg",
			title: "Partner",
			description:
				"Connected by trust and mutual respect, transcend boundaries and foster community-level collaboration across businesses and levels, by placing collective success over individual achievements.",
		},
	];

	return (
		<div className="bg-gray-200 py-10">
			<div className="my-16 px-4 lg:px-0 max-w-7xl mx-auto">
				<div className="flex justify-center items-center mb-8">
					<div className="max-w-full md:max-w-[60%] text-center pt-10 md:pt-20">
						<h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold">
							Our Values
						</h1>
					</div>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{sustainabilityItems.map((item, index) => (
						<SustainabilityCard key={index} {...item} />
					))}
				</div>
			</div>
		</div>
	);
};
