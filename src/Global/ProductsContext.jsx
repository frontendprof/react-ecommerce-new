
import React,{createContext,useState} from 'react';

import cam from "../assets/dslr.jpg";
import h from "../assets/headphones.jpg";
import i from "../assets/iphone.jpg";
import m from "../assets/microphone.jpg";
import p from "../assets/perfume.jpg";
import r from "../assets/rings.jpg";
import sh from "../assets/shoes.jpg";
import w from "../assets/watch.jpg";

export const ProductsContext=createContext();

const ProductsContextProvider = (props) => {
    const [products]=useState([
        {id:1,name:"Cam",price:550,image:cam,status:"hot"},
        {id:2,name:"Headphones",price:350,image:h,status:"new"},
        {id:3,name:"iPhone",price:1050,image:i,status:"hot"},
        {id:4,name:"Microphone",price:460,image:m,status:"hot"},
        {id:5,name:"Perfume",price:310,image:p,status:"new"},
        {id:6,name:"Rings",price:990,image:r,status:"hot"},
        {id:7,name:"Shoes",price:220,image:sh,status:"hot"},
        {id:8,name:"Watch",price:700,image:w,status:"new"},
    ])
    return (
        <ProductsContextProvider value={{ products: [...products] }}>
            {props.children}
        </ProductsContextProvider>
    )
}

export default ProductsContextProvider;
