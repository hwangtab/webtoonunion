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
    <div className="w-full space-y-5">
      {questions.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article
            key={item.question}
            className={`group relative overflow-hidden rounded-3xl bg-white/95 shadow-card transition-all duration-300 ${
              isOpen
                ? 'bg-white ring-2 ring-primary/25 shadow-card-hover'
                : 'hover:-translate-y-[2px] hover:bg-white hover:shadow-card-hover'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left transition-colors duration-300 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary/40 sm:px-8 sm:py-7"
              aria-expanded={isOpen}
              aria-controls={`accordion-${index}`}
            >
              <div className="flex flex-1 flex-col gap-2">
                <span className="text-base font-semibold text-pretty text-navy-900 sm:text-lg">
                  {item.question}
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.35em] text-primary/60 sm:hidden">
                  {isOpen ? '닫기' : '자세히 보기'}
                </span>
              </div>
              <span
                className={`relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                  isOpen
                    ? 'border-primary/0 bg-primary text-white shadow-card-hover'
                    : 'border-primary/15 bg-primary/8 text-primary group-hover:border-primary/25 group-hover:bg-primary/12'
                }`}
                aria-hidden
              >
                <span className="relative flex h-4 w-4 items-center justify-center text-current">
                  <span className="absolute h-0.5 w-full rounded-full bg-current transition-all duration-300" />
                  <span
                    className={`absolute h-full w-0.5 rounded-full bg-current transition-transform duration-300 ${
                      isOpen ? 'scale-y-0 opacity-0' : 'scale-y-100 opacity-100'
                    }`}
                  />
                </span>
              </span>
            </button>
            <div
              id={`accordion-${index}`}
              className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                isOpen
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
              }`}
              aria-hidden={!isOpen}
            >
              <div className="overflow-hidden border-t border-primary/10 px-6 pb-6 pt-6 text-sm leading-relaxed text-pretty text-gray-600 sm:px-8 sm:pb-8">
                {item.answer}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Accordion;
