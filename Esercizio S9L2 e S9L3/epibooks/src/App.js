import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
// import AllTheBooks from './components/AllTheBooks';
// import SingleBook from './components/SingleBook';
import BookList from './components/BookList';
import Fantasy from './json/fantasy.json';


function App() {
  return (
    <div className="App bg-dark">
      <MyNav />
      <Welcome />
      {/* <AllTheBooks /> */}
      {/* <SingleBook /> */}
      <BookList Fantasy={Fantasy} />
      <MyFooter />
    </div>
  );
}

export default App;
