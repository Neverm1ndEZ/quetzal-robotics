"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
	Collapse,
	IconButton,
	List,
	ListItem,
	MenuItem,
	Navbar,
	Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { memo, useEffect, useState } from "react";

const NavListMenuItem = memo(
	({
		icon: Icon,
		title,
		description,
		href,
	}: {
		icon: React.ElementType;
		title: string;
		description: string;
		href: string;
	}) => (
		<a href={`/case-studies/${href}`}>
			<MenuItem
				className="flex items-center gap-3 rounded-lg"
				placeholder={undefined}
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
			>
				<div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2">
					<Icon strokeWidth={2} className="h-6 w-6 text-gray-900" />
				</div>
				<div>
					<Typography
						variant="h6"
						color="teal"
						className="flex items-center text-sm font-bold"
						placeholder={undefined}
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						{title}
					</Typography>
					<Typography
						variant="paragraph"
						className="text-xs !font-medium text-blue-gray-500"
						placeholder={undefined}
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						{description}
					</Typography>
				</div>
			</MenuItem>
		</a>
	),
);

NavListMenuItem.displayName = "NavListMenuItem";

const NavList = memo(() => {
	const navItems = [
		{ label: "Home", href: "/" },
		{ label: "Services", href: "/services" },
		{ label: "Case Studies", href: "/case-studies" },
		{ label: "About Us", href: "/about" },
		{ label: "Careers", href: "/careers" },
	];

	return (
		<List
			className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1"
			placeholder={undefined}
			onPointerEnterCapture={undefined}
			onPointerLeaveCapture={undefined}
		>
			{navItems.slice(0, 2).map((item, index) => (
				<Typography
					key={index}
					as="a"
					href={item.href}
					variant="small"
					color="blue-gray"
					className="font-medium"
					placeholder={undefined}
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					<ListItem
						className="flex items-center gap-2 py-2 pr-4"
						placeholder={undefined}
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						{item.label}
					</ListItem>
				</Typography>
			))}
			{navItems.slice(2).map((item, index) => (
				<Typography
					key={index}
					as="a"
					href={item.href}
					variant="small"
					color="blue-gray"
					className="font-medium"
					placeholder={undefined}
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					<ListItem
						className="flex items-center gap-2 py-2 pr-4"
						placeholder={undefined}
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						{item.label}
					</ListItem>
				</Typography>
			))}
		</List>
	);
});

NavList.displayName = "NavList";

NavList.displayName = "NavList";

export function NavbarFinal() {
	const [openNav, setOpenNav] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	// New useEffect to close navbar on route change
	useEffect(() => {
		setOpenNav(false);
	}, [pathname]);

	return (
		<Navbar
			className="sticky top-0 z-50 w-full max-w-none rounded-none px-0 py-2"
			placeholder={undefined}
			onPointerEnterCapture={undefined}
			onPointerLeaveCapture={undefined}
		>
			<div className="mx-auto max-w-[1320px] px-4">
				<div className="flex items-center justify-between text-blue-gray-900">
					<Link href={"/"}>
						<div className="flex items-center">
							<Image src="/logo.png" alt="logo-ct" width={100} height={70} />
						</div>
					</Link>
					<div className="hidden lg:block">
						<NavList />
					</div>
					<IconButton
						variant="text"
						color="blue-gray"
						className="lg:hidden"
						onClick={() => setOpenNav(!openNav)}
						placeholder={undefined}
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						{openNav ? (
							<XMarkIcon className="h-6 w-6" strokeWidth={2} />
						) : (
							<Bars3Icon className="h-6 w-6" strokeWidth={2} />
						)}
					</IconButton>
				</div>
				<Collapse open={openNav}>
					<NavList />
				</Collapse>
			</div>
		</Navbar>
	);
}
