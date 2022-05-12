import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Blog from './components/Pages/Blog/Blog';
import Home from './components/Pages/Home/Home';
import UpdateUser from './components/Update/UpdateUser';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import Inventory from './components/Pages/Home/Inventory/Inventory';
import FruitDetails from './components/Pages/FruitDetails/FruitDetails';
import NotFound from './components/Shared/NotFound/NotFound';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import RequireAuth from './components/Pages/Login/RequireAuth/RequireAuth';
import Checkout from './components/Pages/Checkout/Checkout/Checkout';
import Addfruit from './components/Addfruit/Addfruit';
import Allinventory from './components/Pages/Home/AllInventory/Allinventory';
import { ToastContainer } from 'react-toastify';
import Orders from './components/Pages/Orders/Orders';


function App() {
  return (
    <main>
      <Header> </Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}>
        </Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/allinventory' element = {<Allinventory></Allinventory>}></Route>
        <Route path='/inventory/:InventoryId' element={
          <RequireAuth>
            <FruitDetails></FruitDetails>
          </RequireAuth>
        }></Route>
        <Route path='/checkout/:InventoryId' element={
          <RequireAuth>
            <Checkout> </Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/addFruit' element={
          <RequireAuth>
            <Addfruit></Addfruit>
          </RequireAuth>
        }></Route>
        <Route path='/orders' element={
          <RequireAuth>
            <Orders></Orders>
          </RequireAuth>
        }></Route>
        <Route path='/update' element = {<UpdateUser></UpdateUser>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </main>

  );
}

export default App;
