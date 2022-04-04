import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div >
            <div class="flex space-x-60 mt-5 mr-10">
  <div class="flex-auto w-50 h-14 text-left ml-10">
      < p className='text-xl font-bold'>Q1)What is context Api?</p>
      <p className='text-justify '><span className='font-bold'>Ans:</span>The React Context API was been around as an experimental feature for a while now but finally became safe to use in production last year, solving one major problem React problem — prop drilling.This new API solves one major problem–prop drilling. Even if you’re not familiar with the term, if you’ve worked on a React.js app, it has probably happened to you. Prop drilling is the processing of getting data from component A to component Z by passing it through multiple layers of intermediary React components.  </p>

  </div>
 
  <div class="flex-auto w-50 ... text-left mr-5 ">
      <p className='text-xl font-bold'>Q2)what is semantic tag ?</p>
      <p className='text-justify '><span className=' font-bold'> Ans:</span>Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way.HTML was originally created as a markup language to describe documents on the early internet. As the internet grew and was adopted by more people, its needs changed.Where the internet was originally intended for sharing scientific documents, now people wanted to share other things as well. Very quickly, people started wanting to make the web look nicer.Because the web was not initially built to be designed, programmers used different hacks to get things laid out in different ways. Rather than using the table table to describe information using a table, programmers would use them to position other elements on a page.</p>

    
  </div>
</div>

            
        </div>
    );
};

export default Blog;