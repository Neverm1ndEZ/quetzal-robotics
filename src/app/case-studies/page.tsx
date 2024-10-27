"use client";
import { Typography } from "@material-tailwind/react";
import { caseStudies } from "../data/case-studies";
import { CaseStudyCard } from "../components/case-studies-components/CaseStudyCard";

export default function CaseStudiesPage() {
	return (
		<div className="container mx-auto px-4 py-8">
			<Typography
				variant="h1"
				className="mb-8 text-4xl font-bold"
				placeholder={undefined}
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
			>
				Case Studies
			</Typography>
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{caseStudies.map((study) => (
					<CaseStudyCard key={study.id} study={study} />
				))}
			</div>
		</div>
	);
}
