"use client";
import { CaseStudyContent } from "@/app/components/case-studies-components/CaseStudyContent";
import { caseStudies } from "@/app/data/case-studies";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { IconButton } from "@material-tailwind/react";
import Link from "next/link";

export default function CaseStudyPage({
	params,
}: {
	params: { "case-study": string };
}) {
	const study = caseStudies.find((s) => s.id === params["case-study"]);

	if (!study) {
		return <div>Case study not found</div>;
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<Link href="/case-studies">
				<IconButton
					variant="text"
					className="mb-4"
					placeholder={undefined}
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					<ArrowLeftIcon className="h-6 w-6" />
				</IconButton>
			</Link>
			<CaseStudyContent study={study} />
		</div>
	);
}
