import React, { useEffect } from 'react';

const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center">
      <div className="animate-fadeIn text-center">
        <div className="text-6xl md:text-8xl font-bold text-yellow-500 mb-4 tracking-tight">
          RevvX
        </div>
        <p className="text-white text-xl md:text-2xl font-light tracking-wide">
          Drive Your Next
        </p>
      </div>
      
      {/* Loading indicator */}
      <div className="absolute bottom-12 flex space-x-1">
        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0ms'}}></div>
        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '200ms'}}></div>
        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '400ms'}}></div>
      </div>
    </div>
  );
};

export default SplashScreen;