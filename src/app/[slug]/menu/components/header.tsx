'use client'
import { Restaurant } from "@prisma/client";
import { ChevronsLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface RestaurantHeaderProps{
    restaurant:Pick<Restaurant, 'coverImageUrl'| "name">
}

const RestaurantHeader = ({restaurant}:RestaurantHeaderProps) => {
    const router = useRouter();
    const handleBackClick= () => router.back();
    return ( 
         <div className="relative h-[250px] w-full">
            <Button className="absolute left-4 top-4 rounded-full z-50" variant={"secondary"} size="icon" onClick={handleBackClick}>
        <ChevronsLeftIcon/>
            </Button>
            <Image className="object-cover" src={restaurant.coverImageUrl} fill alt={restaurant.name}/>
        

        <Button className="absolute right-4 top-4 rounded-full z-50" variant={"secondary"} size="icon">
        <ScrollTextIcon/>
            </Button>
            </div>
     );
}
 
export default RestaurantHeader