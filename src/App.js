
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllMeal from './Components/Allmeal/AllMeal';
import BreakFast from './Components/BreakFast/BreakFast';
import Dinner from './Components/Dinner/Dinner';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Lunch from './Components/Lunch/Lunch';
import Signup from './Components/Signup/SignUp';



function App() {

  return (
    <div className="App">

      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} >
          <Route path='/home' element={<Home></Home>} />
          <Route path='all' element={<AllMeal></AllMeal>} />
          <Route path='breakfast' element={<BreakFast></BreakFast>} />
          <Route path='lunch' element={<Lunch></Lunch>} />
          <Route path='dinner' element={<Dinner></Dinner>} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup></Signup>} />
      </Routes>
    </div>
  );
}

export default App;
