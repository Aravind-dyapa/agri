import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Spinner,
  VStack,
  Container,
  Icon,
} from '@chakra-ui/react';
import { WiDaySunny, WiCloudy, WiRain, WiHumidity } from 'react-icons/wi';

const API_KEY = '502355ed9d9ac30a89a34dc735c9ddc2'; // Replace this

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
        setWeather(data);
        setLoading(false);
      },
      (err) => {
        console.error('Error getting location:', err);
        setLoading(false);
      }
    );
  }, []);

  const getWeatherIcon = (main) => {
    switch (main) {
      case 'Clear':
        return WiDaySunny;
      case 'Clouds':
        return WiCloudy;
      case 'Rain':
        return WiRain;
      default:
        return WiDaySunny;
    }
  };

  if (loading) {
    return (
      <Box textAlign="center" mt={10}>
        <Spinner size="xl" color="green.500" />
        <Text mt={4}>Loading weather data...</Text>
      </Box>
    );
  }

  if (!weather || !weather.weather) {
    return (
      <Box textAlign="center" mt={10}>
        <Text>Could not load weather data.</Text>
      </Box>
    );
  }

  const IconComponent = getWeatherIcon(weather.weather[0].main);

  return (
    <Container maxW="container.md" py={10}>
      <Heading textAlign="center" mb={6} color="green.700">
        Weather Forecast
      </Heading>
      <VStack spacing={4} borderWidth="1px" p={6} borderRadius="md" shadow="md">
        <Icon as={IconComponent} w={16} h={16} color="blue.500" />
        <Text fontSize="2xl" fontWeight="bold">
          {weather.name}, {weather.sys.country}
        </Text>
        <Text fontSize="xl">
          {weather.main.temp}°C - {weather.weather[0].description}
        </Text>
        <Text fontSize="md" color="gray.600">
          <WiHumidity style={{ display: 'inline', marginRight: '8px' }} />
          Humidity: {weather.main.humidity}%
        </Text>
      </VStack>
    </Container>
  );
}
