'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Star, MapPin, Phone, Mail, Linkedin, Twitter, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EnhancedLawFirmLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: { transition: { staggerChildren: 0.1 } }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-sm"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image src="https://picsum.photos/40/40" alt="Law Firm Logo" width={40} height={40} />
            </motion.div>
            <span className="ml-2 text-xl font-bold">Apex Law</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About Us', 'Practice Areas', 'Attorneys', 'Blog', 'Contact Us'].map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-gray-900 transition-colors">
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white">
              Request Consultation
            </Button>
          </motion.div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white py-2"
            >
              {['Home', 'About Us', 'Practice Areas', 'Attorneys', 'Blog', 'Contact Us'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button className="m-4 w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Request Consultation
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image src="https://picsum.photos/1920/1080" alt="Law Office" layout="fill" objectFit="cover" className="filter brightness-50" />
          </motion.div>
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
            >
              Expert Legal Representation You Can Trust
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl mb-8"
            >
              Experienced in Corporate, Family, and Criminal Law
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-x-4"
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Schedule a Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-gray-900">
                Learn More
              </Button>
            </motion.div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2
              {...fadeInUp}
              className="text-3xl font-bold mb-12 text-center"
            >
              About Our Firm
            </motion.h2>
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                className="md:w-1/2 mb-8 md:mb-0 md:pr-12"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-lg leading-relaxed text-gray-700">
                  With over 25 years of experience, Apex Law has been dedicated to providing expert legal counsel to individuals and businesses alike. We pride ourselves on our commitment to excellence, integrity, and client satisfaction. Our team of skilled attorneys is passionate about delivering personalized solutions to meet your unique legal needs.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8"
                >
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Learn More About Us</Button>
                </motion.div>
              </motion.div>
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Image src="https://picsum.photos/600/400" alt="Law Firm Office" width={600} height={400} className="rounded-lg shadow-2xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Practice Areas Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.h2
              {...fadeInUp}
              className="text-3xl font-bold mb-12 text-center"
            >
              Our Practice Areas
            </motion.h2>
            <motion.div
              variants={staggerChildren}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {['Family Law', 'Corporate Law', 'Criminal Defense', 'Real Estate', 'Intellectual Property', 'Personal Injury'].map((area, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      >
                        <Image src={`https://picsum.photos/64/64?random=${index}`} alt={area} width={64} height={64} className="mx-auto mb-4" />
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-2">{area}</h3>
                      <p className="text-gray-600">Expert legal services in {area.toLowerCase()} matters.</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="text-center mt-12"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                View All Practice Areas
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Featured Attorneys Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2
              {...fadeInUp}
              className="text-3xl font-bold mb-12 text-center"
            >
              Meet Our Attorneys
            </motion.h2>
            <motion.div
              variants={staggerChildren}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[1, 2, 3, 4].map((attorney) => (
                <motion.div key={attorney} variants={fadeInUp}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      >
                        <Image src={`https://picsum.photos/200/200?random=${attorney}`} alt={`Attorney ${attorney}`} width={200} height={200} className="rounded-full mx-auto mb-4" />
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                      <p className="text-gray-600 mb-4">Senior Partner, Corporate Law</p>
                      <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                        Read Full Bio
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Client Testimonials Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.h2
              {...fadeInUp}
              className="text-3xl font-bold mb-12 text-center"
            >
              What Our Clients Say
            </motion.h2>
            <motion.div
              variants={staggerChildren}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[1, 2, 3].map((testimonial) => (
                <motion.div key={testimonial} variants={fadeInUp}>
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <p className="text-lg mb-4 italic">"The team at Apex Law provided exceptional service. Their expertise and dedication were invaluable in resolving my case."</p>
                        <p className="font-semibold">Jane Smith, Corporate Client</p>
                      </div>
                      <div className="flex justify-center mt-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Blog/News Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2
              {...fadeInUp}
              className="text-3xl font-bold mb-12 text-center"
            >
              Latest Legal Insights
            </motion.h2>
            <motion.div
              variants={staggerChildren}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[1, 2, 3].map((post) => (
                <motion.div key={post} variants={fadeInUp}>
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Understanding Corporate Law Changes in 2024</h3>
                        <p className="text-gray-600 mb-4">Recent legislative updates have significant implications for businesses. Our experts break down what you need to know.</p>
                      </div>
                      <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white mt-4">
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="text-center mt-12"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                View All Blog Posts
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.h2
              {...fadeInUp}
              className="text-3xl font-bold mb-12 text-center"
            >
              Get In Touch
            </motion.h2>
            <div className="flex flex-col md:flex-row gap-12">
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <form className="space-y-6">
                  <Input placeholder="Name" className="bg-gray-100 border-0" />
                  <Input type="email" placeholder="Email" className="bg-gray-100 border-0" />
                  <Input type="tel" placeholder="Phone Number" className="bg-gray-100 border-0" />
                  <Select className="bg-gray-100 border-0">
                    <option value="">Select Practice Area</option>
                    <option value="family">Family Law</option>
                    <option value="corporate">Corporate Law</option>
                    <option value="criminal">Criminal Defense</option>
                  </Select>
                  <Textarea placeholder="Message" className="bg-gray-100 border-0" />
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Send Message</Button>
                </form>
              </motion.div>
              <motion.div
                className="md:w-1/2 space-y-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-start">
                  <MapPin className="mr-4 text-blue-600" />
                  <p>123 Legal Street, Cityville, State 12345</p>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-4 text-blue-600" />
                  <p>(555) 123-4567</p>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-4 text-blue-600" />
                  <p>info@apexlaw.com</p>
                </div>
                <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                  {/* Google Maps Integration would go here */}
                  <div className="h-full flex items-center justify-center text-gray-500">
                    Google Maps Integration
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <Image src="https://picsum.photos/50/50" alt="Apex Law Logo" width={50} height={50} />
              <p className="mt-4">Committed to excellence in legal services.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['About', 'Practice Areas', 'Blog', 'Contact'].map((item) => (
                  <motion.li key={item} whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
                    <Link href={`/${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors">
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Practice Areas</h3>
              <ul className="space-y-2">
                {['Family Law', 'Corporate Law', 'Criminal Defense', 'Real Estate'].map((item) => (
                  <motion.li key={item} whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
                    <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-blue-400 transition-colors">
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
                  <Link href="#" aria-label="LinkedIn">
                    <Linkedin className="text-white hover:text-blue-400 transition-colors" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
                  <Link href="#" aria-label="Twitter">
                    <Twitter className="text-white hover:text-blue-400 transition-colors" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p>&copy; {new Date().getFullYear()} Apex Law. All rights reserved.</p>
            <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>

      {/* Sticky CTA Button */}
      <motion.div
        className="fixed bottom-4 right-4 z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 100 }}
      >
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
          Request Consultation
        </Button>
      </motion.div>

      {/* Live Chat Integration */}
      <motion.div
        className="fixed bottom-4 left-4 z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 100 }}
      >
        <Button variant="outline" size="icon" className="bg-white hover:bg-gray-100 text-blue-600 border-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span className="sr-only">Open live chat</span>
        </Button>
      </motion.div>
    </div>
  )
}