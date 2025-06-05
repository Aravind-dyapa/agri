import React, { useState } from 'react';
import {
  Box,
  Heading,
  Input,
  Text,
  HStack,
  Button,
  SimpleGrid,
} from '@chakra-ui/react';

// Sample static market data
const marketsData = [
  {
    id: 1,
    name: 'Begumpet Market',
    city: 'Hyderabad',
    state: 'Telangana',
    contact: '040-12345678',
    days: 'Mon - Sat',
    time: '8 AM - 6 PM',
  },
  {
    id: 2,
    name: 'Azadpur Mandi',
    city: 'New Delhi',
    state: 'Delhi',
    contact: '011-87654321',
    days: 'Mon - Sat',
    time: '7 AM - 5 PM',
  },
  {
    id: 3,
    name: 'Krishi Mandi',
    city: 'Ahmedabad',
    state: 'Gujarat',
    contact: '079-23456789',
    days: 'Tue - Sun',
    time: '9 AM - 7 PM',
  },
  {
    id: 4,
    name: 'Koyambedu Market',
    city: 'Chennai',
    state: 'Tamil Nadu',
    contact: '044-34567890',
    days: 'Mon - Sat',
    time: '6 AM - 4 PM',
  },
  {
    id: 5,
    name: 'Koyla Bazaar',
    city: 'Raipur',
    state: 'Chhattisgarh',
    contact: '0771-4567890',
    days: 'Mon - Fri',
    time: '8 AM - 5 PM',
  },
];

export default function Markets() {
  const [searchCity, setSearchCity] = useState('');
  const [searchState, setSearchState] = useState('');

  const filteredMarkets = marketsData.filter((market) => {
    return (
      (searchCity === '' || market.city.toLowerCase().includes(searchCity.toLowerCase())) &&
      (searchState === '' || market.state.toLowerCase().includes(searchState.toLowerCase()))
    );
  });

  return (
    <Box maxW="container.lg" mx="auto" p={6}>
      <Heading mb={6} color="green.600">
        Local Markets
      </Heading>

      <HStack spacing={4} mb={6}>
        <Input
          placeholder="Search by City"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          bg="green.50"
          borderColor="green.400"
        />
        <Input
          placeholder="Search by State"
          value={searchState}
          onChange={(e) => setSearchState(e.target.value)}
          bg="green.50"
          borderColor="green.400"
        />
        <Button onClick={() => { setSearchCity(''); setSearchState(''); }} colorScheme="green">
          Clear
        </Button>
      </HStack>

      {filteredMarkets.length === 0 ? (
        <Text>No markets found for your search criteria.</Text>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {filteredMarkets.map((market) => (
            <Box
              key={market.id}
              borderWidth="1px"
              borderRadius="md"
              p={5}
              boxShadow="sm"
              _hover={{ boxShadow: 'md' }}
            >
              <Heading size="md" color="green.700" mb={2}>
                {market.name}
              </Heading>
              <Text><b>Location:</b> {market.city}, {market.state}</Text>
              <Text><b>Contact:</b> {market.contact}</Text>
              <Text><b>Days:</b> {market.days}</Text>
              <Text><b>Time:</b> {market.time}</Text>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}
