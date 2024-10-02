"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Star, ChevronLeft, ChevronRight, Facebook, Youtube, Twitter, Linkedin, Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const LawFirmHomepage = () => {
  return (
    <div className="font-sans bg-gray-50">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="bg-white py-4 px-6 flex justify-between items-center sticky top-0 z-50 shadow-sm"
      >
        <div className="text-2xl font-bold text-green-800">Lawyero</div>
        <nav>
          <motion.ul 
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="flex space-x-6 text-sm"
          >
            {["Home", "About", "Services", "Cases", "Team", "Contact"].map((item) => (
              <motion.li key={item} variants={fadeIn}>
                <Link href="#" className="text-gray-600 hover:text-green-800 transition-colors">{item}</Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center"
        >
          <Phone className="text-green-800 mr-2" size={18} />
          <span className="text-green-800">+1234 567 890</span>
        </motion.div>
      </motion.header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-white py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="max-w-2xl mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800 leading-tight">Reliable Legal Expertise for Every Situation</h1>
            <p className="text-xl text-gray-600 mb-8">Committed to protecting your rights and interests with professional, results-driven legal services.</p>
            <motion.div 
              className="space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button variant="default" size="lg">Book Consultation</Button>
              <Button variant="outline" size="lg">Our Services</Button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2 max-w-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image src="https://picsum.photos/600/600" alt="Lawyer" width={600} height={600} className="rounded-2xl shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="w-full md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image src="https://picsum.photos/600/600" alt="Legal consultation" width={600} height={600} className="rounded-2xl shadow-2xl" />
          </motion.div>
          <motion.div 
            className="max-w-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm text-green-800 mb-2 uppercase tracking-wide">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">We Are Legal Experts Based in Phoenix, United States</h3>
            <p className="text-xl text-gray-600 mb-8">Your trusted legal advisors offering comprehensive solutions tailored to meet all your legal needs, combining local expertise with a deep understanding of national laws.</p>
            <motion.ul 
              className="space-y-4 mb-8"
              variants={staggerChildren}
              initial="initial"
              animate="animate"
            >
              {["Experienced attorneys", "Personalized solutions", "Top legal services"].map((item, index) => (
                <motion.li key={index} className="flex items-center" variants={fadeIn}>
                  <span className="text-green-800 mr-2">✓</span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <Button variant="default" size="lg">Learn More</Button>
          </motion.div>
        </div>
      </section>

      {/* Legal Team Section */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm text-green-800 mb-2 uppercase tracking-wide">Legal Team</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Our Legal Professionals</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Committed to providing exceptional legal services with a client-centric approach.</p>
          </motion.div>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {[
                { name: "Sherma Kudara", role: "Associate Partner" },
                { name: "Handy Osbon", role: "Founding Partner" },
                { name: "Chang Lee", role: "Managing Partner" },
                { name: "Roy Wilson", role: "Legal Consultant" }
              ].map((member, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <Image src={`https://picsum.photos/400/500?random=${index}`} alt={member.name} width={400} height={500} className="w-full h-80 object-cover" />
                        <div className="p-6 text-center">
                          <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                          <h4 className="text-xl font-bold">{member.name}</h4>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-green-800 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Your Reliable Legal Partner</h2>
            <p className="text-xl max-w-3xl mx-auto">Trust our experienced attorneys to provide consistent, dependable legal support tailored to your unique needs and goals.</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            {[
              { number: "01", title: "Unmatched Expertise", desc: "We have a proven track record of achieving favorable outcomes in high-stakes cases." },
              { number: "02", title: "Client Centered", desc: "We prioritize your needs, providing personalized attention and tailored solutions." },
              { number: "03", title: "Comprehensive Solutions", desc: "Our holistic approach addresses all your complex legal issues under one roof." },
              { number: "04", title: "Innovative Strategy", desc: "We utilize cutting-edge technologies and creative problem-solving for efficient results." },
              { number: "05", title: "Excellence & Community", desc: "We're committed to professional excellence and supporting local initiatives." }
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="bg-green-700 h-full">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold mb-4">{feature.number}</div>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-lg">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 mb-12 lg:mb-0"
          >
            <Card className="bg-green-800 text-white p-8 rounded-2xl">
              <CardContent>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((_, index) => (
                    <Star key={index} fill="yellow" color="yellow" size={24} />
                  ))}
                  <span className="ml-2 text-2xl">5.0</span>
                </div>
                <p className="text-xl mb-6">"Lawyero exceeded my expectations. They handled my complex business litigation with expertise and dedication, securing a favorable outcome. I couldn't have asked for better representation."</p>
                <div className="flex items-center">
                  <Image src="https://picsum.photos/80/80" alt="Client" width={80} height={80} className="rounded-full mr-4" />
                  <div>
                    <p className="font-bold text-xl">Hasan Mamuju</p>
                    <p className="text-lg">Operations Director, Johnson & Co</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 lg:pl-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Why Clients Trust Us For Their Legal Matters</h2>
            <p className="text-xl text-gray-600 mb-8">Explore the depth of knowledge and experience that sets us apart in the legal industry.</p>
            <motion.ul 
              className="space-y-6"
              variants={staggerChildren}
              initial="initial"
              animate="animate"
            >
              {["Proven Track Record", "Personalized Approach", "Transparent Communication"].map((item, index) => (
                <motion.li key={index} className="flex items-center text-xl" variants={fadeIn}>
                  <span className="bg-green-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">✓</span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-24 px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Expert Legal Representation You Can Trust</h2>
          <p className="text-xl mb-12">Benefit from our extensive experience and dedication as we guide you through complex legal challenges, offering tailored solutions and unwavering support every step of the way.</p>
          <Button variant="default" size="lg" className="text-xl px-8 py-4">Get Started Today</Button>
        </motion.div>
      </section>

     {/* Footer */}
     <footer className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            {[
              { icon: <Phone size={24} />, title: "Phone", content: "+1 234 567 890" },
              { icon: <Mail size={24} />, title: "Email", content: "contact@lawyero.com" },
              { icon: <MapPin size={24} />, title: "Address", content: "123 Legal Way, Phoenix, AZ 85001 USA" }
            ].map((item, index) => (
              <motion.div key={index} className="flex items-center" variants={fadeIn}>
                <div className="text-green-800 mr-4">{item.icon}</div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">{item.title}</p>
                  <p className="text-lg font-semibold">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center mb-6 md:mb-0">
              <Image src="https://picsum.photos/80/80" alt="Lawyero Logo" width={80} height={80} className="rounded-full mr-4" />
              <span className="text-3xl font-bold text-green-800">Lawyero</span>
            </div>
            <nav className="mb-6 md:mb-0">
              <ul className="flex flex-wrap justify-center space-x-6 text-lg">
                {["Home", "About", "Services", "Cases", "Team", "Contact"].map((item) => (
                  <li key={item}><Link href="#" className="text-gray-600 hover:text-green-800 transition-colors">{item}</Link></li>
                ))}
              </ul>
            </nav>
            <div className="flex space-x-4">
              {[Facebook, Youtube, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <Icon key={index} size={24} className="text-gray-400 hover:text-green-800 cursor-pointer transition-colors" />
              ))}
            </div>
          </motion.div>
          <motion.div 
            className="text-center text-gray-500 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            © {new Date().getFullYear()} Lawyero. All rights reserved. Designed by Tekano Studio
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default LawFirmHomepage