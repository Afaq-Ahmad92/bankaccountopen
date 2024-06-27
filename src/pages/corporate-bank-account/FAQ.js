import React, { useState } from "react";
import "../../Components/styles/CBA/FAQ.css";
const faqData = [
  {
    question:
      "What accounting and bookkeeping services does Lawbridge Accounting Services offer?",
    answer:
      "We provide comprehensive accounting and bookkeeping solutions tailored for small to medium-sized businesses. Our services include financial reporting, payroll management, VAT and tax services, and compliance audits. We ensure that our services cater to both local businesses in the UAE and international businesses with a registered presence in the UAE.",
  },
  {
    question: "What is our pricing structure?",
    answer:
      "We offer flexible and affordable pricing with monthly retainer packages to suit your unique business situation. Prices depend on the specific accounting and bookkeeping needs of your business. Each client engagement begins with a free initial consultation to assess specific requirements and provide a customized service plan. So feel free to go ahead and request your Free Consultation.",
  },
  {
    question:
      "How does Lawbridge ensure compliance with UAE laws and regulations?",
    answer:
      "Our team is proficient in local and international accounting standards and regulatory requirements. All accountants are certified and bring years of experience to ensure your business stays compliant with UAE laws, including VAT and financial reporting standards.",
  },
  {
    question: "How do I use Tailwind CSS in Next.js?",
    answer:
      "To use Tailwind CSS in Next.js, you need to install Tailwind, configure it, and include it in your global CSS file.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="FAQMain">
      <h6>Frequently Asked Questions</h6>
      <section className="FAQS">
        {faqData.map((item, index) => (
          <section key={index} className="bg-white shadow-md rounded-lg p-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center"
            >
              <span className="font-semibold">{item.question}</span>
              <span className="ml-2">{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="mt-2 text-gray-700">{item.answer}</div>
            )}
          </section>
        ))}
      </section>
    </section>
  );
};

export default FAQ;
