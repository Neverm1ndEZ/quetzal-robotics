import { FocusedInitiatives } from "./FocusedInitiatives";
import HeroAbout from "./HeroAbout";
import OurPurpose from "./OurPurpose";
import { OurValues } from "./OurValues";

export default function About() {
	return (
		<div className="">
			<HeroAbout />
			<OurPurpose />
			<OurValues />
			<FocusedInitiatives />
		</div>
	);
}
