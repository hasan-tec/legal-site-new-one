"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
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

const LawFirmHomepage = () => {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-white py-4 px-6 flex flex-col md:flex-row justify-between items-center sticky top-0 z-50 shadow-md">
        <div className="text-2xl font-bold text-green-800 mb-4 md:mb-0">Lawyero</div>
        <nav className="mb-4 md:mb-0">
          <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-sm">
            {["All Pages", "About", "Service", "Cases", "Legal Team", "Contact"].map((item) => (
              <li key={item}><Link href="#" className="text-gray-600 hover:text-green-800 transition-colors">{item}</Link></li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center">
          <Phone className="text-green-800 mr-2" size={18} />
          <span className="text-green-800">+1234 567 890</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="max-w-2xl mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Reliable Legal Expertise for Every Situation.</h1>
            <p className="text-gray-600 mb-8">Committed to protecting your rights and interests, we provide professional, reliable, and results-driven legal services for individuals and businesses alike.</p>
            <div className="space-x-4">
              <Button variant="default">Book Consultation</Button>
              <Button variant="outline">Our Services</Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 max-w-md">
            <Image src="/placeholder.svg" alt="Lawyer" width={500} height={500} className="rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image src="/placeholder.svg" alt="Legal consultation" width={500} height={500} className="rounded-lg shadow-xl" />
          </div>
          <div className="max-w-2xl">
            <h2 className="text-sm text-green-800 mb-2 uppercase tracking-wide">About</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">We Are Legal Experts Based in Phoenix, United States</h3>
            <p className="text-gray-600 mb-8">Your trusted legal advisors offering comprehensive solutions tailored to meet all your legal needs, combining local expertise with a deep understanding of national laws.</p>
            <ul className="space-y-4 mb-8">
              {["Experienced attorneys", "Personalized solutions", "Top legal services"].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-green-800 mr-2">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="default">About Us</Button>
          </div>
        </div>
      </section>

      {/* Legal Team Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm text-green-800 mb-2 uppercase tracking-wide text-center">Legal Team</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center">Our Legal Professionals</h3>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-center">Committed to providing exceptional legal services with a client-centric approach.</p>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {[
                { name: "Sherma Kudara", role: "Associate Partner" },
                { name: "Handy Osbon", role: "Founding Partner" },
                { name: "Chang Lee", role: "Managing Partner" },
                { name: "Roy Wilson", role: "Legal Consultant" }
              ].map((member, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card>
                    <CardContent className="flex flex-col items-center p-6">
                      <Image src="/placeholder.svg" alt={member.name} width={256} height={320} className="w-full h-80 object-cover rounded-lg mb-4" />
                      <p className="text-sm text-gray-500">{member.role}</p>
                      <h4 className="text-xl font-bold">{member.name}</h4>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-green-800 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Your Reliable Legal Partner</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">Trust our experienced attorneys to provide consistent, dependable legal support tailored to your unique needs and goals.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { number: "01", title: "Unmatched Expertise", desc: "We have a proven track record of achieving favorable outcomes, whether it's winning high-stakes cases." },
              { number: "02", title: "Client Centered", desc: "We prioritize your needs, providing personalized attention and tailored solutions to ensure your satisfaction and success." },
              { number: "03", title: "Comprehensive Legal Solution", desc: "Offering diverse legal services under one roof, our holistic approach addresses all your complex legal issues." },
              { number: "04", title: "Innovative Strategy", desc: "Utilizing cutting-edge technologies and creative problem-solving, we deliver effective and efficient results for our clients." },
              { number: "05", title: "Excellence and Community", desc: "Committed to professional excellence and community engagement, we provide top-quality legal representation and support local initiatives." }
            ].map((feature, index) => (
              <Card key={index} className="bg-green-700">
                <CardContent className="p-6">
                  <div className="text-sm mb-2">{feature.number}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          <Card className="bg-green-800 text-white p-8 rounded-lg max-w-md mb-8 lg:mb-0">
            <CardContent>
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <Star key={index} fill="yellow" color="yellow" size={20} />
                ))}
                <span className="ml-2">5.0</span>
              </div>
              <p className="mb-4">Lawyero exceeded my expectations. They handled my complex business litigation with expertise and dedication, securing a favorable outcome. I couldn't have asked for better representation.</p>
              <div className="flex items-center">
                <Image src="/placeholder.svg" alt="Client" width={40} height={40} className="rounded-full mr-3" />
                <div>
                  <p className="font-bold">Hasan Mamuju</p>
                  <p className="text-sm">Operations Director, Johnson & Co</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Why Clients Trust Us For Their Legal Matters</h2>
            <p className="text-gray-600 mb-6">Explore the depth of knowledge and experience that sets us apart in the legal industry.</p>
            <ul className="space-y-4">
              {["Proven Track Record", "Personalized Approach", "Transparent Communication"].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="bg-green-800 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Expert Legal Representation You Can Trust</h2>
          <p className="mb-8 text-lg">Benefit from our extensive experience and dedication as we guide you through complex legal challenges, offering tailored solutions and unwavering support every step of the way.</p>
          <Button variant="default" size="lg">Get Started</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              { icon: <Phone size={20} />, title: "Phone", content: "+1 234 567 890" },
              { icon: <Mail size={20} />, title: "Email", content: "lawyero@tekano.studio" },
              { icon: <MapPin size={20} />, title: "Address", content: "123 Legal Way Phoenix, AZ 85001 USA" }
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="text-green-800 mr-2">{item.icon}</div>
                <div>
                  <p className="text-sm text-gray-500">{item.title}</p>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-8">
            <div className="flex items-center mb-4 md:mb-0">
              <Image src="/placeholder.svg" alt="Lawyero Logo" width={40} height={40} className="mr-2" />
              <span className="text-2xl font-bold text-green-800">Lawyero</span>
            </div>
            <nav className="mb-4 md:mb-0">
              <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-sm">
                {["Main Page", "CMS", "Support", "License", "Changelog"].map((item) => (
                  <li key={item}><Link href="#" className="text-gray-600 hover:text-green-800 transition-colors">{item}</Link></li>
                ))}
              </ul>
            </nav>
            <div className="flex space-x-4">
              {[Facebook, Youtube, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <Icon key={index} size={20} className="text-gray-400 hover:text-green-800 cursor-pointer transition-colors" />
              ))}
            </div>
          </div>
          <div className="text-center text-sm text-gray-500 mt-8">
            © Tekano Studio. All rights reserved. Made by Tekano Studio
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LawFirmHomepage