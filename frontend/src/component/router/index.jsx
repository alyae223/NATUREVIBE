import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop';
import User from '../pages/User';
import Basket from '../pages/Basket';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import NotFound from '../pages/NotFound';
import Layout from '../Layouts/Layout';
import Heart from '../pages/Heart';
import Cart from '../pages/cart';
import ProductList from '../Products/ProductList';
import Checkout from '../pages/Check';
import Blooog from '../pages/Blooog';
import CategoryLinks from '../Links/CategoryLinks';
export const router=createBrowserRouter([

   {element:<Layout/> ,
   children:[
    {
    
        path:'/',
        element:<Home/>
    },
    {
        path:'/Shop',
        element:<Shop/>  
    },
    {

        path:'/User',
        element:<User/>
    },
    {
    path:'/Basket',
    element:<Cart/>

    },
    {
        path:'/contact',
        element:<Contact/>
    },
    {
        path:'/Blog',
        element:<Blog/>
    },
    ,
  {
    path: '*',
   element: <NotFound/>
  },
  {
    path:'/heart',
    element:<Heart/>
  },
{
    path:'/Checkout',
    element:<Checkout/> 
},  {
    path: '/category/:category',
    element: <ProductList />,
},
{
    path:"/Blog/:nom" ,
    element: <Blooog />

}
   ]

},


])