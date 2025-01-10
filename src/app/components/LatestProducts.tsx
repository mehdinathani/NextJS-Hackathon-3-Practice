import Image, { StaticImageData } from "next/image";
import productImage1 from "@/app/assets/lp1.png";
import productImage2 from "@/app/assets/lp2.png";
import productImage3 from "@/app/assets/lp3.png";
import productImage4 from "@/app/assets/lp4.png";
import productImage5 from "@/app/assets/lp5.png";
import productImage6 from "@/app/assets/lp6.png";

type ProductCardProps = {
    image: StaticImageData;
    title: string;
    price: string;
    oldPrice: string;
};

function ProductCard({ image, title, price, oldPrice }: ProductCardProps) {
    return (
        <div className="w-full max-w-[360px] bg-white shadow-lg rounded-lg flex flex-col items-center my-4">
            <div className="w-[223px] h-[229px] bg-[#F6F7FB] flex items-center ">
                <Image src={image} alt={title} />
            </div>
            <div className="flex flex-row justify-between px-4 py-2">
                <h3 className="text-[16px] font-bold text-[#151875]">{title}</h3>
                <div className="flex items-center space-x-2">
                    <p className="text-[14px] font-bold text-[#151875]">${price}</p>
                    <p className="text-[12px] text-[#FB2448] line-through">${oldPrice}</p>
                </div>
            </div>
        </div>
    );
}

export default function LatestProducts() {
    const products = [
        { id: 1, image: productImage1, title: "Comfort Handy Craft", price: "42.00", oldPrice: "65.00" },
        { id: 2, image: productImage2, title: "Comfort Handy Craft", price: "42.00", oldPrice: "65.00" },
        { id: 3, image: productImage3, title: "Comfort Handy Craft", price: "42.00", oldPrice: "65.00" },
        { id: 4, image: productImage4, title: "Comfort Handy Craft", price: "42.00", oldPrice: "65.00" },
        { id: 5, image: productImage5, title: "Comfort Handy Craft", price: "42.00", oldPrice: "65.00" },
        { id: 6, image: productImage6, title: "Comfort Handy Craft", price: "42.00", oldPrice: "65.00" },
    ];

    return (
        <div className="w-full py-16 bg-[#F6F7FB]">
            <h1 className="font-myFont text-[42px] text-[#151875] leading-[49.22px] mb-4 text-center">
                Latest Products
            </h1>
            {/* Navigation Bar */}
            <div className="flex justify-center space-x-8 mb-8">
                {["New Arrival", "Best Seller", "Featured", "Special Offer"].map((cat, index) => (
                    <p
                        key={index}
                        className={`text-[18px] font-normal ${index === 0 ? "text-[#FB2E86]" : "text-[#151875]"
                            } cursor-pointer`}
                    >
                        {cat}
                    </p>
                ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  justify-items-center">
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
