import React from 'react';
import SEO from '../components/common/SEO';

const FAQs: React.FC = () => {
  return (
    <>
      <SEO
        title="FAQs"
        description="Frequently asked questions about Comfort Build Engineers' MEP engineering services in Kenya. Get answers about our mechanical, electrical, and plumbing solutions, project timelines, and more."
        canonicalUrl="/faqs"
        keywords="MEP engineering FAQs, engineering questions Kenya, CBE FAQs, mechanical engineering questions, electrical engineering questions"
      />
      <div className="min-h-screen bg-neutral-50">
        <div className="section-container py-16">
          <h1 className="text-4xl font-bold text-neutral-800 mb-8">Frequently Asked Questions</h1>
          <p className="text-lg text-neutral-600">
            Find answers to commonly asked questions about our services.
          </p>
        </div>
      </div>
    </>
  );
};

export default FAQs;