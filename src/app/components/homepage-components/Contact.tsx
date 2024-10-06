"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Toast from "@/app/utils/Toast"; // Assuming you have a Toast component

const Contact: React.FC = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [toast, setToast] = useState<{
		message: string;
		type: "success" | "error";
	} | null>(null);

	const sendMail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
				process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
				e.target as HTMLFormElement,
				process.env.NEXT_PUBLIC_EMAIL_USER_ID as string,
			)
			.then(
				() => {
					setToast({
						message: "Your message has been sent successfully!",
						type: "success",
					});
					(e.target as HTMLFormElement).reset();
				},
				() => {
					setToast({
						message:
							"An error occurred while sending your message. Please try again.",
						type: "error",
					});
				},
			)
			.finally(() => {
				setIsSubmitting(false);
			});
	};

	return (
		<main
			className="bg-[#f0f5f1] flex flex-col justify-center items-center p-8 md:p-16"
			id="contact"
		>
			{toast && (
				<Toast
					message={toast.message}
					type={toast.type}
					onClose={() => setToast(null)}
				/>
			)}
			<section className="bg-white p-10 md:p-14 rounded-xl shadow-lg max-w-3xl w-full space-y-6">
				{/* Subheading */}
				<h1 className="text-3xl font-bold text-red-600 text-center">
					Get in Touch
				</h1>

				{/* Form */}
				<form onSubmit={sendMail} className="space-y-6">
					{/* Name */}
					<div className="flex flex-col md:flex-row gap-6">
						<input
							type="text"
							id="firstName"
							name="firstName"
							placeholder="First Name"
							className="w-full bg-[#f5f5f5] p-4 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:outline-none"
							required
						/>
						<input
							type="text"
							id="lastName"
							name="lastName"
							placeholder="Last Name"
							className="w-full bg-[#f5f5f5] p-4 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:outline-none"
							required
						/>
					</div>

					{/* Company Email */}
					<input
						type="email"
						id="companyEmail"
						name="companyEmail"
						placeholder="Company Email"
						className="w-full bg-[#f5f5f5] p-4 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:outline-none"
						required
					/>

					{/* Message */}
					<textarea
						id="message"
						name="message"
						placeholder="Your Message"
						rows={5}
						className="w-full bg-[#f5f5f5] p-4 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:outline-none resize-none"
						required
					></textarea>

					{/* Submit Button */}
					<button
						type="submit"
						className={`w-full py-3 text-lg font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors duration-300 ${
							isSubmitting ? "opacity-50 cursor-not-allowed" : ""
						}`}
						disabled={isSubmitting}
					>
						{isSubmitting ? "Submitting..." : "Send Message"}
					</button>
				</form>
			</section>
		</main>
	);
};

export default Contact;
