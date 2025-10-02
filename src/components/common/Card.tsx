import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  icon?: string;
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <article className="group relative flex h-full flex-col rounded-3xl bg-white/90 p-6 text-left shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-navy-900 sm:text-xl">{title}</h3>
        {icon && (
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Image
              src={icon}
              alt="활동 아이콘"
              width={28}
              height={28}
              sizes="(max-width: 768px) 48px, 28px"
              loading="lazy"
            />
          </span>
        )}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-pretty text-gray-600 sm:text-base">
        {description}
      </p>
      <div className="mt-6 h-[3px] w-10 rounded-full bg-yellow-500 transition-all duration-200 group-hover:w-16" />
    </article>
  );
};

export default Card;
