import './LogoHeading.css'
import React from 'react';


interface LogoHeadingProps {
  children: React.ReactNode;
  logoSrc: string;              // Required: path or URL to the image
  logoSize?: number;            // Optional: defaults to 24
  alt?: string;                 // Optional: image alt text
}

const LogoHeading: React.FC<LogoHeadingProps> = ({
  children,
  logoSrc,
}) => {
  return (
    <h3 className="text-xl text-gray-600 mb-6 company">
        <img src={logoSrc}/> 
        {children}
    </h3>
  );
};

export default LogoHeading;