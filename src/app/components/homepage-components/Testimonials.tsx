"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

interface ClientLogoProps {
	imageSrc: string;
	name: string;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ imageSrc, name }) => (
	<div className="mx-4">
		<div className="relative h-16 w-32">
			<Image
				src={imageSrc}
				alt={`${name} logo`}
				layout="fill"
				objectFit="contain"
				className="grayscale hover:grayscale-0 transition-all duration-300"
			/>
		</div>
	</div>
);

export const ClientShowcase: React.FC = () => {
	const clients: ClientLogoProps[] = [
		{
			imageSrc: "/client1-logo.png",
			name: "Tech Innovations",
		},
		{
			imageSrc: "/client2-logo.png",
			name: "StartUp Co",
		},
		{
			imageSrc: "/client3-logo.png",
			name: "Global Solutions",
		},
		{
			imageSrc: "/client4-logo.png",
			name: "Digital Dynamics",
		},
		{
			imageSrc: "/client5-logo.png",
			name: "Future Systems",
		},
		// Add more clients as needed
	];

	return (
		<div className="mt-16 px-4 lg:px-0 max-w-7xl mx-auto">
			<div className="flex justify-start mb-8">
				<h1 className="text-2xl uppercase font-bold text-[#0D6E78] border-b-2 border-[#0D6E78] pb-2">
					Our Trusted Clients
				</h1>
			</div>
			<Marquee gradient={false} speed={50} pauseOnHover={true} className="py-8">
				{clients.map((client, index) => (
					<ClientLogo key={index} {...client} />
				))}
			</Marquee>
		</div>
	);
};
