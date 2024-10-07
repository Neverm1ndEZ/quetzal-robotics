"use client";
import {
	Tab,
	TabPanel,
	Tabs,
	TabsBody,
	TabsHeader,
} from "@material-tailwind/react";
import About from "../components/about-components/About";

export default function page() {
	const data = [
		{
			label: "Who We Are",
			value: "who-we-are",
			desc: <About />,
		},
	];

	return (
		<div className="p-4">
			<Tabs value="who-we-are">
				<TabsHeader
					className="flex justify-center items-center bg-gray-200 p-2 w-full md:w-1/2 lg:w-1/4 mx-auto my-5"
					indicatorProps={{
						className: `bg-[#0D6E78] rounded-md shadow`,
					}}
					placeholder=""
					onPointerEnterCapture=""
					onPointerLeaveCapture=""
				>
					{data.map(({ label, value }) => (
						<Tab
							key={value}
							value={value}
							className=""
							placeholder=""
							onPointerEnterCapture=""
							onPointerLeaveCapture=""
						>
							{label}
						</Tab>
					))}
				</TabsHeader>
				<TabsBody
					animate={{
						initial: { y: 250 },
						mount: { y: 0 },
						unmount: { y: 250 },
					}}
					placeholder=""
					onPointerEnterCapture=""
					onPointerLeaveCapture=""
				>
					{data.map(({ value, desc }) => (
						<TabPanel key={value} value={value} className="p-0">
							{desc}
						</TabPanel>
					))}
				</TabsBody>
			</Tabs>
		</div>
	);
}
