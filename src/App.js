import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Pages/Blog/Blog';

function App() {
  return (
    <div className="">
      <Blog> </Blog>
      <Routes>
        <Route path='/blog' element= {<Blog></Blog>}>
        </Route>
     </Routes>
    </div>
  );
}

export default App;
