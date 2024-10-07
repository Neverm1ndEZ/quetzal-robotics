import React from "react";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { Droplet, Wind, Clock, Star } from "lucide-react";

export default function Perfume() {
	const features = [
		{
			icon: <Droplet className="h-6 w-6 text-[#0D6E78]" />,
			title: "Top Notes",
			description: "The initial impression - citrus, lavender, bergamot",
		},
		{
			icon: <Wind className="h-6 w-6 text-[#0D6E78]" />,
			title: "Heart Notes",
			description: "The essence - rose, jasmine, ylang-ylang",
		},
		{
			icon: <Clock className="h-6 w-6 text-[#0D6E78]" />,
			title: "Base Notes",
			description: "The lasting impression - vanilla, musk, sandalwood",
		},
	];

	const testimonials = [
		{
			quote: "A truly remarkable fragrance that leaves a lasting impression.",
			author: "Emily Johnson",
			role: "Fragrance Enthusiast",
		},
		{
			quote: "The perfect balance of sophistication and allure.",
			author: "Michael Chen",
			role: "Perfume Critic",
		},
	];

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			{/* Hero Section */}
			<div className="mb-16 text-center">
				<Typography
					variant="h1"
					className="text-5xl font-bold mb-4 text-[#0D6E78]"
					placeholder=""
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					The Art of Fragrance
				</Typography>
				<Typography
					variant="lead"
					className="text-xl mb-8"
					placeholder=""
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					A Journey Through Scent: Exploring the delicate balance of notes and
					the craft behind premium perfumes
				</Typography>
				<div className="flex justify-center gap-4">
					<Button
						size="lg"
						className="bg-[#0D6E78] hover:bg-[#0D6E78]"
						placeholder=""
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						Explore Collection
					</Button>
					<Button
						size="lg"
						variant="outlined"
						className="border-[#0D6E78] text-[#0D6E78] hover:border-[#0D6E78]"
						placeholder=""
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						Learn More
					</Button>
				</div>
			</div>

			{/* Image Section */}
			<div className="mb-16">
				<div className="relative h-[500px] w-full mb-4">
					<img
						src="/net-zero-perfume.jpeg"
						alt="Luxury perfume bottles"
						className="h-full w-full object-cover rounded-xl shadow-lg"
					/>
				</div>
				<Typography
					variant="small"
					className="text-center italic"
					placeholder=""
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					BNREL Team&apos;s Interaction with TIDCO MD Shri Sandeep Nanduri upon
					their acceptance to participate in the companies upcoming 195KLD
					Ethanol Project in Tuticorin - The team is seen gifting the MD with
					the Proposed By-Product of Net-Zero Perfume 🌽🌹
				</Typography>
			</div>

			{/* Features Grid */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
				{features.map((feature, index) => (
					<Card
						key={index}
						className="hover:shadow-lg transition-shadow border border-[#0D6E78]"
						placeholder=""
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						<CardBody
							className="text-center"
							placeholder=""
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
						>
							<div className="mb-4 w-12 h-12 mx-auto bg-[#0D6E78] rounded-full flex items-center justify-center">
								{feature.icon}
							</div>
							<Typography
								variant="h5"
								className="mb-2 text-[#0D6E78]"
								placeholder=""
								onPointerEnterCapture={undefined}
								onPointerLeaveCapture={undefined}
							>
								{feature.title}
							</Typography>
							<Typography
								className=""
								placeholder=""
								onPointerEnterCapture={undefined}
								onPointerLeaveCapture={undefined}
							>
								{feature.description}
							</Typography>
						</CardBody>
					</Card>
				))}
			</div>

			{/* Main Content */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
				<div>
					<Typography
						variant="h3"
						className="text-3xl font-semibold mb-6 text-[#0D6E78]"
						placeholder=""
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						The Science of Scent
					</Typography>
					<Typography
						variant="paragraph"
						className="mb-6 text-lg"
						placeholder=""
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						Creating a perfume is a delicate balance of art and science. Master
						perfumers, known as &quot;noses&quot;, carefully layer different
						notes to create a harmonious blend that evolves over time. Each
						fragrance is a unique composition, telling its own story through
						carefully selected ingredients and artisanal craftsmanship.
					</Typography>
					<Button
						variant="outlined"
						className="flex items-center gap-2 border-[#0D6E78] text-[#0D6E78] hover:border-[#0D6E78]"
						placeholder=""
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						Learn More <Star className="h-4 w-4" />
					</Button>
				</div>
			</div>

			{/* Testimonials */}
			<div className="mb-16">
				<Typography
					variant="h4"
					className="text-center mb-8 text-[#0D6E78]"
					placeholder=""
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					What Our Customers Say
				</Typography>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{testimonials.map((testimonial, index) => (
						<Card
							key={index}
							className="border border-[#0D6E78]"
							placeholder=""
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
						>
							<CardBody
								placeholder=""
								onPointerEnterCapture={undefined}
								onPointerLeaveCapture={undefined}
							>
								<Typography
									variant="paragraph"
									className="mb-4 italic"
									placeholder=""
									onPointerEnterCapture={undefined}
									onPointerLeaveCapture={undefined}
								>
									&quot;{testimonial.quote}&quot;
								</Typography>
								<Typography
									variant="h6"
									className=""
									placeholder=""
									onPointerEnterCapture={undefined}
									onPointerLeaveCapture={undefined}
								>
									{testimonial.author}
								</Typography>
								<Typography
									className=""
									placeholder=""
									onPointerEnterCapture={undefined}
									onPointerLeaveCapture={undefined}
								>
									{testimonial.role}
								</Typography>
							</CardBody>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
