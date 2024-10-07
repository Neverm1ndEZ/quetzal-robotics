import { ArrowRightIcon } from "@heroicons/react/24/outline";
import {
	Button,
	Dialog,
	DialogBody,
	DialogHeader,
	Typography,
} from "@material-tailwind/react";
import React from "react";

interface ModalProps {
	buttonText: string;
	heading?: string;
	message?: string | string[];
}

export function Modal({ buttonText, heading, message }: ModalProps) {
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => setOpen(!open);

	const defaultHeading = "Default Heading";
	const defaultMessage = [
		"This is a default message for the modal. You can replace it with your own content.",
	];

	const renderMessage = () => {
		const messageContent = message || defaultMessage;
		if (typeof messageContent === "string") {
			return (
				<Typography
					className="font-normal"
					placeholder=""
					onPointerEnterCapture=""
					onPointerLeaveCapture=""
				>
					{messageContent}
				</Typography>
			);
		} else {
			return messageContent.map((paragraph, index) => (
				<Typography
					key={index}
					className="font-normal mb-4"
					placeholder=""
					onPointerEnterCapture=""
					onPointerLeaveCapture=""
				>
					{paragraph}
				</Typography>
			));
		}
	};

	return (
		<>
			<Button
				onClick={handleOpen}
				color="teal"
				variant="text"
				className="p-0 hover:p-4 flex items-center gap-2"
				placeholder=""
				onPointerEnterCapture=""
				onPointerLeaveCapture=""
			>
				{buttonText} <ArrowRightIcon strokeWidth={2} className="w-3 h-3" />
			</Button>
			<Dialog
				open={open}
				handler={handleOpen}
				placeholder=""
				onPointerEnterCapture=""
				onPointerLeaveCapture=""
			>
				<div className="flex items-center justify-between">
					<DialogHeader
						className="flex flex-col items-start"
						placeholder=""
						onPointerEnterCapture=""
						onPointerLeaveCapture=""
					>
						<Typography
							className="mb-1"
							variant="h4"
							placeholder=""
							onPointerEnterCapture=""
							onPointerLeaveCapture=""
						>
							{heading || defaultHeading}
						</Typography>
					</DialogHeader>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="mr-3 h-5 w-5 cursor-pointer"
						onClick={handleOpen}
					>
						<path
							fillRule="evenodd"
							d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
				<DialogBody
					className="h-[42rem] overflow-scroll"
					placeholder=""
					onPointerEnterCapture=""
					onPointerLeaveCapture=""
				>
					{renderMessage()}
				</DialogBody>
			</Dialog>
		</>
	);
}
