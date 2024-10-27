import React from "react";

interface StatProps {
	value: string;
	label: string;
}

const Stat: React.FC<StatProps> = ({ value, label }) => (
	<div className="flex flex-col items-center">
		<h2 className="text-4xl lg:text-5xl font-light text-[#0D6E78]">{value}</h2>
		<p className="text-sm text-center mt-2">{label}</p>
	</div>
);

const NumbersSpeak: React.FC = () => {
	return (
		<div className="w-full max-w-4xl mx-auto px-4 py-12">
			<h1 className="text-3xl font-bold text-center mb-8">Numbers Speak</h1>
			<div className="w-16 h-1 bg-[#0D6E78] mx-auto mb-12"></div>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
				<Stat value="30+" label="Projects completed" />
				<Stat value="13" label="Countries served" />
				<Stat value="150+" label="Locations" />
				<Stat value="21" label="Clients" />
			</div>
		</div>
	);
};

export default NumbersSpeak;
