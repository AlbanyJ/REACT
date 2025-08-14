export const mockCars = [
  {
    id: 1,
    name: 'BMW X5 2023',
    price: '$45,000',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
      'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800'
    ],
    seller: 'John Smith',
    description: 'Luxury SUV with premium features and low mileage. Well-maintained with full service history.',
    specs: { year: '2023', mileage: '12,000 mi', fuel: 'Gas', transmission: 'Automatic' }
  },
  {
    id: 2,
    name: 'Tesla Model S',
    price: '$52,000',
    location: 'Los Angeles, CA',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800',
    images: [
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800',
      'https://images.unsplash.com/photo-1571607388263-1044be4e4332?w=800'
    ],
    seller: 'Sarah Johnson',
    description: 'Electric luxury sedan with autopilot and premium interior. Perfect for eco-conscious drivers.',
    specs: { year: '2022', mileage: '8,500 mi', fuel: 'Electric', transmission: 'Single Speed' }
  },
  {
    id: 3,
    name: 'Audi A4 2024',
    price: '$38,000',
    location: 'Chicago, IL',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800',
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800'
    ],
    seller: 'Mike Davis',
    description: 'Compact luxury sedan with modern technology and excellent fuel efficiency.',
    specs: { year: '2024', mileage: '3,200 mi', fuel: 'Gas', transmission: 'Automatic' }
  },
  {
    id: 4,
    name: 'Mercedes C-Class',
    price: '$41,500',
    location: 'Miami, FL',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800',
    images: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800'
    ],
    seller: 'Emily Chen',
    description: 'Elegant sedan with luxury amenities and smooth performance.',
    specs: { year: '2023', mileage: '15,000 mi', fuel: 'Gas', transmission: 'Automatic' }
  }
];

export const categories = ['All', 'SUV', 'Sedan', 'Hatchback', 'Coupe', 'Truck', 'Electric'];

export const onboardingSlides = [
  {
    title: 'Find Cars Fast',
    description: 'Browse thousands of verified vehicles from trusted sellers',
    icon: 'Search'
  },
  {
    title: 'Post in Seconds',
    description: 'List your car quickly with our streamlined posting process',
    icon: 'Camera'
  },
  {
    title: 'Verified Sellers',
    description: 'Connect with authenticated sellers for safe transactions',
    icon: 'Check'
  }
];

export const mockUser = {
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+1 234 567 8900',
  joined: 'January 2024',
  listings: 3,
  reviews: 12,
  avatar: null
};