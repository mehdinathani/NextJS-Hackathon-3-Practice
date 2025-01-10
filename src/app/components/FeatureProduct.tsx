import productImage1 from "@/app/assets/fp1.png";
import productImage2 from "@/app/assets/fp2.png";
import productImage3 from "@/app/assets/fp3.png";
import productImage4 from "@/app/assets/fp4.png";
import ProductCard from "./product_card";

const products = [
    { image: productImage1, title: "Cantilever Chair", code: "Y523201", price: "42.00" },
    { image: productImage2, title: "Cantilever Chair", code: "Y523202", price: "42.00" },
    { image: productImage3, title: "Cantilever Chair", code: "Y523203", price: "45.00" },
    { image: productImage4, title: "Cantilever Chair", code: "Y523204", price: "50.00" },
];

export default function FeaturedProducts() {
    return (
        <div className="w-full py-16 px-[416px] bg-[#F6F7FB] px-[378px]">
            <div className="text-left mb-8 mx-8">
                <h2 className="text-4xl text-center font-extrabold text-[#1A0B5B]">Featured Products</h2>
            </div>

            <div className="flex flex-row justify-center gap-[16px]">
                {products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
        </div>
    );
}
