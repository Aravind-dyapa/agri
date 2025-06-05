// src/pages/Blogs.jsx
import React, { useState } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Text,
  VStack,
  StackDivider,
  Container,
} from '@chakra-ui/react';

const blogPosts = {
  en: [
    {
      id: 1,
      title: 'How to Improve Soil Health',
      content:
        'Healthy soil leads to better crop yield. Use crop rotation, composting, and minimal tillage for maintaining soil nutrients.',
    },
    {
      id: 2,
      title: 'Organic Pest Control Methods',
      content:
        'Natural predators like ladybugs and neem oil help control pests without harmful chemicals.',
    },
  ],
  hi: [
    {
      id: 1,
      title: 'मिट्टी की सेहत कैसे सुधारें',
      content:
        'स्वस्थ मिट्टी बेहतर फसल उत्पादन देती है। फसल रोटेशन, कंपोस्टिंग, और कम जुताई से मिट्टी की पोषण बनाए रखें।',
    },
    {
      id: 2,
      title: 'जैविक कीट नियंत्रण के तरीके',
      content:
        'नेम ऑयल और प्राकृतिक शिकारी जैसे लेडीबग कीटों को बिना हानिकारक रसायनों के नियंत्रित करते हैं।',
    },
  ],
  te: [
    {
      id: 1,
      title: 'మట్టిని ఎలా మెరుగుపరుచుకోవాలి',
      content:
        'ఆరోగ్యకరమైన మట్టి మంచి పంట దిగుబడికి దారి తీస్తుంది. పంట రోటేషన్, కంపోస్టింగ్, తక్కువ మట్టితుడతనం ఉపయోగించండి.',
    },
    {
      id: 2,
      title: 'సేంద్రీయ పురుగు నియంత్రణ పద్ధతులు',
      content:
        'లేడీబగ్స్ మరియు నిమ్ ఆయిల్ వంటి సహజ శత్రువులు రసాయనాలు లేకుండా పురుగులను నియంత్రిస్తాయి.',
    },
  ],
};

export default function Blogs() {
  const [language, setLanguage] = useState('en');

  return (
    <Container maxW="container.lg" py={10}>
      <Heading mb={6} textAlign="center" color="green.700">
        कृषि ब्लॉग / Agri Blogs / కృషి బ్లాగ్లు
      </Heading>

      <ButtonGroup spacing={4} mb={8} display="flex" justifyContent="center">
        <Button
          colorScheme={language === 'en' ? 'green' : 'gray'}
          onClick={() => setLanguage('en')}
        >
          English
        </Button>
        <Button
          colorScheme={language === 'hi' ? 'green' : 'gray'}
          onClick={() => setLanguage('hi')}
        >
          हिंदी
        </Button>
        <Button
          colorScheme={language === 'te' ? 'green' : 'gray'}
          onClick={() => setLanguage('te')}
        >
          తెలుగు
        </Button>
      </ButtonGroup>

      <VStack
        spacing={6}
        align="stretch"
        divider={<StackDivider borderColor="gray.200" />}
      >
        {blogPosts[language].map(({ id, title, content }) => (
          <Box key={id} p={4} bg="green.50" rounded="md" shadow="sm">
            <Heading size="md" mb={2} color="green.900">
              {title}
            </Heading>
            <Text fontSize="md" color="gray.700">
              {content}
            </Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
}
