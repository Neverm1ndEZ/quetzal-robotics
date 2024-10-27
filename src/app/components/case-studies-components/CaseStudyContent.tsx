import { ImpactCard } from "./ImpactCard";
import Image from "next/image";

export function CaseStudyContent({ study }: { study: CaseStudy }) {
	return (
		<article className="max-w-5xl mx-auto">
			{/* Header */}
			<div className="mb-12">
				<h1 className="text-4xl font-bold mb-4">{study.title}</h1>
				<p className="text-xl text-gray-600">Client: {study.client}</p>
			</div>

			{/* Background Section */}
			<section className="mb-12">
				<h2 className="text-2xl font-bold mb-4">Background</h2>
				<p className="text-gray-700">{study.background}</p>
			</section>

			{/* Problem Section */}
			<section className="mb-12">
				<h2 className="text-2xl font-bold mb-4">Problem</h2>
				<p className="text-gray-700">{study.problem}</p>
			</section>

			{/* Solution Section */}
			<section className="mb-12">
				<h2 className="text-2xl font-bold mb-4">Solution</h2>
				<div className="relative w-full h-[400px] mb-8">
					<Image
						src={study.solution.image1}
						alt="Solution visualization 1"
						fill
						className="object-cover rounded-lg"
					/>
				</div>
				<p className="text-gray-700 my-8">{study.solution.text}</p>
				<div className="relative w-full h-[400px] mt-8">
					<Image
						src={study.solution.image2}
						alt="Solution visualization 2"
						fill
						className="object-cover rounded-lg"
					/>
				</div>
			</section>

			{/* Impact Section */}
			<section className="mb-12">
				<h2 className="text-2xl font-bold mb-6">Impact</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{study.impact.map((impact, index) => (
						<ImpactCard key={index} impact={impact} />
					))}
				</div>
			</section>
		</article>
	);
}
