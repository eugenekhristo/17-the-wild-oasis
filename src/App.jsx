import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/Input';

const H1 = styled.h1`
  font-size: 40px;
  font-weight: 900;
  color: var(--color-grey-900);
`;

const StyledApp = styled.div`
  padding: 32px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>Hello Oasis</H1>
        <Button onClick={() => alert('Checking in...')}>Check in</Button>
        <Button onClick={() => alert('Checking out...')}>Check out</Button>
        <Input placeholder="Sosi" defaultValue={'WTF MA FREN? 🔥'} />
      </StyledApp>
    </>
  );
}

export default App;
