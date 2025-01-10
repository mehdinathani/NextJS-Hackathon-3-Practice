import Image, { StaticImageData } from "next/image";
import productImage1 from "@/app/assets/TP1.png";
import productImage2 from "@/app/assets/TP2.png";
import productImage3 from "@/app/assets/TP3.png";
import productImage4 from "@/app/assets/TP4.png";

const products = [
    { id: 1, image: productImage1, title: "Cantilever Chair", price: "$26.00", oldPrice: "$42.00" },
    { id: 2, image: productImage2, title: "Cantilever Chair", price: "$26.00", oldPrice: "$42.00" },
    { id: 3, image: productImage3, title: "Cantilever Chair", price: "$26.00", oldPrice: "$42.00" },
    { id: 4, image: productImage4, title: "Cantilever Chair", price: "$26.00", oldPrice: "$42.00" },
];

function ProductCard({ image, title, price, oldPrice }: { image: StaticImageData; title: string; price: string; oldPrice: string }) {
    return (
        <div className="w-[270px] h-[350px] bg-white shadow-[0px_8px_40px_0px_#31208A0D] flex flex-col items-center">
            <div className="w-[247px] h-[244px] bg-[#F5F6F8] flex items-center justify-center py-4">
                <Image src={image} alt={title} className="object-contain" />
            </div>
            <div className="text-center mt-4">
                <h3 className="text-[16px] font-bold text-[#151875]">{title}</h3>
                <p className="text-[14px] font-normal text-[#151875]">{price}</p>
                <p className="text-[12px] font-normal text-[#FB2448] line-through">{oldPrice}</p>
            </div>
        </div>
    );
}

export default function TrendingProducts() {
    return (
        <div className="w-full py-16 bg-[#F6F7FB]">
            <h2 className="text-[42px] font-bold text-[#151875] text-left mb-8">
                Trending Products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 justify-center">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        oldPrice={product.oldPrice}
                    />
                ))}
            </div>
        </div>
    );
}
