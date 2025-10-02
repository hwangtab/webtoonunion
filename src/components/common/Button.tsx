import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  className = '',
  target,
  rel,
  type = 'button',
}) => {
  const baseClasses =
    'inline-flex items-center justify-center break-keep rounded-full bg-yellow-500 px-6 py-3 text-sm font-semibold text-navy-900 shadow-card transition-all duration-200 hover:bg-yellow-600 hover:shadow-card-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500 sm:text-base';

  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={`${baseClasses} ${className}`}
        rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
