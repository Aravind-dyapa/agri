// src/components/NavBar.jsx
import React from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Text,
  Link,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const Links = [
  { name: 'Home', path: '/' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'Products', path: '/products' },
  { name: 'Markets', path: '/markets' },
  { name: 'Crop Prices', path: '/crop-prices' },
  { name: 'Weather', path: '/weather' },
  { name: 'Demand Forecast', path: '/demand' },
  { name: 'Crop Suggestion', path: '/suggestion' }, // ✅ Add this line
];



const NavLink = ({ children, to }) => (
  <RouterLink to={to}>
    <Button variant="ghost" _hover={{ bg: 'green.100' }}>
      {children}
    </Button>
  </RouterLink>
);

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/login');
  };

  return (
    <Box bg="green.500" px={4} color="white">
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Text fontWeight="bold">AgriExplore</Text>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLink key={link.name} to={link.path}>
                {link.name}
              </NavLink>
            ))}
            {/* Your additional explicit Products link */}
            <Link
              as={RouterLink}
              to="/products"
              mr={6}
              color="white"
              _hover={{ textDecoration: 'none', color: 'teal.200' }}
            >
              Products
            </Link>
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          {user ? (
            <>
              <Text fontSize="sm" mr={4}>
                Hello, {user.email}
              </Text>
              <Button onClick={handleLogout} colorScheme="red" size="sm">
                Logout
              </Button>
            </>
          ) : (
            <Button as={RouterLink} to="/login" colorScheme="blue" size="sm">
              Login
            </Button>
          )}
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link.name} to={link.path}>
                {link.name}
              </NavLink>
            ))}
            <Link
              as={RouterLink}
              to="/products"
              color="green.700"
              _hover={{ textDecoration: 'none', color: 'green.900' }}
            >
              Products
            </Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
