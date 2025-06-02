"use client";

import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Target, 
  Users, 
  Building2, 
  Lightbulb, 
  Globe, 
  TrendingUp,
  Award,
  MapPin,
  Clock,
  Star,
  ArrowRight,
  CheckCircle
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

interface Stat {
  number: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

// Animated Counter Component
function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100
  });
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
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
    description: "We guide organizations through Whole System Transformation (WST) to drive sustainable growth and strategic development across all levels.",
    icon: <Target className="h-8 w-8" />,
    features: [
      "Comprehensive organizational assessment",
      "Strategic planning and implementation",
      "Change management processes",
      "Performance measurement systems"
    ]
  },
  {
    title: "Executive Education for Leaders",
    description: "Our executive education programs are designed to empower leaders with the skills and knowledge needed to navigate complex challenges and drive impactful change.",
    icon: <Users className="h-8 w-8" />,
    features: [
      "Leadership development programs",
      "Strategic thinking workshops",
      "Decision-making frameworks",
      "Executive coaching services"
    ]
  },
  {
    title: "Resource Mobilization and Fundraising",
    description: "We support institutions in mobilizing resources and securing funding to strengthen their capacity and achieve long-term goals.",
    icon: <Building2 className="h-8 w-8" />,
    features: [
      "Grant writing and proposal development",
      "Donor relationship management",
      "Fundraising strategy development",
      "Partnership facilitation"
    ]
  },
  {
    title: "Facilitation for Change",
    description: "Our facilitation services help organizations manage and implement change effectively, ensuring smooth transitions and lasting results.",
    icon: <Lightbulb className="h-8 w-8" />,
    features: [
      "Change management consulting",
      "Stakeholder engagement processes",
      "Workshop facilitation",
      "Conflict resolution services"
    ]
  },
  {
    title: "Research and Infrastructure Development",
    description: "We offer expertise in research and infrastructure development, along with strategic guidance in managing and optimizing commodities for growth and sustainability.",
    icon: <Globe className="h-8 w-8" />,
    features: [
      "Market research and analysis",
      "Infrastructure planning",
      "Commodities management",
      "Sustainability assessments"
    ]
  },
  {
    title: "Organizational Performance and Capacity Building",
    description: "We work closely with organizations to enhance their performance, strengthen capabilities, and build a strong foundation for long-term success.",
    icon: <TrendingUp className="h-8 w-8" />,
    features: [
      "Performance optimization",
      "Skill development programs",
      "Systems improvement",
      "Capacity assessment and planning"
    ]
  }
];

const stats: Stat[] = [
  {
    number: "50+",
    value: 50,
    suffix: "+",
    label: "Active Clients",
    description: "Active clients around the world",
    icon: <MapPin className="h-6 w-6" />
  },
  {
    number: "10+",
    value: 10,
    suffix: "+",
    label: "Years Experience",
    description: "Years of best experiences",
    icon: <Clock className="h-6 w-6" />
  },
  {
    number: "10+",
    value: 10,
    suffix: "+",
    label: "Awards",
    description: "Best award achievements",
    icon: <Award className="h-6 w-6" />
  },
  {
    number: "1k+",
    value: 1000,
    suffix: "+",
    label: "Happy Clients",
    description: "Satisfied happy clients",
    icon: <Star className="h-6 w-6" />
  }
];

export default function Services() {
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
              Professional Services
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Our <span style={{ color: "#228b22" }}>Services</span>
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            The Directorate of OD Consultancy and Action Research Services (DODCARS) offers comprehensive 
            solutions for organizational development, strategic planning, and sustainable growth across Africa and beyond.
          </motion.p>
        </motion.section>

        {/* Trust Banner */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Card className="border-0 shadow-xl" style={{ background: "linear-gradient(135deg, #228b22, #32cd32)" }}>
            <CardContent className="py-12 text-center text-white">
              <motion.div 
                className="flex items-center justify-center gap-3 mb-4"
                variants={fadeInUp}
              >
                <CheckCircle className="h-8 w-8" />
                <h2 className="text-3xl font-bold">
                  More than 50+ happy clients trust us!
                </h2>
              </motion.div>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Over 50 satisfied clients trust us for our expertise and commitment to delivering exceptional results.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Services Grid */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to transform organizations and drive sustainable development
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardHeader className="pb-6">
                    <div className="flex items-start gap-4">
                      <div 
                        className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: "rgba(34, 139, 34, 0.1)" }}
                      >
                        <div style={{ color: "#228b22" }}>
                          {service.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-slate-600 leading-relaxed text-base">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-800 mb-3">Key Features:</h4>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="h-4 w-4 flex-shrink-0" style={{ color: "#228b22" }} />
                          <span className="text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      className="mt-6 w-full group/btn" 
                      style={{ backgroundColor: "#228b22" }}
                      variant="default"
                    >
                      Learn More 
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Statistics Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Impact</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Trusted by organizations worldwide for delivering measurable results and sustainable growth
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="py-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(34, 139, 34, 0.1)" }}>
                      <div style={{ color: "#228b22" }}>
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-4xl font-bold mb-2" style={{ color: "#228b22" }}>
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center"
        >
          <Card className="bg-slate-900 text-white border-0 shadow-2xl">
            <CardContent className="py-16 px-8">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Transform Your Organization?
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-8">
                Partner with DODCARS to unlock your organization's potential through our comprehensive 
                development services and proven methodologies.
              </p>
              <Separator className="bg-white/20 my-8 max-w-xs mx-auto" />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6"
                  style={{ backgroundColor: "#228b22" }}
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-slate-900"
                >
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}