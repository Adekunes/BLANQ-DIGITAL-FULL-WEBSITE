'use client';

import { Metadata } from 'next';
import { useState } from 'react';
import CTAButton from '@/components/CTAButton';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real implementation, you would send this data to your backend
    console.log('Form submitted:', formData);
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        business: '',
        service: '',
        message: ''
      });
      setSubmitStatus('idle');
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-light-gray to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ready to grow your business? Let's discuss your project and see how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">Send us a message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  Thanks! We received your message and will get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-charcoal mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Your business name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="social-media">Social Media Management</option>
                    <option value="content-creation">Content Creation & Ads</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-white py-3 px-6 rounded-lg hover:bg-accent-dark transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Info & Calendly */}
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">Other ways to reach us</h2>
              
              {/* Contact Information */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white flex-shrink-0">
                    📧
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Email</h3>
                    <p className="text-gray-600">hello@blanqdigital.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Phone</h3>
                    <p className="text-gray-600">+1 (514) XXX-XXXX</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9am-5pm EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Location</h3>
                    <p className="text-gray-600">Montreal, QC, Canada</p>
                    <p className="text-sm text-gray-500">Available for local meetings</p>
                  </div>
                </div>
              </div>

              {/* Calendly Integration */}
              <div className="bg-light-gray rounded-xl p-6">
                <h3 className="text-xl font-bold text-charcoal mb-4">Book a Call</h3>
                <p className="text-gray-600 mb-4">
                  Prefer to talk? Book a 15-minute call to discuss your project.
                </p>
                <CTAButton
                  href="https://calendly.com/blanqdigital/15min"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Schedule a Call
                </CTAButton>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Follow us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/blanqdigital"
                    className="text-gray-600 hover:text-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/company/blanqdigital"
                    className="text-gray-600 hover:text-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
