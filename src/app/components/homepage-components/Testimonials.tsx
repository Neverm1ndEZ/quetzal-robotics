"use client";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

interface TestimonialCardProps {
	imageSrc: string;
	name: string;
	role: string;
	quote: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
	imageSrc,
	name,
	role,
	quote,
}) => (
	<div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-gray-100">
		<div className="p-6 w-full">
			<div className="flex items-center mb-4">
				<div className="relative h-16 w-16 mr-4">
					<Image
						src={imageSrc}
						alt={name}
						layout="fill"
						objectFit="cover"
						className="rounded-full"
					/>
				</div>
				<div>
					<h3 className="text-xl font-bold text-red-600">{name}</h3>
					<p className="text-gray-500">{role}</p>
				</div>
			</div>
			<p className="text-gray-700 mb-4 italic">"{quote}"</p>
			<Button
				variant="text"
				className="bg-red-600 hover:bg-red-700 text-white"
				placeholder={undefined}
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
			>
				Read Full Story
			</Button>
		</div>
	</div>
);

export const Testimonials: React.FC = () => {
	const testimonialItems: TestimonialCardProps[] = [
		{
			imageSrc: "/dummy.jpg",
			name: "Sarah Johnson",
			role: "CEO, Tech Innovations",
			quote:
				"Working with this team has transformed our business. Their dedication and expertise are unmatched in the industry.",
		},
		{
			imageSrc: "/dummy.jpg",
			name: "Michael Chen",
			role: "Founder, StartUp Co",
			quote:
				"The level of professionalism and attention to detail exceeded our expectations. Highly recommended!",
		},
		{
			imageSrc: "/dummy.jpg",
			name: "Emily Rodriguez",
			role: "Marketing Director",
			quote:
				"Their innovative solutions helped us achieve our goals faster than we thought possible.",
		},
	];

	return (
		<div className="mt-16 px-4 lg:px-0 max-w-7xl mx-auto">
			<div className="flex justify-start mb-8">
				<h1 className="text-2xl uppercase font-bold text-red-600 border-b-2 border-red-500 pb-2">
					Client Testimonials
				</h1>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{testimonialItems.map((item, index) => (
					<TestimonialCard key={index} {...item} />
				))}
			</div>
		</div>
	);
};
