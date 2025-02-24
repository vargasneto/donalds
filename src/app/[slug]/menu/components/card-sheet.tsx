import { useContext } from "react";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

import { CartContext } from "../contexts/cart";
import CartProductItem from "./cart-product-item";
const CardSheet = () => {
        const {isOpen,toggleCart,products} = useContext(CartContext)
    return ( 
        
        <Sheet open={isOpen} onOpenChange={toggleCart}>
        <SheetContent className="w-[80%]">
          <SheetHeader>
            <SheetTitle className="text-left">Sacola</SheetTitle>
          </SheetHeader>
     <div className="py-5">
     {products.map((products)=>(
       <CartProductItem key={products.id} product={products}/>
          ))}
     </div>
        </SheetContent>
      </Sheet>
     );
}
 
export default CardSheet ;