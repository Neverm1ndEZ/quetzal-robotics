"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface ServiceCardProps {
	imageSrc: string;
	title: string;
	description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
	imageSrc,
	title,
	description,
}) => (
	<div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2">
		<div className="h-48 relative">
			<img src={imageSrc} alt={title} className="w-full h-full object-cover" />
		</div>
		<div className="p-6">
			<h3 className="text-xl font-bold text-[#0D6E78] mb-3">{title}</h3>
			<p className="text-gray-600">{description}</p>
		</div>
	</div>
);

export default function ServicesPage() {
	const services: ServiceCardProps[] = [
		{
			imageSrc: "/predictive.jpeg",
			title: "Machine Vision in Manufacturing",
			description:
				"Utilizing advanced imaging technologies to enhance quality control and streamline production processes in manufacturing environments.",
		},
		{
			imageSrc: "/auto.jpeg",
			title: "Process Automation",
			description:
				"Implementing automated systems to optimize workflows, reduce human error, and increase operational efficiency across various industries.",
		},
		{
			imageSrc: "/iot.jpeg",
			title: "IoT Enabled Monitoring",
			description:
				"Leveraging IoT devices for real-time monitoring and data collection, enabling proactive decision-making and improved asset management.",
		},
		{
			imageSrc: "/ml-da.jpg",
			title: "Machine Learning and Data Analytics",
			description:
				"Applying machine learning techniques to analyze large datasets, uncover patterns, and drive data-informed business strategies.",
		},
		{
			imageSrc: "/gen-ai.jpeg",
			title: "Generative AI",
			description:
				"Exploring the capabilities of generative AI to create innovative solutions, from content generation to design automation.",
		},
		{
			imageSrc: "/pred.jpeg",
			title: "Predictive Maintenance",
			description:
				"IoT-enabled preventive maintenance systems using advanced analytics to predict and prevent equipment failures before they occur.",
		},
	];

	const router = useRouter();

	return (
		<div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold text-[#0D6E78] mb-4">
						Our Services
					</h1>
					<p className="text-xl text-gray-600">
						Advancing the future of robotics with cutting-edge solutions
					</p>
				</div>
				<div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
					onClick={() => router.push("/services")}
				>
					{services.map((service, index) => (
						<ServiceCard
							key={index}
							imageSrc={service.imageSrc}
							title={service.title}
							description={service.description}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
