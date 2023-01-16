import {
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react';
import React, {useState} from 'react';
import {Image} from '@chakra-ui/react';

import sofa from '../../assets/sofa.png';
import gif from '../../assets/gif.gif';
import victor from '../../assets/Vector.png';
import vectorStroke from '../../assets/VectorStroke.png';

export default function HomeScreen() {
  const [spin, SetSpin] = useState(false);
  return (
    <Container mt="36" maxW="80%">
      <Center pr={'40'}>
        <Button
          variant="link"
          colorScheme="teal"
          onClick={() => SetSpin(!spin)}>
          {spin ? <Image src={vectorStroke} /> : <Image src={victor} />}
        </Button>
      </Center>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem w="100%" h="10">
          {spin ? <Image src={gif} /> : <Image src={sofa} />}
        </GridItem>
        <GridItem w="100%" h="10">
          <Text fontSize="18" color="#271A45">
            CÓDIGO: 42404
          </Text>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            color="#271A45"
            textShadow="0px 4px 5px #808080">
            Sofá Margot II - Rosé
          </Text>
          <Text fontSize="18" color="#271A45" mt="2">
            R$ 4.000
          </Text>
          <Button variant="custom" borderRadius="full" mt="5">
            <Text color="#271A45">ADICIONAR À CESTA</Text>
          </Button>
        </GridItem>
      </Grid>
    </Container>
  );
}
