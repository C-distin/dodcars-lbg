"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
          {/* Logo */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            whileHover={{ scale: 1.04 }}
          >
            <Link href="/" className="flex items-center space-x-4">
              <Image
                src="/images/logo.png"
                alt="DodCars Logo"
                width={80}
                height={80}
              />
              <span className="text-[#228b22] text-2xl font-bold">
                DodCars LBG
              </span>
            </Link>
          </motion.div>
          {/* Desktop Menu */}
          <motion.nav
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            className="hidden items-center space-x-4 md:flex justify-between"
          >
            <div className="space-x-4">
              {NavItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.link}
                  className="text-[#228b22] text-lg font-bold"
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <Link
              href="/donate"
              className="rounded-lg bg-[#228b22] px-4 py-2 text-white font-semibold hover:bg-[#1e7b1e/50]"
            >
              Donate
            </Link>
          </motion.nav>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              className="text-[#228b22] p-2 rounded-lg hover:bg-[#228b22]/10 focus:outline-none font-bold text-2xl"
              aria-label="Menu"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.5,
              ease: "circInOut",
              staggerChildren: 0.2,
              delayChildren: 0.1,
            }}
            className="bg-[#228b22]/30 backdrop-blur-md overflow-hidden border-b"
          >
            <div className="mx-auto container px-4 py-4 space-y-4">
              <nav className="flex flex-col space-y-4 items-center">
                {NavItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.link}
                    className="text-gray-500 text-lg font-bold py-2"
                    onClick={toggleMenu}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col items-center">
                <Link
                  className="bg-[#228b22] px-4 py-2 rounded-lg text-white font-semibold"
                  href="/donate"
                >
                  Donate
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
