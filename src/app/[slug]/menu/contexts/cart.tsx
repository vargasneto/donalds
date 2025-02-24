'use client'
import { Product } from "@prisma/client";
import {  createContext, ReactNode, useState } from "react";

export interface CartProduct extends Pick<Product,'id'|'name'|"price"|"imageUrl">{
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
        const productIsAlreadyOnTheCart = products.some(prevProduct=> prevProduct.id === product.id)
        if(!productIsAlreadyOnTheCart)
        {
            return setProducts((prev)=>[...prev,product]);
        }
      setProducts(prevProducts=>{
        return prevProducts.map(prevProduct=>{
            if(prevProduct.id === product.id)
            {
                return {
                    ...prevProduct,
                    quantity: prevProduct.quantity+1
                }
            }
            return prevProduct
        })
      })

    };
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