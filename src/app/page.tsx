import Contact from "./components/homepage-components/Contact";
import Hero from "./components/homepage-components/Hero";
import NumbersSpeak from "./components/homepage-components/NumbersSpeak";
import ServicesPage from "./components/homepage-components/ServicesPage";
import ClientShowcase from "./components/homepage-components/Testimonials";

export default function Home() {
	return (
		<main className="w-full sm:px-6 lg:px-0">
			<Hero />
			<div className="max-w-7xl mx-auto lg:px-8">
				<NumbersSpeak />
				<ServicesPage />
				<ClientShowcase />
				<Contact />
			</div>
		</main>
	);
}
