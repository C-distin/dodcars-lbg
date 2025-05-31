"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Home,
  Search,
  ArrowLeft,
  Compass,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";

export default function NotFoundPage() {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleGoBack = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  const handleRefresh = () => {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  const handleSearch = (e?: React.MouseEvent | React.KeyboardEvent) => {
    e?.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to search page or homepage with query
      window.location.href = `/?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  const quickLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Compass },
    { name: "Services", href: "/services", icon: Search },
    { name: "Contact", href: "/contact", icon: AlertTriangle },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#228b22]/5 to-transparent rounded-full"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 50,
            repeat: 99,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-[#228b22]/5 to-transparent rounded-full"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 60,
            repeat: 99,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* 404 Number with Animation */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
          }}
        >
          <div className="relative">
            <motion.h1
              className="text-9xl md:text-[12rem] font-bold text-[#228b22] relative z-10"
              animate={{
                textShadow: [
                  "0 0 20px rgba(34, 139, 34, 0.3)",
                  "0 0 40px rgba(34, 139, 34, 0.5)",
                  "0 0 20px rgba(34, 139, 34, 0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: 99,
                ease: "easeInOut",
              }}
            >
              404
            </motion.h1>
            <motion.div
              className="absolute inset-0 text-9xl md:text-[12rem] font-bold text-[#228b22]/20"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: 99,
                ease: "easeInOut",
              }}
            >
              404
            </motion.div>
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The page you're looking for seems to have wandered off into the
            digital void. Don't worry though, we'll help you find your way back
            to familiar territory.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="max-w-md mx-auto">
            <div className="relative">
              <motion.input
                type="text"
                placeholder="Search for what you need..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch(e)}
                className="w-full px-6 py-4 pl-12 text-gray-700 bg-white border-2 border-gray-200 rounded-full focus:outline-none focus:border-[#228b22] focus:ring-4 focus:ring-[#228b22]/20 transition-all duration-300 shadow-lg"
                whileFocus={{ scale: 1.02 }}
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <motion.button
                onClick={handleSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#228b22] text-white px-6 py-2 rounded-full hover:bg-[#1e7a1e] transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Search
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <motion.button
            onClick={handleGoBack}
            className="flex items-center space-x-2 bg-[#228b22] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1e7a1e] transition-colors duration-200 shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(34, 139, 34, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Go Back</span>
          </motion.button>

          <motion.a
            href="/"
            className="flex items-center space-x-2 bg-white text-[#228b22] px-8 py-3 rounded-full font-medium border-2 border-[#228b22] hover:bg-[#228b22] hover:text-white transition-all duration-200 shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(34, 139, 34, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Home className="h-5 w-5" />
            <span>Home Page</span>
          </motion.a>

          <motion.button
            onClick={handleRefresh}
            className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors duration-200 shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <RefreshCw className="h-5 w-5" />
            <span>Refresh</span>
          </motion.button>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="border-t border-gray-200 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Or try these popular pages:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {quickLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="flex flex-col items-center space-y-2 p-4 bg-white rounded-xl hover:bg-[#228b22] hover:text-white transition-colors duration-200 shadow-md group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="h-6 w-6 text-[#228b22] group-hover:text-white transition-colors duration-200" />
                <span className="text-sm font-medium">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Help Text */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <p className="text-gray-500 text-sm">
            Still having trouble?
            <Link
              href="/contact"
              className="text-[#228b22] hover:underline font-medium ml-1"
            >
              Contact our support team
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
