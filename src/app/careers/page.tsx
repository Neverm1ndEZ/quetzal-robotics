"use client";
import React from "react";
import { Typography, Button, Input, Card } from "@material-tailwind/react";
import { Users, Trophy, Leaf } from "lucide-react";

export default function page() {
	const benefits = [
		{
			icon: <Leaf className="w-8 h-8 text-[#0D6E78]" />,
			title: "Sustainable Impact",
			description:
				"Make a real difference in the fight against climate change while working with cutting-edge robotics technologies.",
		},
		{
			icon: <Users className="w-8 h-8 text-[#0D6E78]" />,
			title: "Collaborative Culture",
			description:
				"Join a team of passionate experts in robotics and AI, fostering innovation and knowledge sharing.",
		},
		{
			icon: <Trophy className="w-8 h-8 text-[#0D6E78]" />,
			title: "Growth Opportunities",
			description:
				"Benefit from continuous learning, career advancement paths, and professional development programs.",
		},
	];

	return (
		<div className="max-w-6xl mx-auto px-4 py-12">
			{/* Hero Section */}
			<div className="text-center mb-16">
				<Typography
					placeholder=""
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
					variant="h1"
					className="text-4xl font-bold text-[#0D6E78] mb-4"
				>
					Join Our Mission for a Sustainable Future
				</Typography>
				<Typography
					variant="lead"
					className="text-xl text-gray-600"
					placeholder=""
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					Be part of a team dedicated to revolutionizing the robotics sector
					through innovative, clean technologies.
				</Typography>
			</div>

			{/* Why Join Us Section */}
			<div className="mb-16">
				<Typography
					variant="h2"
					className="text-3xl font-bold text-center text-[#0D6E78] mb-12"
					placeholder=""
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					Why Join Us?
				</Typography>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{benefits.map((benefit, index) => (
						<Card
							key={index}
							className="p-6 hover:shadow-lg transition-shadow shadow-2xl"
							placeholder=""
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
						>
							<div className="flex flex-col items-center text-center">
								<div className="mb-4">{benefit.icon}</div>
								<Typography
									variant="h5"
									className="mb-2"
									placeholder=""
									onPointerEnterCapture={undefined}
									onPointerLeaveCapture={undefined}
								>
									{benefit.title}
								</Typography>
								<Typography
									className="text-gray-600"
									placeholder=""
									onPointerEnterCapture={undefined}
									onPointerLeaveCapture={undefined}
								>
									{benefit.description}
								</Typography>
							</div>
						</Card>
					))}
				</div>
			</div>

			{/* Application Form */}
			<Card
				className="p-8 max-w-2xl mx-auto"
				placeholder=""
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
			>
				<Typography
					variant="h3"
					className="text-2xl font-bold text-center mb-8 text-[#2d565a]"
					placeholder=""
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					Ready to Make an Impact?
				</Typography>
				<form className="space-y-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<Input
							type="text"
							label="First Name"
							color="teal"
							className=""
							placeholder=""
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
							crossOrigin={undefined}
						/>
						<Input
							type="text"
							label="Last Name"
							color="teal"
							className=""
							placeholder=""
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
							crossOrigin={undefined}
						/>
					</div>
					<Input
						type="email"
						label="Email Address"
						color="teal"
						className=""
						placeholder=""
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
						crossOrigin={undefined}
					/>
					<Input
						type="tel"
						label="Phone Number"
						color="teal"
						className=""
						placeholder=""
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
						crossOrigin={undefined}
					/>
					<div className="space-y-2">
						<Typography
							variant="h6"
							color="blue-gray"
							className="mb-2"
							placeholder=""
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
						>
							Upload Your CV
						</Typography>
						<Input
							type="file"
							accept=".pdf,.doc,.docx"
							color="teal"
							className=""
							placeholder=""
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
							crossOrigin={undefined}
						/>
						<Typography
							variant="small"
							color="gray"
							className="text-xs"
							placeholder=""
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
						>
							Accepted formats: PDF, DOC, DOCX. Max file size: 5MB
						</Typography>
					</div>
					<Button
						className="w-full bg-[#0D6E78] hover:bg-[#0D6E78]"
						size="lg"
						placeholder=""
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						Submit Application
					</Button>
				</form>
			</Card>

			{/* Additional Information */}
			{/* <div className="mt-12 text-center">
				<Typography
					className="text-gray-600"
					placeholder=""
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					Have questions? Contact our HR team at{" "}
					<a
						href="mailto:careers@binnynewre.com"
						className="text-[#0D6E78] hover:text-[#04434a]"
					>
						iitmshanker@gmail.com
					</a>
				</Typography>
			</div> */}
		</div>
	);
}
