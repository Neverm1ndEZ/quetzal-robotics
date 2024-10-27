import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

interface ClientLogoProps {
	imageSrc: string;
	name: string;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ imageSrc, name }) => (
	<div className="mx-4">
		<div className="relative h-32 w-64 space-x-8">
			<Image
				src={imageSrc}
				alt={`${name} logo`}
				layout="fill"
				objectFit="contain"
				className="transition-all duration-300"
			/>
		</div>
	</div>
);

const ClientShowcase = () => {
	const clients = [
		{ imageSrc: "/bp.jpeg", name: "Bharat Petroleum" },
		{ imageSrc: "/fab.png", name: "First Abu Dhabi Bank" },
		{ imageSrc: "/hul.jpg", name: "Hindustan Unilever" },
		{ imageSrc: "/varma.png", name: "Varma Capital" },
	];

	return (
		<div className="mt-16 px-4 lg:px-0 max-w-7xl mx-auto">
			<div className="mb-12">
				<h2 className="text-center text-4xl font-bold text-[#0D6E78] mb-8">
					Our Trusted Clients
				</h2>
				<div className="flex flex-wrap justify-center items-center">
					<Marquee gradient={false} speed={150}>
						{clients.map((client, index) => (
							<ClientLogo key={index} {...client} />
						))}
					</Marquee>
				</div>
			</div>
		</div>
	);
};

export default ClientShowcase;
