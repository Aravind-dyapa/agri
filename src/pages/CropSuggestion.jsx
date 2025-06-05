// src/pages/CropSuggestion.jsx
import React, { useState } from 'react';
import {
  Box,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Button,
  VStack,
  Select,
  Text,
} from '@chakra-ui/react';

const CropSuggestion = () => {
  const [soilType, setSoilType] = useState('');
  const [season, setSeason] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleSuggest = () => {
    if (soilType === 'black' && season === 'kharif') {
      setSuggestion('Recommended Crop: Cotton 🌿');
    } else if (soilType === 'alluvial' && season === 'rabi') {
      setSuggestion('Recommended Crop: Wheat 🌾');
    } else if (soilType === 'red' && season === 'kharif') {
      setSuggestion('Recommended Crop: Millets 🌱');
    } else {
      setSuggestion('Recommended Crop: Maize 🌽');
    }
  };

  return (
    <Box p={8} maxW="lg" mx="auto">
      <Heading mb={6}>Crop Suggestion Tool</Heading>
      <VStack spacing={4}>
        <FormControl>
          <FormLabel>Soil Type</FormLabel>
          <Select
            placeholder="Select soil type"
            value={soilType}
            onChange={(e) => setSoilType(e.target.value)}
          >
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="alluvial">Alluvial</option>
            <option value="laterite">Laterite</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Season</FormLabel>
          <Select
            placeholder="Select season"
            value={season}
            onChange={(e) => setSeason(e.target.value)}
          >
            <option value="kharif">Kharif</option>
            <option value="rabi">Rabi</option>
            <option value="zaid">Zaid</option>
          </Select>
        </FormControl>
        <Button colorScheme="green" onClick={handleSuggest}>
          Suggest Crop
        </Button>
        {suggestion && <Text fontWeight="bold">{suggestion}</Text>}
      </VStack>
    </Box>
  );
};

export default CropSuggestion;
