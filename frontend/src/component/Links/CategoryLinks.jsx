import React from 'react';
import { Link } from 'react-router-dom';
import './Links.css'
const CategoryLinks = () => {
    return (
        <div className="image1" style={{display:'flex',justifyContent:'space-between'}}>
        <ul>
            <li className='all'>
                <Link to={'/category/Lipstick'}>
                    <img src="public/imagess/image1.JPG" alt="" className="image1"   style={{
        width: "100px",
        height: "100px",
        borderRadius: "100%",
        objectFit: "cover",
        marginRight: "-25px",
        marginTop: "50px",display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        left: "100px",
        top: "-260px",
        marginLeft: "20px",
       overflow:'auto',
    }} />
                    <h1 className='h1'  style={{fontSize:'large',}}>Lipstick</h1>
                </Link>
            </li>
            <li className='all'>
                <Link to={'/category/Lotion'} >
                    <img src="public/imagess/image3.JPG" alt="" className="image1"  style={{
        width: "100px",
        height: "100px",
        borderRadius: "100%",
        objectFit: "cover",
        marginRight: "-25px",
        marginTop: "50px",display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        left: "100px",
        top: "-260px",
        marginLeft: "20px"
    }} /><h1 className='h1'>Lotion</h1>
                </Link>
            </li>
            <li className='all'>
                <Link to={'/category/Mascara'}>
                    <img src="public/imagess/image2.JPG" alt="" className="image1"   style={{
        width: "100px",
        height: "100px",
        borderRadius: "100%",
        objectFit: "cover",
        marginRight: "-25px",
        marginTop: "50px",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        left: "100px",
        top: "-260px",
        marginLeft: "20px"
    }}/>
                    <h1 className='h1'>Mascara</h1>
                </Link>
            </li>
            <li className='all'>
                <Link to={'/category/Perfume'}>
                    <img src="public/imagess/image4.JPG" alt="" className="image1"  style={{
        width: "100px",
        height: "100px",
        borderRadius: "100%",
        objectFit: "cover",
        marginRight: "-25px",
        marginTop: "50px",display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        left: "100px",
        top: "-260px",
        marginLeft: "20px"
    }} />
                    <h1 className='h1'>Perfume</h1>
                </Link>
            </li>
            <li className='all'>
                <Link to={'/category/Shampo'}>
                    <img src="public/imagess/image5.JPG" alt="" className="image1"   style={{
        width: "100px",
        height: "100px",
        borderRadius: "100%",
        objectFit: "cover",
        marginRight: "-25px",
        marginTop: "50px",display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        left: "100px",
        top: "-260px",
        marginLeft: "20px"
    }}/>
                    <h1 className='h1'>Shampoo</h1>
                </Link>
            </li>
            <li className='all'>
                <Link to={'/category/Blush'}>
                    <img src="public/imagess/image6.JPG" alt="" className="image1"  style={{
        width: "100px",
        height: "100px",
        borderRadius: "100%",
        objectFit: "cover",
        marginRight: "-25px",
        marginTop: "50px",display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        left: "100px",
        top: "-260px",
        marginLeft: "20px"
    }} />
                    <h1 className='h1'>Blush</h1>
                </Link>
            </li>
        </ul></div>
    );
};

export default CategoryLinks;
