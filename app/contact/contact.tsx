"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle,
  Send,
  Clock,
  Globe,
  Building2,
  CheckCircle,
  ArrowRight,
  Users
} from "lucide-react";

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

const contactInfo = [
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Our Location",
    content: "JOEKONA PLAZA, 3RD FLOOR, UENR ROUNDABOUT FIAPRE-BEREKUM ROAD, GHANA",
    subtitle: "BOX 1694, SUNYANI – BONO REGION, GHANA",
    action: "Get Directions"
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email Us",
    content: "info@dodcarslbg.org",
    subtitle: "We'll respond within 24 hours",
    action: "Send Email"
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Call Us",
    content: "(+233) 20-850-0875",
    subtitle: "Available during business hours",
    action: "Call Now"
  }
];

const reasons = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "Expert Team",
    description: "Our experienced consultants are ready to help transform your organization"
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Global Reach",
    description: "Serving clients across Africa and beyond with local expertise"
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: "Proven Results",
    description: "Over 50+ successful projects and satisfied clients trust our services"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      subject: "",
      message: ""
    });
    
    setIsSubmitting(false);
    alert("Thank you! Your message has been sent successfully.");
  };

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
              Get In Touch
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Contact <span style={{ color: "#228b22" }}>DODCARS</span>
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            We'd love to hear from you! Whether you have a question, need support, or want to discuss 
            how we can help transform your organization, feel free to reach out. Our team is here to help 
            and will get back to you as soon as possible.
          </motion.p>
          
          <motion.p 
            className="text-lg font-medium text-slate-700"
            variants={fadeInUp}
          >
            Looking forward to connecting with you!
          </motion.p>
        </motion.section>

        {/* Contact Information Cards */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How to Reach Us</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Multiple ways to connect with our team
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group text-center">
                  <CardContent className="py-8">
                    <div 
                      className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: "rgba(34, 139, 34, 0.1)" }}
                    >
                      <div style={{ color: "#228b22" }}>
                        {info.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {info.title}
                    </h3>
                    <p className="text-slate-700 font-medium mb-2 leading-relaxed">
                      {info.content}
                    </p>
                    <p className="text-slate-500 text-sm mb-6">
                      {info.subtitle}
                    </p>
                    <Button 
                      className="w-full"
                      variant="outline"
                      style={{ borderColor: "#228b22", color: "#228b22" }}
                    >
                      {info.action}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Form and Reasons Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div variants={fadeInLeft}>
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                  <MessageCircle className="h-6 w-6" style={{ color: "#228b22" }} />
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+233 XX XXX XXXX"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization</Label>
                      <Input
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="Your organization name"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Brief description of your inquiry"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about how we can help you..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button 
                    onClick={handleSubmit}
                    className="w-full text-lg py-6"
                    style={{ backgroundColor: "#228b22" }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div variants={fadeInRight} className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Why Work with DODCARS?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                The Directorate of OD Consultancy and Action Research Services (DODCARS) is your 
                trusted partner for organizational transformation and sustainable development.
              </p>
            </div>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <Card key={index} className="bg-white/60 backdrop-blur-sm border-0 shadow-md">
                  <CardContent className="py-6">
                    <div className="flex items-start gap-4">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "rgba(34, 139, 34, 0.1)" }}
                      >
                        <div style={{ color: "#228b22" }}>
                          {reason.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">
                          {reason.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Office Hours */}
            <Card className="bg-gradient-to-r from-slate-900 to-slate-800 text-white border-0">
              <CardContent className="py-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="h-5 w-5" />
                  <h3 className="text-lg font-bold">Office Hours</h3>
                </div>
                <div className="space-y-2 text-sm opacity-90">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        {/* Map Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Card className="border-0 shadow-xl overflow-hidden">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-slate-900 mb-2">
                Find Us in Sunyani
              </CardTitle>
              <CardDescription className="text-lg text-slate-600">
                Located in the heart of the Bono Region, Ghana
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-96 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Building2 className="h-16 w-16 mx-auto" style={{ color: "#228b22" }} />
                  <div className="max-w-md space-y-2">
                    <p className="font-bold text-slate-900">JOEKONA PLAZA, 3RD FLOOR</p>
                    <p className="text-slate-700">UENR ROUNDABOUT FIAPRE-BEREKUM ROAD</p>
                    <p className="text-slate-600">BOX 1694, SUNYANI – BONO REGION, GHANA</p>
                  </div>
                  <Button 
                    className="mt-4"
                    style={{ backgroundColor: "#228b22" }}
                  >
                    View on Google Maps
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center"
        >
          <Card className="border-0 shadow-xl" style={{ background: "linear-gradient(135deg, #228b22, #32cd32)" }}>
            <CardContent className="py-16 px-8 text-white">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Transform Your Organization?
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-8">
                Don't wait to unlock your organization's potential. Contact DODCARS today and let's 
                discuss how we can help you achieve sustainable growth and transformation.
              </p>
              <Separator className="bg-white/20 my-8 max-w-xs mx-auto" />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 bg-white text-green-600 hover:bg-gray-100"
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-green-600"
                >
                  Learn About Our Services
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}