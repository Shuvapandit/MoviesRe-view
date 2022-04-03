
import { Route, Routes } from 'react-router-dom';
import './App.css';
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
        
        
       
      </Routes>
     
    </div>
  );
}

export default App;
