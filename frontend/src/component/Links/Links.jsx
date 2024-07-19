import React from 'react'
import {Link} from 'react-router-dom';
import './Links.css'
import ProductList from '../Products/ProductList';
import VideoPlayer from './VideoPlayer';
import SliderS from '../outel/sliderS';
import CategoryLinks from './CategoryLinks';
export default function Links() {
  return (
   <div className="All">
    <div className="Video" id='vid1'>
        <VideoPlayer/>
    </div>
 <div className="all">

  <div className="image1"> 
     <CategoryLinks/>
     </div> 
 


 </div>
 <div className="Video" id='vid2'>
    <VideoPlayer/>
    </div>
    <div>
        <img src="public\SOLDE\紅底搭配重點白字很吸睛.jpg" alt="" id='img6' />
    </div>
    <div className="product">
        <ProductList/>
    </div>
  
 </div>
  )
}
