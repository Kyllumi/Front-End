import './App.css';
import PrimoComp from './components/PrimoComp';
import SecondoComp from './components/SecondoComp';
import TerzoComp from './components/TerzoComp';

const users = [
  {id: 1, name: 'John', lastName: 'Doe', city: 'New York'},
  {id: 2, name: 'Jane', lastName: 'Red', city: 'Rome'},
]

function App() {
  return (
    <div className="App">
      <h1>Prima App React!</h1>
      <PrimoComp title="User List" list={users} />
      <hr />
      <SecondoComp title="User List" list={users} />
      <hr />
      <TerzoComp title="User List" list={users} />
    </div>
  );
}

export default App;
