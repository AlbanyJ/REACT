import React, { useState } from 'react';
import { Search, Camera, Check } from 'lucide-react';
import Button from './ui/Button';

const Onboarding = ({ onComplete }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: 'Find Cars Fast',
      description: 'Browse thousands of verified vehicles from trusted sellers',
      icon: Search
    },
    {
      title: 'Post in Seconds',
      description: 'List your car quickly with our streamlined posting process',
      icon: Camera
    },
    {
      title: 'Verified Sellers',
      description: 'Connect with authenticated sellers for safe transactions',
      icon: Check
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const skipOnboarding = () => {
    onComplete();
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col safe-top safe-bottom">
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-sm">
          <div className="mb-8">
            <slides[currentSlide].icon 
              size={80} 
              className="text-yellow-500 mx-auto mb-6 animate-fadeIn" 
            />
            <h2 className="text-3xl font-bold mb-4 animate-fadeIn">
              {slides[currentSlide].title}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed animate-fadeIn">
              {slides[currentSlide].description}
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 pb-8">
        {/* Progress dots */}
        <div className="flex justify-center mb-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`
                w-3 h-3 rounded-full mx-1 transition-all duration-300
                ${index === currentSlide ? 'bg-yellow-500 scale-110' : 'bg-gray-600 hover:bg-gray-500'}
              `}
            />
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="flex gap-4">
          {currentSlide < slides.length - 1 ? (
            <>
              <Button 
                variant="ghost" 
                onClick={skipOnboarding} 
                className="flex-1"
              >
                Skip
              </Button>
              <Button 
                onClick={nextSlide} 
                className="flex-1"
              >
                Next
              </Button>
            </>
          ) : (
            <Button 
              onClick={onComplete} 
              size="lg" 
              className="w-full"
            >
              Get Started
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;