import { Container } from 'react-bootstrap';
import './App.css';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';

function App() {
  return (
    <>
      <MyNav />
      <Container className="my-5">
        <Welcome />
        <AllTheBooks />
      </Container>
      <MyFooter /> 
    </>
  );
}

export default App;
