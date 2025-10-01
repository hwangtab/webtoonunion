import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  className = '',
  target = '',
}) => {
  const baseClasses =
    'bg-yellow-500 text-navy-900 font-sans font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors duration-200 text-center block w-full sm:w-auto text-sm sm:text-base';

  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={`${baseClasses} ${className}`}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
