import { ConsumptionMethod } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ConsumptionMethodOptionProps{
    slug:string;
    imageUrl:string;
    imageAlt:string;
    buttonText:string;
    option:ConsumptionMethod;
}

const ConsumptionMethodOption= ({slug,imageUrl,imageAlt,buttonText,option}: ConsumptionMethodOptionProps) => {
    return (
     <Card>
        <CardContent className="flex flex-col items-center gap-8 py-8">
            
        <div className="relative h-[80px] w-[80px]" >
                 {/* esta div é responsável por deixar a imagem com os valores exatos de altura e largura. É OBRIGATÓRIO COLOCAR RELATIVE nela */}
            <Image className="object-contain" src={imageUrl} alt={imageAlt} fill/>
            </div>
<Button className="rounded-full" variant={"secondary"} asChild>
<Link href={`/${slug}/menu?consumptionMethod=${option}`}>
    {buttonText}
    </Link>
</Button>
        </CardContent>
    </Card>
     );
}
 
export default ConsumptionMethodOption;