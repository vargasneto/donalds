import Image from "next/image";
import { notFound } from "next/navigation";

import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";

import ConsumptionMethodOption from "./components/consumption-method-option";

interface RestaurantPageProps {
    params: Promise <{slug:string}>
}

const RestaurantPage = async ({params}:RestaurantPageProps) => {
    const {slug} = await params
    const restaurant = await getRestaurantBySlug(slug)
    if(!restaurant)
    {
        return notFound()
    }
    return ( <div className="h-screen flex flex-col items-center justify-center px-6 pt-24" >         
    
    <div className="flex flex-col items-center gap-2">
    
        <Image src={restaurant.avatarImageUrl} alt={restaurant.name} width={82} height={82} />

<h2 className="font-semibold">{restaurant.name}</h2>

    </div>

    <div className="pt-24 text-center space-y-2">
            <h3 className="text-xl font-semibold">
                Seja Bem-Vindo
                
            </h3>
            <p className="opacity-55">
            Escolha como prefere aproveitar sua refeição. Estamos aqui para oferecer praticidade e sabor em cada detalhe!
            </p>
        </div>

<div className="pt-14 grid grid-cols-2 gap-4">
   
<ConsumptionMethodOption option="DINE_IN" slug={slug} imageUrl="/dine_in.png" imageAlt="Comer Aqui" buttonText="Para Comer Aqui"/>
   
<ConsumptionMethodOption option="TAKEAWAY" slug={slug}imageUrl="/away.png" imageAlt="Levar Para Casa" buttonText="Para Comer em Casa"/>

</div>
    </div> )
}
 
export default RestaurantPage;