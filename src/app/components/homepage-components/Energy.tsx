"use client";
import React from "react";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

interface StatProps {
	value: string;
	label: string;
}

const Stat: React.FC<StatProps> = ({ value, label }) => (
	<div className="group cursor-pointer">
		<h1 className="text-3xl lg:text-4xl font-light w-full transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:text-[#0D6E78]">
			{value}
		</h1>
		<p className="font-light uppercase text-xs pt-2 transition-colors duration-300 group-hover:text-[#0D6E78]">
			{label}
		</p>
	</div>
);

const Energy: React.FC = () => {
	return (
		<div className="mt-16 px-4 lg:px-0">
			<div className="flex justify-start mb-6">
				<h1 className="text-xl uppercase font-bold text-[#0D6E78] border-b-2 border-[#0D6E78] pb-2">
					Energy
				</h1>
			</div>
			<div className="rounded-xl overflow-hidden bg-gradient-to-br from-[#0D6E78] via-[#0D6E78] to-white">
				<div className="flex flex-col lg:flex-row justify-between items-start py-12 px-8 gap-y-10">
					<div className="flex flex-col items-start w-full lg:w-1/2 space-y-6">
						<h2 className="text-4xl lg:text-5xl font-bold text-[#0D6E78] leading-tight">
							Clean Energy for a <br />
							Sustainable Future
						</h2>
						<p className="text-base lg:text-lg max-w-md text-[#0D6E78]">
							Powering the future with clean, renewable energy. Join us for a
							brighter, sustainable tomorrow.
						</p>
					</div>
					<div className="flex flex-col items-start w-full lg:w-1/2 space-y-10">
						<div className="grid grid-cols-2 gap-x-16 gap-y-10 w-full">
							<Stat value="900 KLPD" label="Bio-Ethanol Portfolio by 2030" />
							<Stat value="50TPD" label="red Hydrogen by 2030" />
							<Stat value="0%" label="Zero Discharge Technology Adopted" />
							<Stat value="120 MW" label="Hybrid-Wind Solar Planned for 2027" />
						</div>
						<Link href={`#contact`}>
							<button className="group relative overflow-hidden rounded-full bg-[#0D6E78] px-8 py-4 transition-all duration-300 hover:bg-[#0D6E78]">
								<span className="relative z-10 flex items-center justify-center text-white transition-all duration-300 group-hover:text-[#0D6E78]">
									Get in Touch
									<MoveUpRight className="ml-2 h-5 w-5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
								</span>
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Energy;
