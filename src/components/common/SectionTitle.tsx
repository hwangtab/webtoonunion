import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  eyebrow?: string;
  align?: 'left' | 'center';
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  className = '',
  eyebrow,
  align = 'center',
}) => {
  const alignment =
    align === 'left' ? 'items-start text-left' : 'items-center text-center';

  return (
    <div className={`flex flex-col ${alignment}`}>
      {eyebrow && (
        <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-sans text-2xl font-bold text-balance text-navy-900 sm:text-3xl ${
          align === 'left' ? 'text-left' : 'text-center'
        } ${className}`}
      >
        {children}
      </h2>
    </div>
  );
};

export default SectionTitle;
