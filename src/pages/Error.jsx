import React from 'react';
import { Flex, Box, Button, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <Flex
      align="center"
      justify="center"
      h="90vh" 
    >
      <Box
        textAlign="center"
        p="9"
        borderRadius="lg"
        boxShadow="md" 
        bg="white" 
        maxW="400px" 
      >
        <Heading as="h1" fontSize="4xl" color="red.500" mb="4">
          404
        </Heading>
        <Text fontSize="xl" fontWeight="bold" mb="4">
          Page Not Found!
        </Text>
        <Link to="/">
          <Button colorScheme="blue" size="md">
              Home
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Error;
