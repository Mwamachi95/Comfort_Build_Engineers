import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';

const Blog: React.FC = () => {
  return (
    <>
      <SEO
        title="Blog"
        description="Stay updated with the latest insights, industry news, and engineering trends from Comfort Build Engineers. Expert articles on MEP engineering, project management, and best practices in Kenya."
        canonicalUrl="/blog"
        keywords="MEP engineering blog, engineering news Kenya, HVAC insights, electrical engineering articles, plumbing tips, construction industry Kenya"
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-neutral-50 py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* "BLOG" Label */}
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span
                  className="text-sm font-semibold tracking-wider uppercase font-heading"
                  style={{ color: '#808C27' }}
                >
                  Our Blog
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-neutral-900 mb-6 font-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Insights & Innovation.{' '}
                <span style={{ color: '#808C27' }}>
                  Engineering Excellence.
                </span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                className="text-base md:text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Stay updated with the latest insights, industry trends, and engineering best practices from Comfort Build Engineers. Explore expert articles on MEP engineering, project management, and innovative solutions shaping Kenya's construction landscape.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Content Section - Placeholder */}
        <section className="section-container py-16 md:py-20">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div
                className="inline-block px-6 py-3 rounded-full text-sm font-semibold"
                style={{ backgroundColor: 'rgba(128, 140, 39, 0.1)', color: '#808C27' }}
              >
                Coming Soon
              </div>
              <p className="text-neutral-600 mt-6 text-lg">
                We're currently working on bringing you valuable content. Check back soon!
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;