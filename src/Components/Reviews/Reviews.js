import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';


const Reviews = () => {
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=> setReviews(data))
    },[])
    return (
        <div>
            <div className="grid grid-rows-1 grid-flow-col gap-4">
  <div>
      {
          reviews.map(review=><Review key={review.id}
            review={review}
          ></Review>)

      }
  </div>
  
  
</div>
            
        </div>
    );
};

export default Reviews;