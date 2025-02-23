'use client'
import { Product } from "@prisma/client";
import {  createContext, ReactNode, useState } from "react";

interface CartProduct extends Pick<Product,'id'|'name'|"price"|"imageUrl">{
    quantity:number
}
export interface IcartContext{
    isOpen:boolean;
    products:CartProduct[];
    toggleCart: ( )=> void;
    addProduct: (Product:CartProduct) => void
}

export const CartContext = createContext<IcartContext>({isOpen:false,
    products:[],
    toggleCart:()=> {},
addProduct:()=> {},
})

export const CartProvider = ({children}:{children:ReactNode})=>{
    const [products,setProducts]=useState<CartProduct[]>([]);
    const [isOpen,setIsOpren]=useState<boolean>(false);
    const toggleCart= ()=> {setIsOpren(prev=>!prev)}

    const addProduct=(product:CartProduct)=>{
        setProducts(prev=>[...prev,product]);

    }
    return(<CartContext.Provider value={{
        isOpen,
        products,
        toggleCart,
        addProduct,
    }} >
        {children}
    </CartContext.Provider> 
    )

}