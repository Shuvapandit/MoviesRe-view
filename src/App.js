
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
    <Header></Header>
      <Routes>
        <Route></Route>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/reviews' element={<Reviews></Reviews>} ></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>} ></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='*'></Route>
        
       
      </Routes>
     
    </div>
  );
}

export default App;
