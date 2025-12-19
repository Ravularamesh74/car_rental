const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Car = require('./models/Car');

dotenv.config();

const cars = [
  {
    brand: 'BMW',
    model: '7 Series',
    year: 2023,
    type: 'LUXURY',
    dailyRate: 4550,
    registrationNumber: 'BMW001',
    seatingCapacity: 5,
    fuelType: 'PETROL',
    transmission: 'AUTOMATIC',
    mileage: '15 kmpl',
    features: ['Leather Seats', 'Sunroof', 'Premium Sound System', 'Climate Control'],
  },
  {
    brand: 'Audi',
    model: 'A8',
    year: 2023,
    type: 'LUXURY',
    dailyRate: 4300,
    registrationNumber: 'AUDI001',
    seatingCapacity: 5,
    fuelType: 'PETROL',
    transmission: 'AUTOMATIC',
    mileage: '14 kmpl',
    features: ['Leather Seats', 'Panoramic Sunroof', 'Bang & Olufsen Sound', 'Ambient Lighting'],
  },
  {
    brand: 'Toyota',
    model: 'Innova Crysta',
    year: 2023,
    type: 'SUV',
    dailyRate: 4180,
    registrationNumber: 'TOYOTA001',
    seatingCapacity: 8,
    fuelType: 'DIESEL',
    transmission: 'AUTOMATIC',
    mileage: '12 kmpl',
    features: ['7 Seater', 'Cruise Control', 'Electric Seats', 'Power Windows'],
  },
  {
    brand: 'Mercedes',
    model: 'C-Class',
    year: 2022,
    type: 'SEDAN',
    dailyRate: 4220,
    registrationNumber: 'MERC001',
    seatingCapacity: 5,
    fuelType: 'PETROL',
    transmission: 'AUTOMATIC',
    mileage: '16 kmpl',
    features: ['Leather Interior', 'Touchscreen Infotainment', 'Dual Zone Climate', 'Rear Parking Camera'],
  },
  {
    brand: 'Honda',
    model: 'Civic',
    year: 2022,
    type: 'SEDAN',
    dailyRate: 3140,
    registrationNumber: 'HONDA001',
    seatingCapacity: 5,
    fuelType: 'PETROL',
    transmission: 'MANUAL',
    mileage: '18 kmpl',
    features: ['Alloy Wheels', 'Power Steering', 'Air Conditioning', 'CD Player'],
  },
  {
    brand: 'Ford',
    model: 'Mustang',
    year: 2023,
    type: 'SPORTS',
    dailyRate: 3000,
    registrationNumber: 'FORD001',
    seatingCapacity: 5,
    fuelType: 'PETROL',
    transmission: 'AUTOMATIC',
    mileage: '12 kmpl',
    features: ['Sports Suspension', 'Turbo Engine', 'Leather Seats', 'Touchscreen'],
  },
  {
    brand: 'Toyota',
    model: 'Fortuner',
    year: 2022,
    type: 'SUV',
    dailyRate: 4110,
    registrationNumber: 'TOYOTA002',
    seatingCapacity: 7,
    fuelType: 'DIESEL',
    transmission: 'AUTOMATIC',
    mileage: '11 kmpl',
    features: ['4WD', 'Roof Bars', 'Cruise Control', 'Keyless Entry'],
  },
  {
    brand: 'Jeep',
    model: 'Compass',
    year: 2022,
    type: 'SUV',
    dailyRate: 3140,
    registrationNumber: 'JEEP001',
    seatingCapacity: 5,
    fuelType: 'PETROL',
    transmission: 'AUTOMATIC',
    mileage: '14 kmpl',
    features: ['4WD Capable', 'Touchscreen', 'Rear Parking Sensor', 'Cruise Control'],
  },
  {
    brand: 'Kia',
    model: 'Seltos',
    year: 2023,
    type: 'SUV',
    dailyRate: 1800,
    registrationNumber: 'KIA001',
    seatingCapacity: 5,
    fuelType: 'PETROL',
    transmission: 'MANUAL',
    mileage: '17 kmpl',
    features: ['Touchscreen', 'Rear Camera', 'ABS', 'Air Conditioning'],
  },
  {
    brand: 'Maruti',
    model: 'Swift Dzire',
    year: 2022,
    type: 'SEDAN',
    dailyRate: 2160,
    registrationNumber: 'MARUTI001',
    seatingCapacity: 5,
    fuelType: 'PETROL',
    transmission: 'MANUAL',
    mileage: '19 kmpl',
    features: ['Power Steering', 'Air Conditioning', 'CD Player', 'Electric Mirrors'],
  },
];

async function seedCars() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/car-rental');
    console.log('Connected to MongoDB');

    // Clear existing cars
    await Car.deleteMany({});
    console.log('Cleared existing cars');

    // Insert new cars
    const result = await Car.insertMany(cars);
    console.log(`✓ Seeded ${result.length} cars successfully`);

    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error seeding cars:', error);
    process.exit(1);
  }
}

seedCars();
