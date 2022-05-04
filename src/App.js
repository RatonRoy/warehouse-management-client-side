import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Adduser from './components/Adduser/Adduser';
import Blog from './components/Pages/Blog/Blog';
import Home from './components/Pages/Home/Home';
import UpdateUser from './components/Update/UpdateUser'; 
import banner from './img/banner.jpg';


function App() {
  return (
    <div className="">
      {/* <Blog> </Blog> */}
      <div
        
      
      >

      </div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}>
        </Route>
        <Route path='/user/add' element={<Adduser></Adduser>}></Route>
        <Route path='/update/:id' element={<UpdateUser>
          
        </UpdateUser> }></Route>
      </Routes>
    </div>
  );
}

export default App;
