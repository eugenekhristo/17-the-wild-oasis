import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 40px;
  font-weight: 900;
  background-color: orangered;
  color: white;
`;

const Button = styled.button`
  background-color: darkviolet;
  color: white;
  text-transform: uppercase;
  font-family: sans-serif;
  padding: 1.2rem 2rem;
  border-radius: 20px;
  cursor: pointer;
  margin: 20px;
  border: none;
  font-weight: 600;
  font-size: 20px;
`;

const Input = styled.input`
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 0.8rem 1.2rem;
  outline: none;
`;

const StyledApp = styled.div`
  background-color: palegoldenrod;
  padding: 32px;
`;

function App() {
  return (
    <StyledApp>
      <H1>Hello Oasis</H1>
      <Button onClick={() => alert('Checking in...')}>Check in</Button>
      <Button onClick={() => alert('Checking out...')}>Check out</Button>
      <Input placeholder="Sosi" defaultValue={'WTF MA FREN? 🔥'} />
    </StyledApp>
  );
}

export default App;
