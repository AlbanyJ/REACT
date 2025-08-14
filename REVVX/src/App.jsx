import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Onboarding from './components/Onboarding';
import HomePage from './components/HomePage';
import CarDetails from './components/CarDetails';
import PostCar from './components/PostCar';
import UserProfile from './components/UserProfile';
import BottomNav from './components/ui/BottomNav';
import './styles/globals.css';

const RevvXApp = () => {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [selectedCar, setSelectedCar] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Screen navigation handlers
  const handleSplashComplete = () => setCurrentScreen('onboarding');
  const handleOnboardingComplete = () => setCurrentScreen('home');
  const handleCarSelect = (car) => {
    setSelectedCar(car);
    setCurrentScreen('carDetails');
  };
  const handleBackToHome = () => {
    setCurrentScreen('home');
    setSelectedCar(null);
  };
  const handleTabChange = (tab) => {
    if (tab === 'home') setCurrentScreen('home');
    else if (tab === 'post') setCurrentScreen('postCar');
    else if (tab === 'profile') setCurrentScreen('profile');
  };

  // Apply dark mode class to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen onComplete={handleSplashComplete} />;
      case 'onboarding':
        return <Onboarding onComplete={handleOnboardingComplete} />;
      case 'home':
        return (
          <>
            <HomePage 
              onCarSelect={handleCarSelect}
              isDarkMode={isDarkMode}
              onToggleDarkMode={toggleDarkMode}
            />
            <BottomNav activeTab="home" onTabChange={handleTabChange} />
          </>
        );
      case 'carDetails':
        return <CarDetails car={selectedCar} onBack={handleBackToHome} />;
      case 'postCar':
        return (
          <>
            <PostCar onBack={handleBackToHome} />
            <BottomNav activeTab="post" onTabChange={handleTabChange} />
          </>
        );
      case 'profile':
        return (
          <>
            <UserProfile onBack={handleBackToHome} />
            <BottomNav activeTab="profile" onTabChange={handleTabChange} />
          </>
        );
      default:
        return <SplashScreen onComplete={handleSplashComplete} />;
    }
  };

  return (
    <div className="font-sans">
      {renderScreen()}
    </div>
  );
};

export default RevvXApp;