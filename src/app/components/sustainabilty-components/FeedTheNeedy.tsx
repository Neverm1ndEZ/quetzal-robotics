import React from "react";
import {
	Card,
	CardBody,
	Typography,
	Button,
	IconButton,
	Tooltip,
} from "@material-tailwind/react";

// Types for our statistics
type Statistic = {
	value: string;
	label: string;
	icon: string;
};

const statistics: Statistic[] = [
	{ value: "10,000+", label: "People fed monthly", icon: "👥" },
	{ value: "500+", label: "Active volunteers", icon: "❤️" },
	{ value: "50,000 lbs", label: "Food rescued annually", icon: "🥘" },
];

const approachData = [
	{
		title: "Sustainable Sourcing",
		description:
			"We partner with local farms, restaurants, and grocery stores to rescue surplus food that would otherwise go to waste. This not only provides nutritious meals to those in need but also reduces the environmental impact of food waste.",
		icon: "🌱",
	},
	{
		title: "Efficient Distribution",
		description:
			"Using our logistics expertise, we've created a network of distribution points throughout the community, ensuring that food reaches those who need it most efficiently and quickly.",
		icon: "🚛",
	},
	{
		title: "Community Engagement",
		description:
			"We believe that lasting change comes from within the community. That's why we work closely with local organizations and volunteers to identify needs and distribute resources effectively.",
		icon: "🤝",
	},
];

