import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/Input';
import Heading from './ui/Heading';

const StyledApp = styled.div`
  padding: 32px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as={'h1'}>Hello Oasis</Heading>
        <Heading as={'h2'}>Great Buttons</Heading>
        <Heading as={'h3'}>Stylish Input</Heading>

        <Button onClick={() => alert('Checking in...')}>Check in</Button>
        <Button onClick={() => alert('Checking out...')}>Check out</Button>
        <Input placeholder="Sosi" defaultValue={'WTF MA FREN? 🔥'} />
      </StyledApp>
    </>
  );
}

export default App;
