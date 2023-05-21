import {
  useClipboard,
  SimpleGrid,
  IconButton,
  Heading,
  Button,
  HStack,
  Image,
  Stack,
  Link,
  Box,
  Text,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const projects = [
  {
    id: 1,
    title: 'Definion',
    link: 'https://github.com/i-naeem/definion',
    description: 'A simple dictionary to search the definition of a word.',
    img: 'https://github.com/i-naeem/definion/raw/alpha/public/assets/demo.png',
  },
  {
    id: 2,
    title: 'Heyming',
    link: 'https://github.com/i-naeem/heyming',
    description:
      'Heyming is a Hamming Code encode which encodes given data in hamming code and decodes hamming code.',
    img: 'https://raw.githubusercontent.com/i-naeem/heyming/alpha/demo.jpeg',
  },
];

const App = (props) => {
  const { onCopy } = useClipboard('i-naeem@protonmail.com');

  return (
    <SimpleGrid>
      <header>
        <HStack justify="space-between" py="4" px={[2, 10]}>
          <HStack as="nav" spacing="1">
            <IconButton
              as="a"
              target="_blank"
              aria-label="Github"
              icon={<FaGithub />}
              href="https://github.com/i-naeem"
            />
            <IconButton
              as="a"
              target="_blank"
              icon={<FaTwitter />}
              aria-label="Twitter"
              colorScheme="twitter"
              href="https://twitter.com/nemoxhan"
            />
            <IconButton
              as="a"
              target="_blank"
              colorScheme="blue"
              aria-label="Linked in"
              icon={<FaLinkedinIn />}
              href="https://www.linkedin.com/in/nemo-xhan"
            />
          </HStack>

          <HStack as="nav">
            <Link href="#works">Works</Link>
            <ColorModeSwitcher />
          </HStack>
        </HStack>
      </header>

      <main>
        <Box px={[2, 10]}>
          <Stack height="80vh" justify="center">
            <Heading
              fontSize={['2rem', '4rem', '6rem']}
              lineHeight="0.9"
              textTransform="uppercase"
            >
              Hi, I'm <br />
              Muhammad Naeem<sup>*</sup>
            </Heading>
            <Text color="gray" as="small" textTransform="uppercase">
              * a computer science enthusiast and life long learner.
            </Text>
          </Stack>

          <SimpleGrid columns={[1, 1, 2, 3]} gap={1} id="works" minH="60vh">
            {projects.map((project) => {
              return (
                <Stack p="2" key={project.id}>
                  <Link
                    as="a"
                    href={project.link}
                    target="_blank"
                    style={{ textDecoration: 'none' }}
                  >
                    <Image src={project.img} alt={project.title} mb="2" />
                    <Heading size="md">{project.title}</Heading>
                    <Text fontSize="sm">{project.description}</Text>
                  </Link>
                </Stack>
              );
            })}
          </SimpleGrid>
        </Box>
      </main>
      <footer>
        <Stack
          direction={['column', 'row']}
          justify="space-between"
          p={[2, 10]}
        >
          <Button onClick={onCopy} size="xs">
            {' '}
            i-naeem@protonmail.com
          </Button>

          <Text textTransform="uppercase" align="center" fontSize="xs">
            Words + Images + Code &copy; {new Date().getFullYear()} Mohammad
            Naeem
          </Text>
        </Stack>
      </footer>
    </SimpleGrid>
  );
};

export default App;
