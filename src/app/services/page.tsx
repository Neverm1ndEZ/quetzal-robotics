"use client";
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import {
	Button,
	Dialog,
	DialogBody,
	DialogHeader,
	Typography,
} from "@material-tailwind/react";

interface ModalProps {
	buttonText: string;
	title: string;
	imageSrc: string;
	detailedContent?: string[];
}

function Modal({ buttonText, title, imageSrc, detailedContent }: ModalProps) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(!open);

	const defaultContent = [
		"Detailed information about our innovative solutions and how they can transform your business operations.",
		"Our team of experts leverages cutting-edge technology to deliver measurable results.",
		"We provide end-to-end support and maintenance to ensure optimal performance.",
	];

	const content = detailedContent || defaultContent;

	return (
		<>
			<Button
				onClick={handleOpen}
				color="teal"
				variant="text"
				className="p-0 hover:p-4 flex items-center gap-2"
				placeholder={undefined}
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
			>
				{buttonText} <ArrowRightIcon strokeWidth={2} className="w-3 h-3" />
			</Button>
			<Dialog
				open={open}
				handler={handleOpen}
				placeholder={undefined}
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
			>
				<div className="relative">
					<div className="h-64 w-full">
						<img
							src={imageSrc}
							alt={title}
							className="w-full h-full object-cover"
						/>
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="absolute top-4 right-4 h-6 w-6 cursor-pointer text-white hover:text-gray-200"
						onClick={handleOpen}
					>
						<path
							fillRule="evenodd"
							d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
				<DialogHeader
					className="flex flex-col items-start px-6"
					placeholder={undefined}
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					<Typography
						className="text-2xl font-bold text-[#0D6E78]"
						placeholder={undefined}
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						{title}
					</Typography>
				</DialogHeader>
				<DialogBody
					className="h-[32rem] overflow-y-auto px-6"
					placeholder={undefined}
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					{content.map((paragraph, index) => (
						<Typography
							key={index}
							className="text-gray-700 mb-4"
							placeholder={undefined}
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
						>
							{paragraph}
						</Typography>
					))}
				</DialogBody>
			</Dialog>
		</>
	);
}

interface ServiceCardProps {
	imageSrc: string;
	title: string;
	description: string;
	detailedContent?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
	imageSrc,
	title,
	description,
	detailedContent,
}) => (
	<div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2">
		<div className="h-48 relative">
			<img src={imageSrc} alt={title} className="w-full h-full object-cover" />
		</div>
		<div className="p-6">
			<h3 className="text-xl font-bold text-[#0D6E78] mb-3">{title}</h3>
			<p className="text-gray-600">{description}</p>
			<div className="mt-4">
				<Modal
					buttonText="Read More"
					title={title}
					imageSrc={imageSrc}
					detailedContent={detailedContent}
				/>
			</div>
		</div>
	</div>
);