export default function FeedTheNeedy() {
	return (
		<div className="max-w-7xl mx-auto px-4 py-12">
			{/* Hero Section */}
			<div className="text-center mb-12">
				<Typography
					variant="h1"
					color="teal"
					className="mb-4"
					placeholder=""
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					Feed the Needy
				</Typography>
				<Typography
					variant="h4"
					color="blue-gray"
					className="mb-2"
					placeholder=""
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					Making a Difference Through Sustainable Food Distribution
				</Typography>
			</div>

			{/* Hero Image */}
			<Card
				className="mb-12 overflow-hidden"
				placeholder=""
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
			>
				<img
					src="/feed-the-needy.jpg"
					alt="Volunteers distributing food"
					className="w-full h-[400px] lg:h-[600px] object-contain"
				/>
			</Card>

			{/* Introduction Card */}
			<Card
				className="mb-12 bg-[#0D6E78]"
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
						variant="lead"
						className="text-gray-700"
						placeholder=""
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						As our company leads the way in sustainable energy, we&apos;re also
						committed to addressing another critical challenge in our community:
						food insecurity. Through our Feed the Needy initiative, we&apos;re
						leveraging our resources and expertise to create a sustainable food
						distribution system that helps those in need while reducing waste.
					</Typography>
				</CardBody>
			</Card>

			{/* Main Content Grid */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{/* Article Body - 2 columns */}
				<div className="lg:col-span-2 space-y-8">
					<section>
						<Card
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
									variant="h3"
									color="blue-gray"
									className="mb-4"
									placeholder=""
									onPointerEnterCapture={undefined}
									onPointerLeaveCapture={undefined}
								>
									The Challenge We&apos;re Addressing
								</Typography>
								<Typography
									className="mb-4"
									placeholder=""
									onPointerEnterCapture={undefined}
									onPointerLeaveCapture={undefined}
								>
									In our community, thousands of families struggle with food
									insecurity daily, while simultaneously, significant amounts of
									food go to waste. This paradox presents both a challenge and
									an opportunity for sustainable solutions.
								</Typography>
								<Typography
									placeholder=""
									onPointerEnterCapture={undefined}
									onPointerLeaveCapture={undefined}
								>
									Our experience in creating efficient, sustainable systems in
									the energy sector has given us unique insights into how we can
									address this critical issue. By applying our expertise in
									logistics and community engagement, we&apos;ve developed a
									comprehensive approach to food distribution that benefits both
									those in need and the environment.
								</Typography>
							</CardBody>
						</Card>
					</section>

					<section>
						<Typography
							variant="h3"
							color="blue-gray"
							className="mb-4"
							placeholder=""
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
						>
							Our Approach
						</Typography>
						<div className="space-y-4">
							{approachData.map((item, index) => (
								<Card
									key={index}
									className="border border-blue-gray-100"
									placeholder=""
									onPointerEnterCapture={undefined}
									onPointerLeaveCapture={undefined}
								>
									<CardBody
										placeholder=""
										onPointerEnterCapture={undefined}
										onPointerLeaveCapture={undefined}
									>
										<div className="flex items-center mb-2">
											<div className="mr-4 text-2xl">{item.icon}</div>
											<Typography
												variant="h4"
												color="blue-gray"
												placeholder=""
												onPointerEnterCapture={undefined}
												onPointerLeaveCapture={undefined}
											>
												{index + 1}. {item.title}
											</Typography>
										</div>
										<Typography
											placeholder=""
											onPointerEnterCapture={undefined}
											onPointerLeaveCapture={undefined}
										>
											{item.description}
										</Typography>
									</CardBody>
								</Card>
							))}
						</div>
					</section>
				</div>

				{/* Sidebar - 1 column */}
				<div className="space-y-6">
					{/* Impact Statistics Card */}
					<Card
						className="bg-white shadow-lg"
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
								variant="h4"
								color="blue-gray"
								className="mb-6"
								placeholder=""
								onPointerEnterCapture={undefined}
								onPointerLeaveCapture={undefined}
							>
								Our Impact
							</Typography>
							<div className="space-y-6">
								{statistics.map((stat, index) => (
									<div key={index} className="flex items-center">
										<div className="mr-4 text-2xl">{stat.icon}</div>
										<div>
											<Typography
												variant="h3"
												color="teal"
												placeholder=""
												onPointerEnterCapture={undefined}
												onPointerLeaveCapture={undefined}
											>
												{stat.value}
											</Typography>
											<Typography
												variant="paragraph"
												color="gray"
												placeholder=""
												onPointerEnterCapture={undefined}
												onPointerLeaveCapture={undefined}
											>
												{stat.label}
											</Typography>
										</div>
									</div>
								))}
							</div>
						</CardBody>
					</Card>

					{/* Get Involved Card */}
					<Card
						className="bg-[#0D6E78]"
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
								variant="h4"
								color="blue-gray"
								className="mb-6"
								placeholder=""
								onPointerEnterCapture={undefined}
								onPointerLeaveCapture={undefined}
							>
								Get Involved
							</Typography>
							<div className="flex flex-col space-y-4">
								<Button
									size="lg"
									color="teal"
									className="flex items-center justify-center"
									placeholder=""
									onPointerEnterCapture={undefined}
									onPointerLeaveCapture={undefined}
								>
									Donate Now
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										className="w-5 h-5 ml-2"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M17 8l4 4m0 0l-4 4m4-4H3"
										/>
									</svg>
								</Button>
								<Button
									variant="outlined"
									size="lg"
									color="teal"
									placeholder=""
									onPointerEnterCapture={undefined}
									onPointerLeaveCapture={undefined}
								>
									Volunteer
								</Button>
								<Button
									variant="text"
									size="lg"
									color="teal"
									placeholder=""
									onPointerEnterCapture={undefined}
									onPointerLeaveCapture={undefined}
								>
									Partner With Us
								</Button>
							</div>
						</CardBody>
					</Card>

					{/* Social Sharing */}
					<Card
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
								variant="h6"
								color="blue-gray"
								className="mb-4"
								placeholder=""
								onPointerEnterCapture={undefined}
								onPointerLeaveCapture={undefined}
							>
								Share Our Mission
							</Typography>
							<div className="flex justify-center space-x-2">
								{["Facebook", "Twitter", "LinkedIn"].map((platform) => (
									<Tooltip key={platform} content={`Share on ${platform}`}>
										<IconButton
											variant="outlined"
											color="teal"
											placeholder=""
											onPointerEnterCapture={undefined}
											onPointerLeaveCapture={undefined}
										>
											{platform[0]}
										</IconButton>
									</Tooltip>
								))}
							</div>
						</CardBody>
					</Card>
				</div>
			</div>
		</div>
	);
}
