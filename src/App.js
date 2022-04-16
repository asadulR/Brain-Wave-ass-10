import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home/Home';
import Blog from './Components/Pages/Blog/Blog';
import Header from './Components/Header/Header';
import Login from './Components/Pages/Login/Login/Login';
import Signup from './Components/Pages/Login/Signup/Signup';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
