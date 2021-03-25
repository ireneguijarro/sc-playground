import Button from './components/Button'
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Wrapper>
      <Button size="sm">Small</Button>
      <Button>No size</Button>
      <Button size="lg">Large</Button>
    </Wrapper>
  );
}

export default App;
