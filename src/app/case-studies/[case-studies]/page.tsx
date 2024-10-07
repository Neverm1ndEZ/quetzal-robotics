"use client";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { IconButton } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface ImageWithContentProps {
	imageSrc: string;
	altText: string;
	children: React.ReactNode;
}

const ImageWithContent: React.FC<ImageWithContentProps> = ({
	imageSrc,
	altText,
	children,
}) => {
	return (
		<div className="max-w-5xl mx-auto">
			<div className="relative w-4/5 lg:w-7/12 h-[300px] md:h-[400px] lg:h-[500px] mx-auto shadow-lg rounded-2xl overflow-hidden my-8">
				<Image
					src={imageSrc}
					alt={altText}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="object-cover"
				/>
			</div>
			<div className="prose prose-lg max-w-none">{children}</div>
		</div>
	);
};

const Solar = () => {
	// Solar content component
	return (
		<ImageWithContent imageSrc="/solar-new.jpg" altText="Solar panels">
			{/* Solar content here */}
			<div>Content goes here</div>
		</ImageWithContent>
	);
};

const Wind = () => {
	// Wind content component
	return (
		<ImageWithContent imageSrc="/wind-web.jpg" altText="Wind turbines">
			{/* Wind content here */}
			<div>Content goes here</div>
		</ImageWithContent>
	);
};

const Hydrogen = () => {
	// Hydrogen content component
	return (
		<ImageWithContent imageSrc="/hydrogen.png" altText="Hydrogen power plant">
			{/* Hydrogen content here */}
			<div>Content goes here</div>
		</ImageWithContent>
	);
};

const Ethanol = () => {
	// Ethanol content component
	return (
		<ImageWithContent imageSrc="/eth.jpg" altText="Ethanol plant">
			{/* Ethanol content here */}
			<div>Content goes here</div>
		</ImageWithContent>
	);
};

export default function CaseStudyTemplate() {
	const pathname = usePathname();

	const renderContent = () => {
		switch (pathname) {
			case "/case-studies/solar":
				return <Solar />;
			case "/case-studies/wind":
				return <Wind />;
			case "/case-studies/hydrogen":
				return <Hydrogen />;
			case "/case-studies/ethanol":
				return <Ethanol />;
			default:
				return <div>Case study not found</div>;
		}
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<Link href="/case-studies">
				<IconButton
					variant="text"
					className="mb-4"
					placeholder=""
					onPointerEnterCapture={() => {}}
					onPointerLeaveCapture={() => {}}
				>
					<ArrowLeftIcon className="h-6 w-6" />
				</IconButton>
			</Link>
			{renderContent()}
		</div>
	);
}
