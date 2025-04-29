import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/Input';
import Heading from './ui/Heading';
import Row from './ui/Row';

const StyledApp = styled.div`
  padding: 32px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="vertical" style={{ marginBottom: '3.2rem' }}>
          <Heading as={'h1'}>Hello Oasis</Heading>
          <Heading as={'h2'}>Great Buttons</Heading>

          <Row gap="1.6">
            <Button onClick={() => alert('Checking in...')}>Check in</Button>
            <Button type="secondary" onClick={() => alert('Checking out...')}>
              Check out
            </Button>
          </Row>
        </Row>

        <Row type="vertical">
          <Heading as={'h3'}>Stylish Input</Heading>
          <Input placeholder="Sosi" defaultValue={'WTF MA FREN? 🔥'} />
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
