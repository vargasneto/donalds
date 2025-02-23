'use client'
import { Product } from "@prisma/client";
import { ChevronsLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface ProductHeaderProps{
    product:Pick<Product,"name"|"imageUrl">
}

const ProductHeader = ({product}:ProductHeaderProps) => {
    const router =useRouter()
    const handleBackClick= () =>router.back();
    return ( <div className="relative w-full min-h-[300px]">
        <Button className="absolute left-4 top-4 rounded-full z-50" variant={"secondary"} size="icon" onClick={handleBackClick}>
            <ChevronsLeftIcon/>
                </Button>    
    
            <Button className="absolute right-4 top-4 rounded-full z-50" variant={"secondary"} size="icon">
            <ScrollTextIcon/>
                </Button>
                
            <Image className="object-contain" src={product.imageUrl} alt={product.name} fill/>
        </div> );
}
 
export default ProductHeader;