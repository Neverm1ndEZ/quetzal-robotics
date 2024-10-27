"use client";
import React from "react";
import { Typography } from "@material-tailwind/react";
import { Clock, Award, Users, Lightbulb, Target, Workflow } from "lucide-react";

const AboutUs = () => {
	const stats = [
		{
			icon: <Clock className="h-6 w-6" />,
			value: "10+",
			label: "Years of Experience",
		},
		{
			icon: <Award className="h-6 w-6" />,
			value: "500+",
			label: "Projects Delivered",
		},
		{
			icon: <Users className="h-6 w-6" />,
			value: "50+",
			label: "Expert Engineers",
		},
	];

	const values = [
		{
			icon: <Lightbulb className="h-8 w-8 text-teal-500" />,
			title: "Innovation First",
			description:
				"Pushing the boundaries of robotics and automation technology",
		},
		{
			icon: <Target className="h-8 w-8 text-teal-500" />,
			title: "Quality Focused",
			description: "Delivering excellence through rigorous quality standards",
		},
		{
			icon: <Workflow className="h-8 w-8 text-teal-500" />,
			title: "Client Success",
			description:
				"Committed to achieving transformative results for our clients",
		},
	];

	return (
		<div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
			{/* Hero Section */}
			<div className="text-center mb-16">
				<Typography
					variant="h1"
					className="text-4xl font-bold text-[#0D6E78] mb-4"
					placeholder={undefined}
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					Transforming Industries Through Robotics Innovation
				</Typography>
				<Typography
					variant="paragraph"
					className="text-black max-w-3xl mx-auto"
					placeholder={undefined}
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					At Quetzal Robotics, we're pioneering the future of industrial
					automation with cutting-edge solutions in machine vision, process
					automation, and IoT-enabled monitoring. Our expertise in AI and
					robotics helps businesses achieve unprecedented levels of efficiency
					and innovation.
				</Typography>
			</div>

			{/* Stats Section */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
				{stats.map((stat, index) => (
					<div
						key={index}
						className="bg-white p-6 rounded-xl shadow-md text-center transform hover:scale-105 transition-transform duration-200"
					>
						<div className="flex justify-center mb-4 text-teal-500">
							{stat.icon}
						</div>
						<Typography
							variant="h4"
							className="text-3xl font-bold text-[#0D6E78]"
							placeholder={undefined}
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
						>
							{stat.value}
						</Typography>
						<Typography
							className="text-black"
							placeholder={undefined}
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
						>
							{stat.label}
						</Typography>
					</div>
				))}
			</div>

			{/* Mission Section */}
			<div className="mb-16 text-center">
				<Typography
					variant="h3"
					className="text-3xl font-bold text-[#0D6E78] mb-4"
					placeholder={undefined}
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					Our Mission
				</Typography>
				<Typography
					variant="paragraph"
					className="text-black max-w-3xl mx-auto"
					placeholder={undefined}
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					To empower industries with intelligent robotics solutions that drive
					efficiency, innovation, and sustainable growth. We combine
					cutting-edge technology with deep industry expertise to create
					transformative automation solutions.
				</Typography>
			</div>

			{/* Values Section */}
			<div className="mb-16">
				<Typography
					variant="h3"
					className="text-3xl font-bold text-[#0D6E78] mb-8 text-center"
					placeholder={undefined}
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					Our Values
				</Typography>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{values.map((value, index) => (
						<div
							key={index}
							className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-200"
						>
							<div className="flex justify-center mb-4">{value.icon}</div>
							<Typography
								variant="h5"
								className="text-xl font-bold text-[#0D6E78] mb-2 text-center"
								placeholder={undefined}
								onPointerEnterCapture={undefined}
								onPointerLeaveCapture={undefined}
							>
								{value.title}
							</Typography>
							<Typography
								className="text-black text-center"
								placeholder={undefined}
								onPointerEnterCapture={undefined}
								onPointerLeaveCapture={undefined}
							>
								{value.description}
							</Typography>
						</div>
					))}
				</div>
			</div>

			{/* Expertise Section */}
			<div className="bg-gray-50 rounded-xl p-8">
				<Typography
					variant="h3"
					className="text-3xl font-bold text-[#0D6E78] mb-8 text-center"
					placeholder={undefined}
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					Our Expertise
				</Typography>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{[
						"Machine Vision in Manufacturing",
						"Process Automation",
						"IoT-Enabled Monitoring",
						"Machine Learning & Data Analytics",
						"Generative AI",
						"Predictive Maintenance",
					].map((service, index) => (
						<div
							key={index}
							className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
						>
							<Typography
								variant="h6"
								className="text-[#0D6E78]"
								placeholder={undefined}
								onPointerEnterCapture={undefined}
								onPointerLeaveCapture={undefined}
							>
								{service}
							</Typography>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
