import {
  SimpleGrid,
  IconButton,
  Heading,
  HStack,
  Image,
  Stack,
  Link,
  Box,
  Text,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Definion',
    description: 'A simple dictionary to search the definition of a word.',
    img: 'https://github.com/i-naeem/definion/raw/alpha/public/assets/demo.png',
  },
  {
    id: 2,
    title: 'Heyming',
    description:
      'Heyming is a Hamming Code encode which encodes given data in hamming code and decodes hamming code.',
    img: 'https://raw.githubusercontent.com/i-naeem/heyming/alpha/demo.jpeg',
  },
];
const App = (props) => {
  return (
    <SimpleGrid>
      <header>
        <HStack justify="space-between" py="4" px={[2, 10]}>
          <HStack as="nav" spacing="1">
            <IconButton aria-label="Github" icon={<FaGithub />} />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} />
            <IconButton aria-label="Linked in" icon={<FaLinkedinIn />} />
          </HStack>

          <HStack as="nav">
            <Link href="#about">About</Link>
            <Link href="#works">Works</Link>
          </HStack>
        </HStack>
      </header>

      <main>
        <Box px={[2, 10]}>
          <Stack height="80vh" justify="center">
            <Heading fontSize="6rem" lineHeight="0.9" textTransform="uppercase">
              Hi, I'm <br />
              Mohammad Naeem<sup>*</sup>
            </Heading>
            <Text color="gray" as="small">
              * ACTUALLY, I'M A WEBSITE. BUT I WAS BUILT BY LUKE MEYER.
            </Text>
          </Stack>

          <SimpleGrid columns={3} gap={1} id="works">
            {projects.map((project) => {
              return (
                <Stack p="2">
                  <Image src={project.img} alt={project.title} />
                  <Heading size="md">{project.title}</Heading>
                  <Text fontSize="sm">{project.description}</Text>
                </Stack>
              );
            })}
          </SimpleGrid>
        </Box>
      </main>
    </SimpleGrid>
  );
};

export default App;
