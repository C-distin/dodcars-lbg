"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Globe,
  Users,
  Target,
  Lightbulb,
  Heart,
  Building2,
  ArrowRight,
  CheckCircle,
  MapPin,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface NewsItem {
  title: string;
  description: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const services: Service[] = [
  {
    id: "wst",
    title: "Whole System Transformation (WST) and Strategy Development",
    description:
      "Comprehensive organizational transformation and strategic planning for sustainable growth",
    icon: <Target className="h-8 w-8" />,
  },
  {
    id: "executive-education",
    title: "Executive Education for Leaders",
    description:
      "Executive Mastery in Organisational Development and Appreciative Leadership (EMODAL)",
    icon: <Users className="h-8 w-8" />,
  },
  {
    id: "resource-mobilization",
    title: "Resource Mobilization and Fundraising",
    description:
      "Strategic fundraising and resource mobilization for institutions and development projects",
    icon: <TrendingUp className="h-8 w-8" />,
  },
  {
    id: "facilitation",
    title: "Facilitation for Change",
    description:
      "Expert facilitation services to drive meaningful organizational and community transformation",
    icon: <Lightbulb className="h-8 w-8" />,
  },
  {
    id: "research-infrastructure",
    title: "Research and Infrastructure Development",
    description:
      "Comprehensive research services and infrastructure development with focus on commodities",
    icon: <Building2 className="h-8 w-8" />,
  },
];

const features: Feature[] = [
  {
    title: "Global Partnerships",
    description:
      "Representing development partners and investors from Turkey, USA, UK, and UAE",
    icon: <Globe className="h-6 w-6" />,
  },
  {
    title: "Expert Team",
    description:
      "Diverse experts in development, engineering, planning, energy, academia, and finance",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Human Rights Focus",
    description:
      "Committed to UN right to development ensuring inclusive participation and growth",
    icon: <Heart className="h-6 w-6" />,
  },
  {
    title: "Strategic Innovation",
    description:
      "Innovative financing models to mitigate risks and address unique regional needs",
    icon: <Target className="h-6 w-6" />,
  },
];

const newsItems: NewsItem[] = [
  {
    title: "CCOD Tertiary Institution Complex with ICT HUB",
    description:
      "New educational infrastructure development initiative launched",
  },
  {
    title: "Lola Group Invests $33 Million in SDD-UBIDS",
    description:
      "Major investment partnership for sustainable development projects",
  },
  {
    title:
      "MIHOSO Foundation and Lola Group Collaborate on Agroecological Initiatives",
    description:
      "Strategic partnership for agricultural sustainability and community development",
  },
];

const partnerCountries = [
  "Ghana",
  "Burkina Faso",
  "Sierra Leone",
  "Uganda",
  "Kenya",
  "Benin",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center space-y-8 max-w-5xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Badge
                variant="outline"
                className="mb-6 px-6 py-3 text-base font-medium bg-white/80 backdrop-blur-sm"
              >
                Organization Development Advisor
              </Badge>
              <h1 className="text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6">
                Welcome to <br />
                <span
                  className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #228b22, #32cd32)",
                  }}
                >
                  DODCARS
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              DODCARS specializes in facilitating sustainable development and
              transformation in communities, operating with a commitment to
              holistic development, social entrepreneurship, and expert
              infrastructure development services.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
              variants={fadeInUp}
            >
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-semibold"
                style={{ backgroundColor: "#228b22" }}
              >
                <Link href="/about" className="flex items-center gap-2">
                  Learn More About Us
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg font-semibold bg-white/80 backdrop-blur-sm border-green-600 text-green-700 hover:bg-green-50"
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Global Presence */}
      <motion.section
        className="py-20 bg-white/60 backdrop-blur-sm"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Global Presence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Operating across Africa with strategic partnerships worldwide
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            variants={staggerContainer}
          >
            {partnerCountries.map((country) => (
              <motion.div
                key={country}
                variants={fadeInUp}
                className="text-center"
              >
                <div
                  className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "rgba(34, 139, 34, 0.1)" }}
                >
                  <MapPin className="h-8 w-8" style={{ color: "#228b22" }} />
                </div>
                <h3 className="font-semibold text-slate-900">{country}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Key Features */}
      <motion.section
        className="py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Why Choose DODCARS
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our commitment to sustainable development and community
              transformation
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div
                      className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: "rgba(34, 139, 34, 0.1)" }}
                    >
                      <div style={{ color: "#228b22" }}>{feature.icon}</div>
                    </div>
                    <CardTitle className="text-xl font-semibold text-slate-900">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-20 text-white"
        style={{
          background: "linear-gradient(135deg, #1e293b 0%, #228b22 100%)",
        }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Services</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Comprehensive solutions for sustainable development and
              organizational transformation
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                        <div className="text-white">{service.icon}</div>
                      </div>
                      <CardTitle className="text-xl font-semibold flex-1">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/80 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg font-semibold bg-white text-slate-900 hover:bg-white/90"
            >
              <Link href="/services" className="flex items-center gap-2">
                View All Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Impact Statement */}
      <motion.section
        className="py-20 text-white"
        style={{ background: "linear-gradient(to right, #228b22, #32cd32)" }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8 leading-tight">
            WE AIM TO LEAVE A LASTING,
            <br />
            POSITIVE IMPACT ON THE
            <br />
            COMMUNITIES WE SERVE
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            DODCARS supports the African Union's realization of Africa's Agenda
            2063, which seeks an integrated, prosperous and peaceful Africa,
            driven by its citizens, representing a dynamic force in the
            international arena.
          </p>
        </div>
      </motion.section>

      {/* SDG Commitment */}
      <motion.section
        className="py-20 bg-white/60 backdrop-blur-sm"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInLeft} className="space-y-8">
              <h2 className="text-4xl font-bold text-slate-900">
                Sustainable Development Goals
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                We play a pivotal role in advancing Sustainable Development
                Goals (SDGs) by actively contributing to multiple dimensions of
                sustainable development, including poverty reduction, clean
                energy access, and infrastructure innovation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle
                    className="h-6 w-6"
                    style={{ color: "#228b22" }}
                  />
                  <span className="text-slate-700 font-medium">
                    SDG 1: No Poverty
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle
                    className="h-6 w-6"
                    style={{ color: "#228b22" }}
                  />
                  <span className="text-slate-700 font-medium">
                    SDG 7: Affordable and Clean Energy
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle
                    className="h-6 w-6"
                    style={{ color: "#228b22" }}
                  />
                  <span className="text-slate-700 font-medium">
                    SDG 9: Industry, Innovation, and Infrastructure
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle
                    className="h-6 w-6"
                    style={{ color: "#228b22" }}
                  />
                  <span className="text-slate-700 font-medium">
                    SDG 17: Partnerships for the Goals
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-8">
              <h3 className="text-3xl font-bold text-slate-900">
                Millennium Development Goals
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                DODCARS' initiatives reflect the principles of the Millennium
                Development Goals (MDGs), serving as a bridge between the past
                and the present global development agenda, ensuring continuity
                in our commitment to poverty eradication and environmental
                sustainability.
              </p>
              <Card
                className="bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-lg"
                style={{ backgroundColor: "rgba(34, 139, 34, 0.05)" }}
              >
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold text-slate-900 mb-4">
                    Our Commitment
                  </h4>
                  <p className="text-slate-700 leading-relaxed">
                    By integrating global best practices, promoting inclusivity,
                    and aligning with overarching frameworks, DODCARS aims to
                    leave a lasting, positive impact on the communities it
                    serves.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Latest News */}
      <motion.section
        className="py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Latest from DODCARS
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Stay updated with our recent developments and partnerships
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {newsItems.map((item) => (
              <motion.div key={item.title} variants={fadeInUp}>
                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-slate-900 group-hover:text-green-600 transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 leading-relaxed mb-4">
                      {item.description}
                    </CardDescription>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto font-semibold hover:text-green-700"
                      style={{ color: "#228b22" }}
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-20 text-white"
        style={{ background: "linear-gradient(to right, #1e293b, #228b22)" }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Communities Together?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Partner with DODCARS to drive sustainable development and create
            lasting positive impact in communities across Africa and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-semibold bg-white text-slate-900 hover:bg-white/90"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Get In Touch
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg font-semibold border-white text-white hover:bg-white/10"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
