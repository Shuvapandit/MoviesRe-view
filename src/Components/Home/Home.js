import React from 'react';
import img from '../../images/homepage.jpg'
import './Home.css'

const Home = () => {
    return (
    <div>
    <div className="flex ... ">
 
  <div className="flex-auto w-64 ... text-left mt-24  ml-20">
      <h1 className='text-6xl '>Fell Free To Join With <span className='spnus'>Us!</span> </h1>
<h3 className='text-xl mt-9 capitalize'>We are here for you ,so that  you don't waste your  precious time watching bad movies.so why be late. Do subscribe Our page for Updated Movies news .</h3>
      
  </div>
  <div className="flex-auto w-32 ... ml-40 mt-24 hightimg">
  <img src={img} alt=""/>
  </div>
</div>
            
        </div>
    );
};

export default Home;