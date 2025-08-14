import React, { useState } from 'react';
import { Search, Heart } from 'lucide-react';
import Card from './ui/Card';
import Input from './ui/Input';
import { mockCars, categories } from '../data/mockData';

const HomePage = ({ onCarSelect, isDarkMode, onToggleDarkMode }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [likedCars, setLikedCars] = useState(new Set());

  const filteredCars = mockCars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         car.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || 
                           car.name.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  const toggleLike = (carId, e) => {
    e.stopPropagation(); // Prevent card click
    const newLikedCars = new Set(likedCars);
    if (newLikedCars.has(carId)) {
      newLikedCars.delete(carId);
    } else {
      newLikedCars.add(carId);
    }
    setLikedCars(newLikedCars);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black pb-20 safe-top">
      {/* Header */}
      <div className="bg-white dark:bg-black px-6 py-4 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-black dark:text-white">RevvX</h1>
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <Input
            placeholder="Search cars, brands, models"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-6 py-4">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 text-sm font-medium
                ${selectedCategory === category
                  ? 'bg-yellow-500 text-black shadow-md'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Results header */}
      <div className="px-6 mb-4">
        <p className="text-gray-600 dark:text-gray-400">
          {filteredCars.length} car{filteredCars.length !== 1 ? 's' : ''} found
        </p>
      </div>

      {/* Car Listings */}
      <div className="px-6 space-y-4">
        {filteredCars.length > 0 ? (
          filteredCars.map(car => (
            <Card 
              key={car.id} 
              onClick={() => onCarSelect(car)} 
              className="overflow-hidden"
            >
              <div className="aspect-video relative">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={(e) => toggleLike(car.id, e)}
                  className="absolute top-4 right-4 p-2 bg-black/20 rounded-full backdrop-blur-sm hover:bg-black/30 transition-colors"
                >
                  <Heart 
                    className={`${likedCars.has(car.id) ? 'text-red-500 fill-red-500' : 'text-white'}`} 
                    size={20} 
                  />
                </button>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-black dark:text-white line-clamp-1">
                    {car.name}
                  </h3>
                  <span className="text-xl font-bold text-yellow-500 ml-2">
                    {car.price}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {car.location}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full text-gray-600 dark:text-gray-400">
                    {car.specs.year}
                  </span>
                  <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full text-gray-600 dark:text-gray-400">
                    {car.specs.mileage}
                  </span>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <div className="text-center py-12">
            <Search className="mx-auto mb-4 text-gray-400" size={48} />
            <p className="text-gray-600 dark:text-gray-400 text-lg">No cars found</p>