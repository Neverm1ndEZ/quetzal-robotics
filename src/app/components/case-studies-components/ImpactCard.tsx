export function ImpactCard({ impact }: { impact: ImpactCard }) {
	return (
		<div className="bg-white rounded-lg shadow-md p-6">
			<h3 className="text-xl font-bold text-gray-900 mb-2">
				{impact.headline}
			</h3>
			<p className="text-gray-600">{impact.description}</p>
		</div>
	);
}
