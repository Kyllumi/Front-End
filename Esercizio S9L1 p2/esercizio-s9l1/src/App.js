import './App.css';
import ButtonComponent from "./components/buttonComp";
import ImageComponent from "./components/imgComp";
import Fetch from "./components/callComp";

function App() {
  return (
    <div className="App">
      <ButtonComponent btnText='Click!' />
      <ImageComponent src='https://picsum.photos/400' alt='image 1' />
      <Fetch />
    </div>
  );
}

export default App;
