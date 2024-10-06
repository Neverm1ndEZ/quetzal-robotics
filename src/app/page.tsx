import Contact from "./components/homepage-components/Contact";
import Energy from "./components/homepage-components/Energy";
import Hero from "./components/homepage-components/Hero";
import LongCard from "./components/homepage-components/LongCard";
import { Testimonials } from "./components/homepage-components/Testimonials";

export default function Home() {
	return (
		<main className="w-full sm:px-6 lg:px-0">
			<Hero />
			<div className="max-w-7xl mx-auto lg:px-8">
				<Energy />
				<LongCard />
				{/* <Leadership /> */}
				<Testimonials />
				<Contact />
			</div>
		</main>
	);
}
