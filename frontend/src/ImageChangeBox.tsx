import React from 'react';
import './ImageChangeBox.css';

interface ImageChangeBoxProps {
  initialImage: string;
  hoverImage: string;
  title?: string;
  extraContent?: React.ReactNode;
}

const ImageChangeBox: React.FC<ImageChangeBoxProps> = ({ initialImage, hoverImage }) => {
  return (
    <div className="image-change-box">
      <div className="image-container">
        <img src={initialImage} alt="Profile" className="profile-img default-img" />
        <img src={hoverImage} alt="Hover Profile" className="profile-img hover-img" />
      </div>
    </div>
  );
};

export default ImageChangeBox;