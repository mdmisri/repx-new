import React, { useState } from 'react';
import Footer from '../components/Footer'; 

export function FAQ() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const FAQSection = ({ title, children }: { title: string, children: React.ReactNode }) => {
    const isActive = activeSection === title;

    return (
      <div className="border-b border-gray-200">
        <button 
          onClick={() => setActiveSection(isActive ? null : title)}
          className="w-full text-left py-4 flex justify-between items-center 
          text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors"
        >
          {title}
          <span className="text-2xl">
            {isActive ? '−' : '+'}
          </span>
        </button>
        {isActive && (
          <div className="pb-4 text-gray-700 leading-relaxed">
            {children}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 md:p-10">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-3">
            Orders
          </h2>
          <FAQSection title="Where is my order?">
            <p>You can track your order by logging into your account or checking the shipping confirmation email sent to you. The email contains tracking information and estimated delivery date.</p>
          </FAQSection>

          <FAQSection title="What countries do you deliver to?">
            <p>Currently, we deliver to all major countries within India. We are working on expanding our international shipping options. Please contact our customer support for specific international delivery inquiries.</p>
          </FAQSection>

          <FAQSection title="Can I cancel my order?">
            <p>Orders can be canceled within 2 hours of placement. Once an order is processed or shipped, cancellation may not be possible. Please contact our customer support team immediately if you wish to cancel.</p>
          </FAQSection>

          <FAQSection title="How long will it take for my order to get delivered?">
            <p>Typical delivery times are 3-5 business days for metro areas and 5-7 business days for other locations within India. Actual delivery times may vary depending on your specific location and current logistics conditions.</p>
          </FAQSection>

          <FAQSection title="What are your delivery charges?">
            <p>Delivery charges vary based on order value and destination. Orders above ₹1500 typically qualify for free shipping. Exact charges will be calculated at checkout.</p>
          </FAQSection>

          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-3 mt-8">
            Returns & Exchange
          </h2>
          <FAQSection title="What is your return policy?">
            <p>We offer returns within 7 days of product delivery. Items must be unused, undamaged, and in original packaging. Certain items like intimate wear and personalized products are not eligible for return.</p>
          </FAQSection>

          <FAQSection title="What is your exchange policy?">
            <p>Exchanges are possible within 7 days of delivery. The item must be in original condition with all tags attached. Exchanges are subject to product availability and may incur additional shipping costs.</p>
          </FAQSection>

          <FAQSection title="How do I initiate an exchange?">
            <p>To initiate an exchange, contact our customer support team within 7 days of receiving your order. Provide your order number, the item you wish to exchange, and the reason for exchange.</p>
          </FAQSection>

          <FAQSection title="Do I ship my exchange order myself?">
            <p>No, we provide a prepaid return label for exchanges. Our customer support team will guide you through the process and provide all necessary documentation for the exchange.</p>
          </FAQSection>

          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-3 mt-8">
            Product & Sizing
          </h2>
          <FAQSection title="Do you have an in-person store?">
            <p>Currently, we operate exclusively online. We do not have physical retail locations. Our online platform provides detailed product information and sizing guides to help you make the best selection.</p>
          </FAQSection>

          <FAQSection title="What size am I?">
            <p>We recommend checking our detailed size chart for each product. Measurements are provided in inches and centimeters. If you're between sizes, we suggest ordering the larger size for comfort.</p>
          </FAQSection>

          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-3 mt-8">
            Payments
          </h2>
          <FAQSection title="What company are all payments directed to?">
            <p>All payments are processed through Freddiecity.com and our secure payment gateway. Transactions are handled with the highest level of security and encryption.</p>
          </FAQSection>

          <FAQSection title="What are the accepted methods of payment?">
            <p>We accept multiple payment methods including Credit Cards, Debit Cards, Net Banking, UPI, and Cash on Delivery (COD) for eligible orders.</p>
          </FAQSection>
        </div>
      </div>
    </div>

  {/* Footer */}
  <Footer />
  </div>
  );
}

export default FAQ;