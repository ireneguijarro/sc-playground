import Button from './shared/Button';
import Title from './shared/Title';
import Wrapper from './components/Wrapper';
import Sidebar from './components/Sidebar';
import Container from './components/Container';
import { ThemeProvider } from 'styled-components';
import { theme } from './config/theme';
import {Home} from '@styled-icons/boxicons-regular/Home';
import {Pets} from '@styled-icons/material/Pets';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Sidebar>
          <p>Sidebar</p>
          <Home size="24px" title="Home"/>
          <Pets size="24px" title="Pets"/>
        </Sidebar>
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
