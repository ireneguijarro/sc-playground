import Button from './shared/Button';
import Title from './shared/Title';
import Wrapper from './components/Wrapper';
import Sidebar from './components/Sidebar';
import Container from './components/Container';
import { ThemeProvider } from 'styled-components';
import { theme } from './config/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Sidebar>Sidebar</Sidebar>
        <Container>
          <Title primary>Title with primary color</Title>
          <Title secondary>Title with secondary color</Title>
          <div>
            <Button size="sm">Small</Button>
            <Button>No size</Button>
            <Button size="lg">Large</Button>
          </div>
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
