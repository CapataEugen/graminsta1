import './App.css';
import logo from './images/logo.png';

function App() {
  return (
    <div className="App">
      <div className='appHeader'>
        <img
          className='appHeaderImage'
          src={logo} height={50}
          alt="logo"
        />
      </div>
      <h1>Salutari</h1>
    </div>
  );
}

export default App;
