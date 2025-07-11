import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  ArrowUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const SocialLinks = [
    {
      icon: Facebook,
      link: "",
      text: "Facebook",
    },
    {
      icon: Twitter,
      link: "",
      text: "Twitter",
    },
    {
      icon: Instagram,
      link: "",
      text: "Instagram",
    },
  ];

  const ContactLinks = [
    {
      icon: Mail,
      text: "info@dodcarslbg.org",
      link: "mailto:info@dodcarslbg.org",
    },
    {
      icon: Phone,
      text: "233 20 850 0875",
      link: "tel:233208500875",
    },
    {
      icon: MapPin,
      text: "Joekona Plaza, Berekum",
      link: "https://maps.app.goo.gl/HNwBxj4Vwpwwh79g8",
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#228b22]/20 to-transparent" />
      </div>
      <div className="relative">
        <div className="max-w-screen2xl mx-auto px-4 md:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="flex items-center">
                  <Image
                    src="/images/logo.png"
                    alt="DodCars Logo"
                    width={40}
                    height={40}
                  />
                  <h2 className="text-2xl font-bold mb-4">
                    <span className="text-[#228b22]">DodCars</span> LBG
                  </h2>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Achieving Sustainable Development Goal 9: Resilent
                  Infrastructure and Sustainable Industrialization Community
                  Transformation
                </p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="mb-6 space-y-6">
                {ContactLinks.map((link) => (
                  <Link
                    key={link.text}
                    href={link.link}
                    className="flex space-x-4 text-gray-300 hover:text-[#228b22] transition-colors duration-300 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                    <span>{link.text}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="mb-6 flex items-center space-x-4">
                {SocialLinks.map((link) => (
                  <Link
                    key={link.text}
                    href={link.link}
                    className="text-gray-300 hover:text-[#228b22] transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700/20 pt-8">
          <div className="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="container flex items-center justify-between mb-6">
              &copy; {new Date().getFullYear()} DodCars LBG. All rights
              reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
