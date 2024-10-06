"use client";
import {
	Tab,
	TabPanel,
	Tabs,
	TabsBody,
	TabsHeader,
} from "@material-tailwind/react";
import FeedTheNeedy from "../components/sustainabilty-components/FeedTheNeedy";
import Perfume from "../components/sustainabilty-components/Perfume";

export default function page() {
	const data = [
		{
			label: "Feed the Needy",
			value: "feed-the-needy",
			desc: <FeedTheNeedy />,
		},
		{
			label: "Net Zero - Perfume",
			value: "net-zero-perfume",
			desc: <Perfume />,
		},
	];

	return (
		<div className="p-4">
			<Tabs value="feed-the-needy">
				<TabsHeader
					placeholder=""
					onPointerEnterCapture=""
					onPointerLeaveCapture=""
					className="flex justify-center items-center bg-gray-200 p-2 w-full md:w-1/2 lg:w-1/3 mx-auto my-5"
					indicatorProps={{
						className: `bg-red-100 rounded-md shadow`,
					}}
				>
					{data.map(({ label, value }) => (
						<Tab
							key={value}
							value={value}
							className="text-black"
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
