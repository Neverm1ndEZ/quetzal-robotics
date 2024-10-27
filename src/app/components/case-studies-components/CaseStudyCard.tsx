import { Card, CardBody, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
	return (
		<Link href={`/case-studies/${study.id}`}>
			<Card
				className="hover:shadow-lg transition-shadow duration-300 h-full"
				placeholder={undefined}
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
			>
				<div className="relative h-48 w-full">
					<Image
						src={study.thumbnail}
						alt={study.title}
						fill
						className="object-cover"
					/>
				</div>
				<CardBody
					placeholder={undefined}
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					<div className="flex justify-between items-center mb-2">
						<Typography
							color="gray"
							className="text-sm"
							placeholder={undefined}
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
						>
							{study.client}
						</Typography>
						<Typography
							color="gray"
							className="text-sm"
							placeholder={undefined}
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
						>
							{study.readTime}
						</Typography>
					</div>
					<Typography
						variant="h5"
						color="blue-gray"
						className="mb-2"
						placeholder={undefined}
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						{study.title}
					</Typography>
					<Typography
						color="gray"
						className="line-clamp-3"
						placeholder={undefined}
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						{study.background}
					</Typography>
				</CardBody>
			</Card>
		</Link>
	);
}
