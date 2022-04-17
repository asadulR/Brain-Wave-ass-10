import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home/Home';
import Blog from './Components/Pages/Blog/Blog';
import Header from './Components/Header/Header';
import Login from './Components/Pages/Login/Login/Login';
import Signup from './Components/Pages/Login/Signup/Signup';
import NotFound from './Components/Pages/NotFound/NotFound';
import CheckOut from './Components/Pages/CheckOut/CheckOut';
import RequireAuth from './Components/Auth/RequireAuth';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path="/checkout/:serviceId" element={
          <RequireAuth>
            <CheckOut />
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>



        <Route path='*' element={<NotFound />}></Route>

      </Routes>
    </div>
  );
}

export default App;
