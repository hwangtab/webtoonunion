import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  icon?: string;
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="w-full border border-navy-500 bg-white p-4 rounded-md shadow-sm flex flex-col items-center text-center h-full">
      {icon && (
        <Image
          src={icon}
          alt="활동 아이콘"
          width={40}
          height={40}
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
          className="mb-4"
        />
      )}
      <h3 className="text-navy-900 font-sans font-bold text-lg mb-3">
        {title}
      </h3>
      <p className="text-gray-900 font-sans">{description}</p>
    </div>
  );
};

export default Card;
