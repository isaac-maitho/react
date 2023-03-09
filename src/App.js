import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title ='Welcome to the new blog';
  const link = "https://www.google.com";
  return (
    <div className="App">
    <Navbar></Navbar>
      <div className="content">
        <h1>{title}</h1>
        <Home></Home>
        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
