import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Adduser from './components/Adduser/Adduser';
import Blog from './components/Pages/Blog/Blog';
import Home from './components/Pages/Home/Home';
import UpdateUser from './components/Update/UpdateUser'; 
import banner from './img/banner.jpg';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import Inventory from './components/Pages/Home/Inventory/Inventory';
import FruitDetails from './components/Pages/FruitDetails/FruitDetails';
import NotFound from './components/Shared/NotFound/NotFound';


function App() {
  return (
    <main>
      <Header> </Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}>
        </Route>
        {/* <Route path='/inventory' element={<Inventory></Inventory>}></Route> */}
        <Route path='/inventory/:InventoryId' element={<FruitDetails></FruitDetails>}></Route>
        <Route path = '*' element = {<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </main>
    
  );
}

export default App;
