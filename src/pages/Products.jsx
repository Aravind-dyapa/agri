// src/pages/Products.jsx
import React from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Image,
  VStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Badge,
} from '@chakra-ui/react';

const productsData = {
  seeds: [
    {
      id: 1,
      name: 'Basmati Rice Seeds',
      description: 'High-quality aromatic basmati rice seeds, suitable for Indian climates.',
      price: 500,
      image:
        'https://cdn.pixabay.com/photo/2017/06/14/19/01/rice-2408391_1280.jpg',
    },
    {
      id: 2,
      name: 'Wheat Seeds',
      description: 'Certified wheat seeds ideal for Northern India.',
      price: 350,
      image:
        'https://cdn.pixabay.com/photo/2016/11/29/10/07/wheat-1869601_1280.jpg',
    },
    {
      id: 3,
      name: 'Maize Seeds',
      description: 'Disease-resistant maize seeds for robust growth.',
      price: 400,
      image:
        'https://cdn.pixabay.com/photo/2015/10/27/21/54/cornfield-1005643_1280.jpg',
    },
  ],
  equipment: [
    {
      id: 4,
      name: 'Hand Hoe',
      description: 'Durable hand hoe perfect for small scale soil cultivation.',
      price: 750,
      image:
        'https://cdn.pixabay.com/photo/2017/02/14/12/18/gardening-2061560_1280.jpg',
    },
    {
      id: 5,
      name: 'Manual Sprayer',
      description: 'Portable sprayer for pesticides and fertilizers.',
      price: 1200,
      image:
        'https://cdn.pixabay.com/photo/2019/10/31/10/48/farmer-4598623_1280.jpg',
    },
    {
      id: 6,
      name: 'Pruning Shears',
      description: 'Sharp pruning shears for trimming plants and shrubs.',
      price: 650,
      image:
        'https://cdn.pixabay.com/photo/2017/09/25/15/01/flowers-2788152_1280.jpg',
    },
  ],
  machinery: [
    {
      id: 7,
      name: 'Tractor',
      description: 'Reliable tractor suited for Indian farming conditions.',
      price: 350000,
      image:
        'https://cdn.pixabay.com/photo/2016/02/13/12/26/tractor-1197693_1280.jpg',
    },
    {
      id: 8,
      name: 'Rotavator',
      description: 'Efficient soil tilling machine for better crop yield.',
      price: 95000,
      image:
        'https://cdn.pixabay.com/photo/2018/03/08/10/24/tractor-3204419_1280.jpg',
    },
    {
      id: 9,
      name: 'Threshing Machine',
      description: 'Mechanized machine for grain threshing, saves time and effort.',
      price: 150000,
      image:
        'https://cdn.pixabay.com/photo/2016/01/27/09/00/wheat-1163219_1280.jpg',
    },
  ],
  pesticides: [
    {
      id: 10,
      name: 'Neem Oil',
      description: 'Natural pesticide and insect repellent.',
      price: 250,
      image:
        'https://cdn.pixabay.com/photo/2017/07/12/20/00/neem-2499588_1280.jpg',
    },
    {
      id: 11,
      name: 'Imidacloprid',
      description: 'Systemic insecticide widely used in Indian agriculture.',
      price: 900,
      image:
        'https://cdn.pixabay.com/photo/2019/05/15/17/07/pesticide-4206884_1280.jpg',
    },
    {
      id: 12,
      name: 'Fungicide Spray',
      description: 'Effective spray for fungal disease control in crops.',
      price: 700,
      image:
        'https://cdn.pixabay.com/photo/2018/08/09/19/11/spray-3597133_1280.jpg',
    },
  ],
};

export default function Products() {
  return (
    <Box maxW="7xl" mx="auto" px={6} py={10} bg="gray.50">
      <Heading mb={8} textAlign="center" color="green.700">
        Our Products
      </Heading>

      <Tabs variant="soft-rounded" colorScheme="green" isFitted>
        <TabList mb="1em" fontWeight="bold">
          <Tab>Seeds</Tab>
          <Tab>Equipment</Tab>
          <Tab>Machinery</Tab>
          <Tab>Pesticides</Tab>
        </TabList>

        <TabPanels>
          {Object.entries(productsData).map(([category, items]) => (
            <Box
              as={TabPanel}
              key={category}
              bg="white"
              p={6}
              borderRadius="md"
              shadow="md"
            >
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                {items.map(({ id, name, description, price, image }) => (
                  <Box
                    key={id}
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    shadow="sm"
                    _hover={{ shadow: 'xl' }}
                    bg="white"
                    transition="box-shadow 0.3s"
                  >
                    <Image
                      src={image}
                      alt={name}
                      objectFit="cover"
                      boxSize="250px"
                      width="100%"
                      fallbackSrc="https://via.placeholder.com/250?text=No+Image"
                    />
                    <VStack align="start" p={5} spacing={3}>
                      <Heading fontSize="xl" color="green.800">
                        {name}
                      </Heading>
                      <Text color="gray.700" noOfLines={3}>
                        {description}
                      </Text>
                      <Badge colorScheme="green" fontSize="lg" py={1} px={2}>
                        ₹ {price.toLocaleString('en-IN')}
                      </Badge>
                    </VStack>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
}
