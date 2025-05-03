import React from 'react';
import './ImageChangeBox.css';
import { EventType, submitEventData } from './apis/eventApi';

interface ImageChangeBoxProps {
  initialImage: string;
  hoverImage: string;
  title?: string;
  extraContent?: React.ReactNode;
}

const ImageChangeBox: React.FC<ImageChangeBoxProps> = ({ initialImage, hoverImage }) => {
  const handleMouseEnter = () => {
    submitEventData(EventType.HOVER_PROFILE_IMAGE);
  };

  return (
    <div className="image-change-box" onMouseEnter={handleMouseEnter}>
      <div className="image-container">
        <img src={initialImage} alt="Profile" className="profile-img default-img" />
        <img src={hoverImage} alt="Hover Profile" className="profile-img hover-img" />
      </div>
    </div>
  );
};

export default ImageChangeBox;