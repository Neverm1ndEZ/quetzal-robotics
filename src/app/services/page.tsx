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
			imageSrc: "https://placehold.co/400x300",
			title: "Machine Learning Integration",
			description:
				"Advanced AI algorithms enabling robots to learn from experience and improve performance over time. Implementing neural networks for enhanced decision-making capabilities.",
		},
		{
			imageSrc: "https://placehold.co/400x300",
			title: "Computer Vision Systems",
			description:
				"Cutting-edge visual perception systems allowing robots to understand and interact with their environment. Real-time object detection and tracking capabilities.",
		},
		{
			imageSrc: "https://placehold.co/400x300",
			title: "Robotic Process Automation",
			description:
				"Streamline your operations with our RPA solutions. Custom-designed robots to automate repetitive tasks and increase efficiency in manufacturing processes.",
		},
		{
			imageSrc: "https://placehold.co/400x300",
			title: "Deep Learning Research",
			description:
				"Pioneering research in deep learning applications for robotics. Developing next-generation algorithms for enhanced robot autonomy and decision-making.",
		},
		{
			imageSrc: "https://placehold.co/400x300",
			title: "Custom Robot Design",
			description:
				"Tailored robotic solutions designed to meet your specific needs. From concept to deployment, we create robots that solve your unique challenges.",
		},
		{
			imageSrc: "https://placehold.co/400x300",
			title: "Predictive Maintenance",
			description:
				"IoT-enabled preventive maintenance systems using advanced analytics to predict and prevent equipment failures before they occur.",
		},
	];

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
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
