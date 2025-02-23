import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import { formatCurrency } from "@/helpers/format-currency";

interface ProductsProps{
    products:Product[]
}

const Products = ({products}: ProductsProps) => {
    const{slug}=useParams<{slug:string}>();
    return ( <div className="space-y-3 px-5">
{products.map(product=>(
 
<Link className="flex items-center justify-between gap-10 py-5 border-b" key={product.id} href= {`/${slug}/menu/${product.id}`}>
    {/* left */}
    <div>
        <h3 className="text-sm font-medium">{product.name}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
        <p className="pt-3 text-sm font-semibold">{formatCurrency(product.price)}

        </p>
    </div>
{/* right */}
<div className="relative min-h-[82px] min-w-[82px]">
    <Image className="rounded-lg object-contain" src={product.imageUrl}
    alt={product.name}
    fill/>
</div>
 </Link>
))}

    </div> );
}
 
export default Products;