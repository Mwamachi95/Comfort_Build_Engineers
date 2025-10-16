import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useForm as useFormspree } from '@formspree/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';
import SEO from '../components/common/SEO';
import { contactFormSchema, type ContactFormSchema } from '../utils/contactValidation';
import { contactInfo } from '../data/contact';
import { localBusinessSchema } from '../data/seo';

const Contact: React.FC = () => {
  const [formspreeState, handleFormspreeSubmit] = useFormspree("xrbyrlkn");
  const [showMessage, setShowMessage] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  // Watch for successful submission
  useEffect(() => {
    if (formspreeState.succeeded) {
      reset();
      setShowMessage(true);

      // Hide success message after 5 seconds
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [formspreeState.succeeded, reset]);

  const onSubmit = async (data: ContactFormSchema) => {
    try {
      console.log('Submitting form data:', data);
      console.log('Formspree state before submit:', formspreeState);

      // Submit to Formspree
      await handleFormspreeSubmit(data);

      console.log('Formspree state after submit:', formspreeState);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Comfort Build Engineers for all your MEP engineering needs in Kenya. Contact us via phone, email, or visit our office in Nairobi. We're here to help with your mechanical, electrical, and plumbing projects."
        canonicalUrl="/contact"
        keywords="contact CBE, MEP engineering Nairobi, contact engineers Kenya, engineering consultation, CBE contact details"
        structuredData={localBusinessSchema}
      />
      <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative">
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:pr-8"
          >
            {/* "CONTACT US" Label */}
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span 
                className="text-sm font-semibold tracking-wider uppercase font-heading"
                style={{ color: '#A67458' }}
              >
                Contact Us
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-neutral-900 mb-6 font-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Get in Touch.{' '}
              <span style={{ color: '#A67458' }}>
                Let's Build Together.
              </span>
            </motion.h1>

            {/* Introduction Paragraph */}
            <motion.p 
              className="text-base md:text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-lg mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Reach out to our team to discuss your mechanical, electrical, and plumbing engineering needs. Learn how Comfort Build Engineers can support your project's success with reliable, dependable, and client-focused solutions.
            </motion.p>

            {/* Contact Details */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <MapPinIcon className="h-6 w-6 text-neutral-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2 font-heading">Address</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Comfort Build Engineers Limited<br />
                    {contactInfo.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <PhoneIcon className="h-6 w-6 text-neutral-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2 font-heading">Phone</h3>
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="text-neutral-700 transition-colors duration-200"
                    style={{ 
                      color: 'inherit'
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = '#A67458';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = 'inherit';
                    }}
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <EnvelopeIcon className="h-6 w-6 text-neutral-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2 font-heading">Email</h3>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-neutral-700 transition-colors duration-200"
                    style={{ 
                      color: 'inherit'
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = '#A67458';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = 'inherit';
                    }}
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <ClockIcon className="h-6 w-6 text-neutral-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2 font-heading">Office Hours</h3>
                  <p className="text-neutral-700">
                    {contactInfo.officeHours}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-neutral-50 rounded-xl p-8 lg:p-10"
          >
            {/* Success/Error Messages */}
            <AnimatePresence>
              {formspreeState.succeeded && showMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3"
                >
                  <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-green-900 font-heading">Message Sent Successfully!</h3>
                    <p className="text-sm text-green-700 mt-1">Thank you for contacting us. We'll get back to you soon.</p>
                  </div>
                </motion.div>
              )}

              {formspreeState.errors && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3"
                >
                  <XCircleIcon className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-red-900 font-heading">Submission Error</h3>
                    <p className="text-sm text-red-700 mt-1">There was an error submitting your message. Please try again.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Fields Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-neutral-900 mb-2 font-heading">
                    First name *
                  </label>
                  <input
                    {...register('firstName')}
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 focus:border-transparent transition-colors duration-200 bg-white"
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-neutral-900 mb-2 font-heading">
                    Last name *
                  </label>
                  <input
                    {...register('lastName')}
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 focus:border-transparent transition-colors duration-200 bg-white"
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              {/* Work Email */}
              <div>
                <label htmlFor="workEmail" className="block text-sm font-semibold text-neutral-900 mb-2 font-heading">
                  Work email *
                </label>
                <input
                  {...register('workEmail')}
                  type="email"
                  id="workEmail"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 focus:border-transparent transition-colors duration-200 bg-white"
                  placeholder="Enter your work email"
                />
                {errors.workEmail && (
                  <p className="mt-1 text-sm text-red-600">{errors.workEmail.message}</p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-sm font-semibold text-neutral-900 mb-2 font-heading">
                  Company name *
                </label>
                <input
                  {...register('companyName')}
                  type="text"
                  id="companyName"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 focus:border-transparent transition-colors duration-200 bg-white"
                  placeholder="Enter your company name"
                />
                {errors.companyName && (
                  <p className="mt-1 text-sm text-red-600">{errors.companyName.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-neutral-900 mb-2 font-heading">
                  What can we do for you?
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 focus:border-transparent transition-colors duration-200 bg-white resize-vertical"
                  placeholder="Tell us about your project or how we can help..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting || formspreeState.submitting}
                  className="w-full px-6 py-3 text-base font-semibold text-white rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed font-heading"
                  style={{
                    backgroundColor: '#A67458',
                    '--tw-ring-color': '#A67458'
                  } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    if (!isSubmitting && !formspreeState.submitting) {
                      (e.target as HTMLElement).style.backgroundColor = '#8F6147';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting && !formspreeState.submitting) {
                      (e.target as HTMLElement).style.backgroundColor = '#A67458';
                    }
                  }}
                >
                  {isSubmitting || formspreeState.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;