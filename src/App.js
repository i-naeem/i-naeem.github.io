import { Box, HStack, Icon, Link, SimpleGrid } from '@chakra-ui/react';
import { FaNeos } from 'react-icons/fa';

const App = (props) => {
  return (
    <SimpleGrid>
      <header>
        <HStack justify="space-between" py="4" px={[2, 10]}>
          <Icon as={FaNeos} fontSize="xl" />

          <HStack as="nav">
            <Link>About</Link>
            <Link>Works</Link>
          </HStack>
        </HStack>
      </header>

      <main>
        <Box px={[2, 10]}>Hello World</Box>
      </main>
    </SimpleGrid>
  );
};

export default App;
