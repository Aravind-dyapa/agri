import React from 'react';
import { Box, Text, Button, VStack, Avatar } from '@chakra-ui/react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  return (
    <Box p={6}>
      <VStack spacing={6}>
        <Text fontSize="2xl" fontWeight="bold">🌾 Welcome to Agri-Explore</Text>
        {user && (
          <VStack>
            <Avatar size="xl" src={user.photoURL} name={user.displayName} />
            <Text>{user.displayName || 'No name provided'}</Text>
            <Text>{user.email}</Text>
          </VStack>
        )}
        <VStack spacing={4}>
          <Button colorScheme="green" w="200px" onClick={() => navigate('/blogs')}>View Blogs</Button>
          <Button colorScheme="teal" w="200px" onClick={() => navigate('/marketplace')}>Marketplace</Button>
          <Button colorScheme="blue" w="200px" onClick={() => navigate('/prices')}>Crop Prices</Button>
          <Button colorScheme="purple" w="200px" onClick={() => navigate('/weather')}>Weather Forecast</Button>
          <Button colorScheme="orange" w="200px" onClick={() => navigate('/suggestion')}>Crop Suggestion</Button>
          <Button colorScheme="pink" w="200px" onClick={() => navigate('/articles')}>Multilingual Articles</Button>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Home;
