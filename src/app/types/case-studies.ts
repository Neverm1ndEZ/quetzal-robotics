interface ImpactCard {
	headline: string;
	description: string;
}

interface CaseStudy {
	id: string;
	title: string;
	client: string;
	thumbnail: string;
	background: string;
	problem: string;
	solution: {
		text: string;
		image1: string;
		image2: string;
	};
	impact: ImpactCard[];
	readTime: string;
}
