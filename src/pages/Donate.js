import React from 'react';
import { SimpleGrid, Card, CardBody, Image, Stack, Heading } from '@chakra-ui/react';
import roti from '../Assets/roti.jpg';
import wafers from '../Assets/wfers.jpg';
import pulses from '../Assets/pulses.jpg';
import pulav from '../Assets/pulav.jpg';
import chole from '../Assets/chole.jpg';
import prashad from '../Assets/prashad.jpg'
import atta from '../Assets/attajpg.jpg'

const Donate = () => {
  return (
    <>
      <SimpleGrid columns={[1, 2,3,4]} gap={6} p={4} margin='auto' >
        <Card maxW='sm'>
          <CardBody>
            <Image src={roti} alt='Roti Sabji' borderRadius='lg' />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Roti Sabji</Heading>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW='sm'>
          <CardBody>
            <Image src={pulses} alt='Pulses' borderRadius='lg' />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Pulses</Heading>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW='sm'>
          <CardBody>
            <Image src={pulav} alt='Pulav' borderRadius='lg' />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Pulav</Heading>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW='sm'>
          <CardBody>
            <Image src={chole} alt='Chole' borderRadius='lg' />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Chole</Heading>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW='sm'>
          <CardBody>
            <Image src={wafers} alt='Packed Food' borderRadius='lg' />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Packed Food</Heading>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW='sm'>
          <CardBody>
            <Image src={prashad} style={{aspectRatio:1/1}} alt='Packed Food' borderRadius='lg' />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>कड़ा प्रसाद (ਕੜਾ ਪ੍ਰਸ਼ਾਦ)</Heading>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW='sm'>
          <CardBody>
            <Image src={atta} alt='Packed Food' borderRadius='lg' />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Flour</Heading>
            </Stack>
          </CardBody>
        </Card>
      </SimpleGrid>
    </>
  );
};

export default Donate;
