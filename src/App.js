import { Icon, Text } from '@chakra-ui/react';
import { FaGlobe } from 'react-icons/fa';

const App = (props) => {
  return (
    <Text p="3">
      Hello World <Icon as={FaGlobe} />
    </Text>
  );
};

export default App;
