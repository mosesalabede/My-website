import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Instagram, Linkedin } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center p-6 shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold">Eliph Graphics</h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#portfolio" className="hover:text-blue-600">Portfolio</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <motion.h2 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-extrabold mb-4">
          Creative Visuals, Timeless Design
        </motion.h2>
        <p className="mb-6 text-lg max-w-xl">
          We craft designs that inspire and captivate your audience.
        </p>
        <div className="space-x-4">
          <Button className="bg-white text-blue-600 hover:bg-gray-200">Get Started</Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
            View Portfolio
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-4">About Us</h3>
        <p className="text-gray-600 max-w-3xl mx-auto">
          At Eliph Graphics, we specialize in creating impactful visual identities for brands. From concept to execution, our designs tell stories that resonate.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-100">
        <h3 className="text-3xl font-bold text-center mb-10">Our Services</h3>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {["Branding", "Graphic Design", "Web Design", "Motion Graphics"].map((service) => (
            <Card key={service} className="rounded-2xl shadow-md hover:shadow-xl transition">
              <CardContent className="p-6 text-center font-semibold">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10">Portfolio</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-gray-300 h-48 rounded-2xl shadow-md"></div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
        <form className="max-w-lg mx-auto space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 rounded-xl border" />
          <input type="email" placeholder="Email" className="w-full p-3 rounded-xl border" />
          <textarea placeholder="Message" className="w-full p-3 rounded-xl border h-32" />
          <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Send Message</Button>
        </form>
        <div className="flex justify-center space-x-6 mt-8">
          <a href="#"><Mail /></a>
          <a href="#"><Instagram /></a>
          <a href="#"><Linkedin /></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-600 border-t">
        © {new Date().getFullYear()} Eliph Graphics. All rights reserved.
      </footer>
    </div>
  );
}
