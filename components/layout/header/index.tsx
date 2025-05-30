"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const NavItems = [
		{
			title: "Home",
			link: "/",
		},
		{
			title: "About",
			link: "/about",
		},
		{
			title: "Services",
			link: "/services",
		},
		{
			title: "Projects",
			link: "/projects",
		},
		{
			title: "Contact",
			link: "/contact",
		},
	];

	return (
		<header
			className={`fixed top-0 left-0 z-50 right-0 transition-all duration-300 ${
				isScrolled
					? "bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg"
					: "bg-transparent"
			}`}
		>
			<div className="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8">
				<div className="container flex items-center justify-between">
					Header
				</div>
			</div>
		</header>
	);
}
