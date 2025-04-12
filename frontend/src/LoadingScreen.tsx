import React from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from './assets/hello.json';
import './LoadingScreen.css';

const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-screen">
      <Lottie
        animationData={loadingAnimation}
        loop
        style={{ width: 500, height: 500 }}
      />
    </div>
  );
};

export default LoadingScreen;