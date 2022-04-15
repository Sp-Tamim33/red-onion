
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/SignUp';



function App() {
  return (
    <div className="App">

      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup></Signup>} />
      </Routes>
    </div>
  );
}

export default App;
