"use client";

import {
	Bars3Icon,
	ChevronDownIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { SunIcon } from "@heroicons/react/24/solid";
import {
	Collapse,
	IconButton,
	List,
	ListItem,
	Menu,
	MenuHandler,
	MenuItem,
	MenuList,
	Navbar,
	Typography,
} from "@material-tailwind/react";
import { Fuel, Wheat, Wind } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { memo, useEffect, useState } from "react";

const navListMenuItems = [
	{
		title: "Ethanol",
		description:
			"Sustainable biofuels reducing emissions and fossil fuel dependence.",
		icon: Wheat,
		href: "ethanol",
	},
	{
		title: "Solar",
		description: "How we convert Solar Power into Energy",
		icon: SunIcon,
		href: "solar",
	},
	{
		title: "Wind",
		description: "Clean wind power for a sustainable future.",
		icon: Wind,
		href: "wind",
	},
	{
		title: "Hydrogen",
		description: "Innovative hydrogen solutions for energy security.",
		icon: Fuel,
		href: "hydrogen",
	},
];

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
						color="red"
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

const NavListMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const renderItems = navListMenuItems.map((item, index) => (
		<NavListMenuItem key={index} {...item} />
	));

	const handleClick = () => {
		setIsMobileMenuOpen((prev) => !prev);
	};

	const handleItemClick = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<>
			<Menu
				open={isMenuOpen}
				handler={setIsMenuOpen}
				offset={{ mainAxis: 20 }}
				placement="bottom"
				allowHover={true}
			>
				<MenuHandler>
					<Typography
						as="div"
						variant="small"
						className="font-medium"
						placeholder={undefined}
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						<ListItem
							className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
							selected={isMenuOpen || isMobileMenuOpen}
							onClick={handleClick}
							placeholder={undefined}
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
						>
							Case Study
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`h-3 w-3 transition-transform duration-150 ease-in-out ${
									isMenuOpen || isMobileMenuOpen ? "rotate-180" : ""
								}`}
							/>
						</ListItem>
					</Typography>
				</MenuHandler>
				<MenuList
					className="hidden max-w-screen-xl rounded-xl lg:block"
					placeholder={undefined}
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					<ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
						{renderItems}
					</ul>
				</MenuList>
			</Menu>
			<div className="block lg:hidden">
				<Collapse open={isMobileMenuOpen}>
					{React.Children.map(renderItems, (child) =>
						React.cloneElement(child, { onClick: handleItemClick }),
					)}
				</Collapse>
			</div>
		</>
	);
};

const NavList = memo(() => {
	const navItems = [
		{ label: "Home", href: "/" },
		{ label: "Services", href: "/services" },
		{ label: "About Us", href: "/about" },
		{ label: "Sustainability", href: "/sustainability" },
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
			<NavListMenu />
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
							<Image src="/logo.png" alt="logo-ct" width={80} height={50} />
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
