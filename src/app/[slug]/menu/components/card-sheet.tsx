import { useContext } from "react";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";

import { CardContext } from "../contexts/card";
const CardSheet = () => {
        const {isOpen,toggleCart} = useContext(CardContext)
    return ( 
        
        <Sheet open={isOpen} onOpenChange={toggleCart}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
     );
}
 
export default CardSheet ;