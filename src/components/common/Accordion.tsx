'use client';

import React, { useState } from 'react';

interface Question {
  question: string;
  answer: string;
}

interface AccordionProps {
  questions: Question[];
}

const Accordion: React.FC<AccordionProps> = ({ questions }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 w-full">
      {questions.map((item, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded bg-gray-100 overflow-hidden"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full text-left p-3 bg-gray-100 hover:bg-navy-100 focus:outline-none focus:ring-2 focus:ring-navy-500"
            aria-expanded={openIndex === index}
            aria-controls={`accordion-${index}`}
          >
            <h3 className="text-navy-900 font-sans font-semibold">
              {item.question}
            </h3>
          </button>
          <div
            id={`accordion-${index}`}
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
            aria-hidden={openIndex !== index}
          >
            <div className="p-3 bg-navy-100">
              <p className="text-gray-900 font-sans">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
