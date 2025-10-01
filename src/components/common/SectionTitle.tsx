import React from 'react';

interface SectionTitleProps {
  children: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <h2 className="font-sans font-bold text-2xl md:text-3xl text-navy-900 mb-4 text-center">
      {children}
    </h2>
  );
};

export default SectionTitle;
