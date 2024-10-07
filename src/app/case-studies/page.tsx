// app/case-studies/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardBody, Typography } from "@material-tailwind/react";

interface CaseStudy {
	id: string;
	title: string;
	description: string;
	image: string;
	date: string;
	readTime: string;
}

const caseStudies: CaseStudy[] = [
	{
		id: "solar",
		title: "The Process of Harvesting Solar Energy",
		description:
			"A comprehensive guide to understanding how solar energy is captured and converted into electricity.",
		image: "/solar-new.jpg",
		date: "2024-03-15",
		readTime: "5 min read",
	},
	{
		id: "wind",
		title: "Harnessing the Power of Wind Energy",
		description:
			"Exploring the technology and processes behind modern wind power generation.",
		image: "/wind-web.jpg",
		date: "2024-02-28",
		readTime: "7 min read",
	},
	{
		id: "hydrogen",
		title: "Understanding Hydrogen Power Plants",
		description:
			"A detailed look at how hydrogen is used to generate clean, sustainable energy.",
		image: "/hydrogen.png",
		date: "2024-02-10",
		readTime: "6 min read",
	},
	{
		id: "ethanol",
		title: "The Future of Ethanol Plants",
		description:
			"Discovering the potential of ethanol as a renewable energy source.",
		image: "/eth.jpg",
		date: "2024-01-25",
		readTime: "8 min read",
	},
];

export default function CaseStudyHome() {
	return (
		<div className="container mx-auto px-4 py-8">
			<Typography
				variant="h1"
				className="mb-8 text-4xl font-bold"
				placeholder=""
				onPointerEnterCapture={() => {}}
				onPointerLeaveCapture={() => {}}
			>
				Case Studies
			</Typography>
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{caseStudies.map((study) => (
					<Link key={study.id} href={`/case-studies/${study.id}`}>
						<Card
							className="hover:shadow-lg transition-shadow duration-300 h-full"
							placeholder=""
							onPointerEnterCapture={() => {}}
							onPointerLeaveCapture={() => {}}
						>
							<div className="relative h-48 w-full">
								<Image
									src={study.image}
									alt={study.title}
									fill
									className="object-cover"
								/>
							</div>
							<CardBody
								placeholder=""
								onPointerEnterCapture={() => {}}
								onPointerLeaveCapture={() => {}}
							>
								<div className="flex justify-between items-center mb-2">
									<Typography
										placeholder=""
										onPointerEnterCapture={() => {}}
										onPointerLeaveCapture={() => {}}
										color="gray"
										className="text-sm"
									>
										{study.date}
									</Typography>
									<Typography
										placeholder=""
										onPointerEnterCapture={() => {}}
										onPointerLeaveCapture={() => {}}
										color="gray"
										className="text-sm"
									>
										{study.readTime}
									</Typography>
								</div>
								<Typography
									variant="h5"
									placeholder=""
									onPointerEnterCapture={() => {}}
									onPointerLeaveCapture={() => {}}
									color="blue-gray"
									className="mb-2"
								>
									{study.title}
								</Typography>
								<Typography
									color="gray"
									placeholder=""
									onPointerEnterCapture={() => {}}
									onPointerLeaveCapture={() => {}}
								>
									{study.description}
								</Typography>
							</CardBody>
						</Card>
					</Link>
				))}
			</div>
		</div>
	);
}
