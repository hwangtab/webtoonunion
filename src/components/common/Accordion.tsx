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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-4">
      {questions.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-3xl border border-white/60 bg-white/95 shadow-card"
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-navy-100/50 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary/40"
              aria-expanded={isOpen}
              aria-controls={`accordion-${index}`}
            >
              <span className="text-base font-semibold text-navy-900 sm:text-lg">
                {item.question}
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                {isOpen ? '–' : '+'}
              </span>
            </button>
            <div
              id={`accordion-${index}`}
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
              aria-hidden={!isOpen}
            >
              <div className="overflow-hidden px-6 pb-6 text-sm leading-relaxed text-gray-600 sm:text-base">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
