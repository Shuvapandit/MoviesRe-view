import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/homepage.jpg'
import Hreview from '../Hreview/Hreview';


import './Home.css'

const Home = () => {
  const [reviews,setReviews]=useState([]);
  const slicedReview = reviews.slice(0, 3);
  console.log(slicedReview)
  useEffect(()=>{
    fetch('reviews.json')
    .then(res=>res.json())
    .then(data=> setReviews(data))
},[])




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

    <div className='mt-5'>
   <p className='text-5xl font-semibold mb-5'>Public Review!</p>
   {
     
     slicedReview.map(review=><Hreview key={review.id}
      review={review}>
     </Hreview>)
   }
   <Link to={'/reviews'}>
   <button className="rounded-full ... bg-teal-500 pl-4 pr-4 pt-2 pb-2 mb-5 text-white">See More!</button>
   </Link>
          
     </div>

            
        </div>
       

    );
};

export default Home;