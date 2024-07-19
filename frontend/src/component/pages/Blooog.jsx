import React from "react";
import { blog } from "./Blog";
import {useParams} from "react-router-dom";
import './Blooog.css';

function Blooog(){
const {nom} = useParams();
const post = blog.find((e)=>e.nom === nom);
    return(
        <div className="blooog">
            <div className="b1">
                <h1 className="b2">{post.nom}</h1>
                <img className="img1" src={post.photo} height={500} alt={post.nom} />
                <div className="tit1">
                <h2 className="h2">{post.para1}</h2>
                <p className="h3">{post.para2}</p>
                <p className="h4">{post.para3}</p>
                <p className="h5">{post.para4}</p>
            
</div>
<div className="image">
    <img src={post.photo1} height={330} width={250} alt="" />
    <img src={post.photo2} height={330} width={250} alt="" />
    <img src={post.photo3} height={330} width={250} alt="" />
</div>
<div className="h6">
    <h1>{post.para5}</h1>
    <p>{post.para6}</p>
    <p>{post.para7}</p>
</div>
            </div>
        </div>
    )
}
export default Blooog;