export default function ServicesPage() {
	const services: ServiceCardProps[] = [
		{
			imageSrc: "/mv.jpeg",
			title: "Machine Vision in Manufacturing",
			description:
				"Utilizing advanced imaging technologies to enhance quality control and streamline production processes in manufacturing environments.",
			detailedContent: [
				"Our Machine Vision solutions revolutionize manufacturing processes by implementing cutting-edge imaging technologies that ensure unprecedented levels of quality control and process optimization.",
				"Using advanced algorithms and high-precision cameras, we can detect microscopic defects, measure critical dimensions, and track production metrics in real-time, all while operating at high speeds.",
				"Benefits include reduced waste, improved product quality, increased throughput, and substantial cost savings through early defect detection.",
				"Our systems can be integrated with existing production lines and customized to meet specific industry requirements, from electronics to automotive manufacturing.",
				"Key features include: Multi-camera synchronization, Deep learning-based defect detection, 3D inspection capabilities, and Real-time quality monitoring dashboards.",
			],
		},
		{
			imageSrc: "/automation.jpg",
			title: "Process Automation",
			description:
				"Implementing automated systems to optimize workflows, reduce human error, and increase operational efficiency across various industries.",
			detailedContent: [
				"Our Process Automation solutions transform manual, time-consuming operations into streamlined, efficient workflows that drive productivity and reduce costs.",
				"We specialize in developing custom automation solutions that integrate seamlessly with your existing infrastructure, from simple task automation to complex, multi-system orchestration.",
				"Our automation frameworks incorporate advanced technologies such as RPA (Robotic Process Automation), workflow engines, and intelligent document processing to handle both structured and unstructured data.",
				"Key benefits include: Up to 70% reduction in processing time, 99.9% accuracy in automated tasks, 24/7 operation capability, and real-time process monitoring.",
				"Industries we serve include manufacturing, healthcare, finance, and logistics, with solutions ranging from inventory management to customer service automation.",
				"We also provide comprehensive training and support to ensure your team can effectively manage and maintain the automated systems.",
			],
		},
		{
			imageSrc: "/iot.jpg",
			title: "IoT Enabled Monitoring",
			description:
				"Leveraging IoT devices for real-time monitoring and data collection, enabling proactive decision-making and improved asset management.",
			detailedContent: [
				"Our IoT Enabled Monitoring solutions provide real-time visibility into your operations through a network of smart sensors and advanced analytics platforms.",
				"We deploy state-of-the-art IoT sensors that capture critical data points across your infrastructure, from environmental conditions to equipment performance metrics.",
				"Our secure cloud-based platform aggregates and analyzes data from thousands of IoT devices, providing actionable insights through intuitive dashboards.",
				"Features include: Real-time alerts and notifications, Predictive analytics, Custom reporting, Mobile accessibility, and Enterprise-grade security.",
				"Applications range from environmental monitoring in sensitive facilities to supply chain tracking and energy consumption optimization.",
				"We ensure seamless integration with existing systems through standard protocols and APIs, making data accessible across your organization.",
				"Our solutions scale from small installations to enterprise-wide deployments, with flexible architecture that adapts to your growing needs.",
			],
		},
		{
			imageSrc: "/ml-da.jpg",
			title: "Machine Learning and Data Analytics",
			description:
				"Applying machine learning techniques to analyze large datasets, uncover patterns, and drive data-informed business strategies.",
			detailedContent: [
				"Our Machine Learning and Data Analytics solutions transform raw data into actionable intelligence, enabling data-driven decision making across your organization.",
				"We employ state-of-the-art machine learning algorithms and statistical analysis techniques to process structured and unstructured data, discovering hidden patterns and valuable insights.",
				"Our comprehensive analytics pipeline includes:",
				"• Data Collection & Integration: Automated gathering from multiple sources, including databases, APIs, IoT devices, and unstructured data sources",
				"• Data Preprocessing & Cleaning: Advanced techniques for handling missing values, outlier detection, and data normalization",
				"• Feature Engineering & Selection: Expert creation and selection of relevant features to optimize model performance",
				"• Model Development & Training: Implementation of various ML algorithms including:",
				"  - Deep Learning for complex pattern recognition",
				"  - Natural Language Processing for text analysis",
				"  - Time Series Analysis for forecasting",
				"  - Clustering for market segmentation",
				"  - Classification for predictive analytics",
				"Key applications include:",
				"• Customer behavior analysis and prediction",
				"• Market trend forecasting and analysis",
				"• Risk assessment and fraud detection",
				"• Supply chain optimization",
				"• Quality control and process optimization",
				"Our solutions provide:",
				"• Real-time analytics dashboards with interactive visualizations",
				"• Automated report generation and insight delivery",
				"• Model performance monitoring and automatic retraining",
				"• Integration with existing business intelligence tools",
				"Benefits our clients typically experience:",
				"• 30-50% improvement in prediction accuracy",
				"• 40% reduction in analysis time",
				"• 25% increase in operational efficiency",
				"• ROI within 6-12 months of implementation",
				"We ensure responsible AI practices with:",
				"• Bias detection and mitigation",
				"• Model explainability tools",
				"• Data privacy and security measures",
				"• Regular model validation and updates",
				"Our team provides comprehensive support including:",
				"• Initial system setup and integration",
				"• Custom model development",
				"• Team training and knowledge transfer",
				"• Ongoing maintenance and optimization",
			],
		},
		{
			imageSrc: "/gen-ai.jpeg",
			title: "Generative AI",
			description:
				"Exploring the capabilities of generative AI to create innovative solutions, from content generation to design automation.",
			detailedContent: [
				"Our Generative AI solutions harness the power of advanced neural networks and machine learning to create innovative, automated content and design solutions.",
				"We specialize in developing custom generative AI models that can create everything from technical documentation to 3D design variations, significantly accelerating your creative and technical processes.",
				"Our solutions incorporate the latest advances in transformer architectures, GANs (Generative Adversarial Networks), and reinforcement learning to deliver high-quality, contextually relevant outputs.",
				"Key applications include: Automated content creation, Design iteration generation, Code generation and optimization, and Synthetic data generation for training.",
				"We ensure responsible AI development with built-in bias detection and content filtering systems to maintain output quality and ethical standards.",
				"Our platforms include user-friendly interfaces that allow non-technical users to harness the power of generative AI while providing advanced controls for technical users.",
				"We provide comprehensive training and support to help your team effectively utilize and maintain these cutting-edge systems.",
				"Regular model updates and fine-tuning ensure your generative AI solutions stay current with the latest technological advances and your evolving needs.",
			],
		},
		{
			imageSrc: "/predictive.jpg",
			title: "Predictive Maintenance",
			description:
				"IoT-enabled preventive maintenance systems using advanced analytics to predict and prevent equipment failures before they occur.",
			detailedContent: [
				"Our Predictive Maintenance solutions combine IoT sensors, advanced analytics, and machine learning to revolutionize equipment maintenance strategies.",
				"We implement comprehensive sensor networks that continuously monitor vital equipment parameters such as vibration, temperature, pressure, and electrical characteristics.",
				"Our advanced algorithms analyze real-time and historical data to detect subtle patterns that indicate potential equipment failures, often weeks or months in advance.",
				"Key features include: Real-time equipment health monitoring, Failure prediction with 95%+ accuracy, Maintenance scheduling optimization, and Resource allocation planning.",
				"The system provides detailed maintenance recommendations, including specific components to inspect, recommended actions, and estimated time to failure.",
				"Benefits include: Up to 70% reduction in unexpected downtime, 25% reduction in maintenance costs, Extended equipment lifespan, and Optimized spare parts inventory.",
				"Industries served include manufacturing, energy, transportation, and facilities management, with customized solutions for specific equipment types and operating environments.",
				"Our platform integrates with existing CMMS (Computerized Maintenance Management Systems) and ERP systems to provide a seamless maintenance management solution.",
				"We provide comprehensive training and ongoing support to ensure your maintenance team can effectively utilize the system and interpret its recommendations.",
			],
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
						<ServiceCard key={index} {...service} />
					))}
				</div>
			</div>
		</div>
	);
}
