import Players from './components/players';
import './App.css';
import logo from './img/logo-02.png'
import footer from './img/Footer.png'

function App() {

  return (
    <div className="App">
      <div className = "flex items-end">
      <img src={logo} alt="" width="200" className="ml-24" />
      <h1 className=" text-7xl ml-10 mb-10 font-bold text-white">ALPHA PLAYER VOTE</h1>
      </div>
      <Players/>
      <div className="flex justify-end mt-40">
        <img src={footer} alt="" />
      </div>
    </div>
  );
}

export default App;
