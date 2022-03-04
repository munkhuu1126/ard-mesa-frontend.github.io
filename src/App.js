import Players from './components/players';
import './App.css';
import logo from './img/logo-02.png'
import footer from './img/Footer.png'

function App() {

  return (
    <div className="App ">
      <div className="">
      <div className = "flex items-end ">
      <img src={logo} alt="" width="200" className="" />
      <h1 className=" text-7xl ml-10 mb-10 font-bold text-white">ALPHA PLAYER VOTE</h1>
      </div>
      <Players/>
      </div>
      <footer className="flex justify-end mt-48">
        <img src={footer} alt="" className="w-auto" />
      </footer>
    </div>
  );
}

export default App;
