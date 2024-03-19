import logo from './Components/Assets/img/logo.png';

import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';

function App() {
  return (
    <div>
      <img src={logo} alt="Logo" className="logo" />
      <LoginSignup/>
    </div>
  );
}

export default App;
