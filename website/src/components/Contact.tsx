'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Clock, MessageSquare, User, Building, Zap } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    projectDetails: '',
    urgency: 'standard'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          projectDetails: '',
          urgency: 'standard'
        });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              Get Your Professional Quote
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact SE Finishers
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Ready to discuss your print finishing project? Contact Zoe Axford directly for professional consultation, 
              technical guidance, and personalized quotes for all your finishing needs.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <a href="mailto:zoe.axford@sefinishers.com" className="text-primary hover:text-primary/80 font-medium">
                    zoe.axford@sefinishers.com
                  </a>
                  <p className="text-gray-500 text-sm mt-1">Best for detailed inquiries and file sharing</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <a href="tel:+441234567890" className="text-blue-600 hover:text-blue-700 text-lg font-medium">
                    01234 567890
                  </a>
                  <p className="text-gray-500 text-sm mt-1">Monday - Friday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Response Time</h4>
                  <p className="text-gray-600">Within 24 hours</p>
                  <p className="text-gray-500 text-sm mt-1">Same day for urgent projects</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">What to Include in Your Inquiry</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Project type and quantity</li>
                <li>• Desired finishing services (foiling, die cutting, etc.)</li>
                <li>• Paper stock and size requirements</li>
                <li>• Timeline and deadline</li>
                <li>• Any special requirements or considerations</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground">Send Professional Inquiry</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-card-foreground mb-3">
                    <User className="w-4 h-4 text-primary" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border-2 border-border bg-card text-card-foreground rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 shadow-sm hover:shadow-md text-base font-medium placeholder:text-muted-foreground"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-card-foreground mb-3">
                    <Mail className="w-4 h-4 text-primary" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border-2 border-border bg-card text-card-foreground rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 shadow-sm hover:shadow-md text-base font-medium placeholder:text-muted-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="flex items-center gap-2 text-sm font-semibold text-card-foreground mb-3">
                    <Phone className="w-4 h-4 text-primary" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border-2 border-border bg-card text-card-foreground rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 shadow-sm hover:shadow-md text-base font-medium placeholder:text-muted-foreground"
                    placeholder="01234 567890"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="flex items-center gap-2 text-sm font-semibold text-card-foreground mb-3">
                    <Building className="w-4 h-4 text-primary" />
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border-2 border-border bg-card text-card-foreground rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 shadow-sm hover:shadow-md text-base font-medium placeholder:text-muted-foreground"
                  >
                    <option value="">Select a service</option>
                    <option value="foiling">Foiling</option>
                    <option value="die-cutting">Die Cutting</option>
                    <option value="duplexing">Duplexing</option>
                    <option value="stitching">Stitching</option>
                    <option value="hand-finishing">Hand Finishing</option>
                    <option value="multiple">Multiple Services</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="urgency" className="flex items-center gap-2 text-sm font-semibold text-card-foreground mb-3">
                  <Clock className="w-4 h-4 text-primary" />
                  Project Urgency
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="standard">Standard (5-7 days)</option>
                  <option value="urgent">Urgent (2-3 days)</option>
                  <option value="rush">Rush (24-48 hours)</option>
                </select>
              </div>

              <div>
                <label htmlFor="projectDetails" className="flex items-center gap-2 text-sm font-semibold text-card-foreground mb-3">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Project Details *
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  rows={5}
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Please describe your project requirements, including quantity, size, paper stock, and specific finishing needs..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-primary-foreground font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                    Sending Message...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Zap className="w-5 h-5" />
                    Send Professional Inquiry
                  </div>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">Thank you! Your message has been sent successfully. Zoe will get back to you within 24 hours.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">Sorry, there was an error sending your message. Please try again or contact us directly.</p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}