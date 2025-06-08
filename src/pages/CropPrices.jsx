import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Select,
  Spinner,
  Center,
  Text,
  VStack,
} from '@chakra-ui/react';

// Sample states and crops (you can expand)
const states = ['All India', 'Telangana', 'Andhra Pradesh', 'Karnataka', 'Maharashtra'];
const crops = ['Rice', 'Wheat', 'Maize', 'Sugarcane', 'Cotton'];

export default function CropPrices() {
  const [selectedState, setSelectedState] = useState('All India');
  const [selectedCrop, setSelectedCrop] = useState('Rice');
  const [prices, setPrices] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fake API fetch simulation — Replace with real API or Firestore later
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      // Sample data: crop prices in ₹ per quintal
      const sampleData = {
        'All India': {
          Rice: 2100,
          Wheat: 2000,
          Maize: 1800,
          Sugarcane: 3200,
          Cotton: 4500,
        },
        Telangana: {
          Rice: 2200,
          Wheat: 2100,
          Maize: 1900,
          Sugarcane: 3300,
          Cotton: 4500,
        },
        'Andhra Pradesh': {
          Rice: 2150,
          Wheat: 2050,
          Maize: 1850,
          Sugarcane: 3250,
          Cotton: 4550,
        },
        Karnataka: {
          Rice: 2250,
          Wheat: 2150,
          Maize: 1950,
          Sugarcane: 3350,
          Cotton: 4650,
        },
        Maharashtra: {
          Rice: 2300,
          Wheat: 2200,
          Maize: 2000,
          Sugarcane: 3400,
          Cotton: 4700,
        },
      };

      setPrices(sampleData[selectedState]);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [selectedState]);

  return (
    <Box maxW="800px" mx="auto" mt={8} p={4}>
      <Heading mb={6} textAlign="center" color="green.700">
        Daily Crop Prices (₹ per quintal)
      </Heading>

      <VStack spacing={4} mb={6}>
        <Select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          maxW="300px"
        >
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </Select>

        <Select
          value={selectedCrop}
          onChange={(e) => setSelectedCrop(e.target.value)}
          maxW="300px"
        >
          {crops.map((crop) => (
            <option key={crop} value={crop}>
              {crop}
            </option>
          ))}
        </Select>
      </VStack>

      {loading ? (
        <Center>
          <Spinner size="xl" />
        </Center>
      ) : prices ? (
        <Box bg="green.50" p={6} borderRadius="md" textAlign="center" boxShadow="md">
          <Text fontSize="xl" fontWeight="bold" color="green.900">
            {selectedCrop} price in {selectedState}:
          </Text>
          <Text fontSize="3xl" fontWeight="extrabold" color="green.700" mt={2}>
            ₹ {prices[selectedCrop]}
          </Text>
        </Box>
      ) : (
        <Text>No data available.</Text>
      )}
    </Box>
  );
}
