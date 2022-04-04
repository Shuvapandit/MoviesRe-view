import React from 'react';
import './Review.css'

const Review = (props) => {
    const {name,description,rating}=props.review;
    
    console.log(props)
    return (
        <div className=" mb-5 fullbg">
            
 <div className="grid grid-rows-1 grid-flow-col gap-1 bgclr ml-10 mr-10 text-left p-10 ">
  <div>
      <div>
     <p className='text-base font-bold'> Reviewed by:<span className='rvwn'> {name}</span> </p>

      </div>
      <div>
      <span className='font-semibold'>Description:</span> {description} <br></br>
      <span className='font-semibold'> Rating: </span> <span className='text-sky-500 font-semibold'>{rating}.</span>

      </div>
  
  
  </div>
  
</div>
            
        </div>
    );
};

export default Review;