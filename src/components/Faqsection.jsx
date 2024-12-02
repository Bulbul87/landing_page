import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "Non consectetur a erat nam at lectus urna duis?",
    answer: "This is the answer to the first question.",
  },
  {
    question:
      "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
    answer: "This is the answer to the second question.",
  },
  {
    question:
      "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?",
    answer: "This is the answer to the third question.",
  },
  {
    question: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
    answer: "This is the answer to the fourth question.",
  },
  {
    question:
      "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",
    answer: "This is the answer to the fifth question.",
  },
  {
    question:
      "Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?",
    answer: "This is the answer to the sixth question.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-teal-400 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque
        </p>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium text-gray-700">
                  {faq.question}
                </h3>
                <span className="text-gray-500">
                  {activeIndex === index ? <FiMinus /> : <FiPlus />}
                </span>
              </div>
              {activeIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
