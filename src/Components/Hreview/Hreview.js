import React from 'react';
import './Hreview.css'

const Hreview = (props) => {
    const {name,description,rating}=props.review;
    
    console.log(props)
    return (
       
   
        <div className=" mb-2 ">
            
 <div className="grid grid-rows-1 grid-flow-col gap-1 bgclrr ml-36 mr-36 text-left p-10 rounded-md">
  <div>
      <div>
     <p className='text-base font-bold '> Reviewed by:<span className='txtcllr'> {name}</span> </p>

      </div>
      <div>
      <span className='font-semibold '>Description:</span> <span className='text-justify '>{description}</span> <br></br>
      <span className='font-semibold '> Rating: </span> <span className='txtcllr font-semibold'>{rating}.</span>

      </div>
  
  
  </div>
  
</div>
            
        </div>
    );
};

export default Hreview;