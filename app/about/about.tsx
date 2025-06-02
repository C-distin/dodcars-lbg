"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Globe, Users, Target, Lightbulb, Heart, Building2 } from "lucide-react";

interface TeamMember {
  name: string;
  position: string;
  experience: string;
  image?: string;
}

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface SDGGoal {
  number: number;
  title: string;
  description: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const services: Service[] = [
  {
    title: "Whole System Transformation (WST) and Strategy Development",
    description: "Comprehensive organizational transformation and strategic planning services",
    icon: <Target className="h-6 w-6" />
  },
  {
    title: "Executive Education for Leaders",
    description: "Executive Mastery in Organisational Development and Appreciative Leadership (EMODAL)",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Resource Mobilization and Fundraising",
    description: "Strategic fundraising and resource mobilization for institutions",
    icon: <Building2 className="h-6 w-6" />
  },
  {
    title: "Facilitation for Change",
    description: "Expert facilitation services to drive organizational and community change",
    icon: <Lightbulb className="h-6 w-6" />
  },
  {
    title: "Research and Infrastructure Development",
    description: "Comprehensive research services and infrastructure development with commodities focus",
    icon: <Globe className="h-6 w-6" />
  }
];

const sdgGoals: SDGGoal[] = [
  { number: 1, title: "No Poverty", description: "Facilitating sustainable development and social entrepreneurship" },
  { number: 7, title: "Affordable and Clean Energy", description: "Strategic energy infrastructure development" },
  { number: 8, title: "Decent Work and Economic Growth", description: "Promoting inclusive economic growth" },
  { number: 9, title: "Industry, Innovation, and Infrastructure", description: "Infrastructure development and innovation" },
  { number: 11, title: "Sustainable Cities and Communities", description: "Community transformation through infrastructure" },
  { number: 17, title: "Partnerships for the Goals", description: "Enhancing cooperative partnerships globally" }
];

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Gabriel Gbiel Benarkuu",
    position: "President – CCOD/DODCARS",
    experience: "29 years in community and organization development, resource mobilization and strategic planning"
  },
  {
    name: "Hon. Justice Samuel Adjei",
    position: "Director – CCOD/DODCARS",
    experience: "OD Consultant, 15 years in development management"
  },
  {
    name: "Mr. John Ayisi Jatango",
    position: "Director, Partnerships & Exchange Programme",
    experience: "32 years in agricultural extension, Administration and Human Resources management"
  },
  {
    name: "Mr. Daniel Tigbee",
    position: "Director of Human Resource",
    experience: "18 years in finance and administration. Human development and international relations"
  },
  {
    name: "Rev. Sr. Agatha Ifenkwe",
    position: "Dean (Students)",
    experience: "Experienced Organisational Development (OD) Consultant with academic and professional background"
  },
  {
    name: "Mr. Bin Yahaya",
    position: "Operations and Protocols",
    experience: "Over six years optimizing organizational workflows and operational execution"
  },
  {
    name: "Mr. Randy Amponsah",
    position: "IT Manager",
    experience: "Over 12 years in programming and leading technology initiatives"
  },
  {
    name: "Mr. Dennis Sa-uri",
    position: "Research Officer",
    experience: "Over 3 years in OD training, strategic planning, and action research"
  },
  {
    name: "Miss Mariam Langtar",
    position: "Project Officer (Geotechnical Engineer)",
    experience: "BSc Earth Science, Geological Engineering with 2 years of experience"
  },
  {
    name: "Mr. Eric Annor",
    position: "Director, Investment and Innovation",
    experience: "Leading strategic initiatives for growth, innovation, and investment attraction"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <div className="container mx-auto px-4 py-16 space-y-24">
        {/* Hero Section */}
        <motion.section 
          className="text-center space-y-8"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium">
              International Development Organization
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              About <span style={{ color: "#228b22" }}>DODCARS</span>
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            DODCARS is an international organization development advisor and a key outreach arm of CCOD, 
            specializing in facilitating sustainable development and transformation in communities across Africa and beyond.
          </motion.p>
        </motion.section>

        {/* Mission Statement */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold text-slate-900 mb-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
                      <Globe className="h-5 w-5" style={{ color: "#228b22" }} />
                      Global Presence
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      With headquarters in Ghana and offices in Burkina Faso, Sierra Leone, Uganda, Kenya, and Benin, 
                      we operate across Africa while representing development partners from Turkey, USA, UK, and UAE.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
                      <Heart className="h-5 w-5" style={{ color: "#228b22" }} />
                      Human Rights Focus
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      We align our interventions with the UN right to development, ensuring everyone can participate in 
                      and enjoy economic, social, cultural and political development with full human rights realization.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive solutions for sustainable development and organizational transformation
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(34, 139, 34, 0.1)" }}>
                      <div style={{ color: "#228b22" }}>
                        {service.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg font-semibold text-slate-900">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* SDG Alignment */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Sustainable Development Goals Alignment
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our commitment to advancing multiple UN Sustainable Development Goals
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
          >
            {sdgGoals.map((goal, index) => (
              <motion.div key={goal.number} variants={fadeInUp}>
                <Card className="h-full bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 text-white rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: "#228b22" }}>
                        {goal.number}
                      </div>
                      <CardTitle className="text-lg font-semibold text-slate-900">
                        {goal.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-700">
                      {goal.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Diverse experts spanning organizational development, engineering, finance, and strategic planning
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-semibold text-slate-900 leading-tight">
                      {member.name}
                    </CardTitle>
                    <Badge variant="secondary" className="w-fit">
                      {member.position}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 leading-relaxed">
                      {member.experience}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Closing Statement */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center"
        >
          <Card className="text-white border-0 shadow-2xl" style={{ background: "linear-gradient(to right, #228b22, #32cd32)" }}>
            <CardContent className="py-16 px-8">
              <h2 className="text-3xl font-bold mb-6">
                Driving Sustainable Change Worldwide
              </h2>
              <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed mb-8">
                DODCARS has proven its dynamic force in international development, driving sustainable change 
                through infrastructure development, commodities, and expert consultancy services. Our commitment 
                to holistic development and global partnerships positions us as a catalyst for positive 
                transformation in communities worldwide.
              </p>
              <Separator className="bg-white/20 my-8 max-w-xs mx-auto" />
              <p className="text-lg opacity-80 max-w-2xl mx-auto">
                Together, we build bridges between communities, fostering sustainable development that 
                respects human rights and environmental sustainability.
              </p>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}