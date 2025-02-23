'use client'
import { Product } from "@prisma/client";
import {  createContext, ReactNode, useState } from "react";

interface CardProduct extends Product{
    quantity:number
}
export interface IcartContext{
    isOpen:boolean;
    products:CardProduct[];
    toggleCart: ( )=> void;
}

export const CardContext = createContext<IcartContext>({isOpen:false,
    products:[],
    toggleCart:()=> {},
})

export const CartProvider = ({children}:{children:ReactNode})=>{
    const [products,setProducts]=useState<CardProduct[]>([]);
    const [isOpen,setIsOpren]=useState<boolean>(false);
    const toggleCart= ()=> {setIsOpren(prev=>!prev)}

    return(<CardContext.Provider value={{
        isOpen,
        products,
        toggleCart,
    }} >
        {children}
    </CardContext.Provider> 
    )

}