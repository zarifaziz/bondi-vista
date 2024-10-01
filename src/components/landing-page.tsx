"use client"

import { useState } from 'react'
import { Button } from "./ui/buttons"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { ArrowRight, Waves, Sun, Leaf } from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', phone: '', message: '' })
    alert('Thank you for your interest in Bondi Vista. Our team will contact you shortly!')
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-white/80 backdrop-blur-md fixed w-full z-10">
        <a className="flex items-center justify-center" href="#">
          <Waves className="h-6 w-6 mr-2 text-blue-600" />
          <span className="font-bold text-xl">Bondi Vista</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:text-blue-600" href="#features">Features</a>
          <a className="text-sm font-medium hover:text-blue-600" href="#apartments">Apartments</a>
          <a className="text-sm font-medium hover:text-blue-600" href="#location">Location</a>
          <a className="text-sm font-medium hover:text-blue-600" href="#contact">Contact</a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="relative w-full h-screen">
          <Image
            src="/assets/landing-page-photo.svg"
            alt="Bondi Vista Apartment Development"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white p-4 md:p-8 bg-black/30 rounded-lg backdrop-blur-sm">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Bondi Vista: Luxury Living by the Beach</h1>
              <p className="text-xl md:text-2xl mb-8">Experience unparalleled luxury in our exclusive 20-apartment development, just steps away from iconic Bondi Beach.</p>
              <div className="space-x-4">
                <Button className="inline-flex items-center justify-center bg-blue-600 text-white" asChild>
                  <a href="#contact">
                    Register Interest
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
                  <a href="#apartments">View Apartments</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Luxury Features</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Oceanfront Views", icon: Waves, description: "Breathtaking views of Bondi Beach from every apartment" },
                { name: "Rooftop Terrace", icon: Sun, description: "Expansive rooftop terrace with infinity pool and BBQ area" },
                { name: "Eco-Friendly Design", icon: Leaf, description: "Sustainable architecture with solar panels and rainwater harvesting" },
              ].map((feature) => (
                <div key={feature.name} className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
                  <feature.icon className="h-12 w-12 mb-4 text-blue-600" />
                  <h3 className="text-xl font-bold mb-2">{feature.name}</h3>
                  <p className="text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="apartments" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Available Apartments</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { type: "1 Bedroom", size: "60-75 sqm", price: "From $1.2M" },
                { type: "2 Bedrooms", size: "85-100 sqm", price: "From $1.8M" },
                { type: "3 Bedrooms Penthouse", size: "120-150 sqm", price: "From $3.5M" },
              ].map((apartment) => (
                <div key={apartment.type} className="flex flex-col p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-2">{apartment.type}</h3>
                  <p className="text-lg mb-1">Size: {apartment.size}</p>
                  <p className="text-xl font-semibold mb-4">{apartment.price}</p>
                  <Button variant="outline" className="mt-auto">View Details</Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="location" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Prime Bondi Location</h2>
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <iframe
                title="Bondi Vista Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.9759600963897!2d151.27421661521174!3d-33.89170798065352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ad9f13e7707b%3A0x5017d681632c600!2sBondi%20Beach!5e0!3m2!1sen!2sau!4v1620847388946!5m2!1sen!2sau"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
              <div className="flex flex-col justify-center space-y-4">
                <p className="text-lg">
                  Bondi Vista is perfectly positioned to offer the best of beachside living. Just steps away from the golden sands of Bondi Beach, and minutes from cafes, restaurants, and shopping.
                </p>
                <ul className="space-y-2 text-lg">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-blue-600" />
                    <span>2 minutes walk to Bondi Beach</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-blue-600" />
                    <span>5 minutes to local cafes and restaurants</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-blue-600" />
                    <span>15 minutes drive to Sydney CBD</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Register Your Interest</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <p className="mb-4 text-lg">
                  Interested in making Bondi Vista your new home? Fill out the form below, and our sales team will be in touch to provide you with more information and arrange a private viewing.
                </p>
                <ul className="space-y-2 text-lg">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-blue-600" />
                    <span>Exclusive pre-launch pricing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-blue-600" />
                    <span>Priority selection of apartments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-blue-600" />
                    <span>Flexible payment plans available</span>
                  </li>
                </ul>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  placeholder="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  placeholder="Phone Number"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <Textarea
                  placeholder="Your Message or Enquiry"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                  Submit Enquiry
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Bondi Vista. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </a>
        </nav>
      </footer>
    </div>
  )
}