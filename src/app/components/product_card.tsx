// LatestProducts.tsx
import Image, { StaticImageData } from "next/image";
import v3Icon from "@/app/assets/v3.png";

// Define Props Type
type ProductCardProps = {
    image: StaticImageData;
    title: string;
    price: string;
    oldPrice?: string; // Optional
    code: string;
};


// Product Card Component
function ProductCard({ image, title, price, code }: ProductCardProps) {
    return (
        <div className="w-[270px] h-[361px] bg-white shadow-lg rounded-lg mx-auto">
            <div className=" w-[270px] h-[236px] bg-[#F6F7FB] flex items-center justify-center">
                <Image
                    src={image}
                    alt={title}
                    className="w-[178px] h-[178px] "
                    width={178}
                    height={178}
                />
            </div>
            <div className="p-4 flex flex-col text-center items-center">
                <h3 className="text-lg font-bold text-[#151875]">{title}</h3>
                <Image src={v3Icon} alt="V3 Icon" width={52} height={20} />
                <p className="text-sm text-[#ACABC3]">Code: {code}</p>
                {/* <p className="text-sm text-[#ACABC3] line-through">${oldPrice}</p> */}
                <p className="text-lg font-bold text-[#FB2E86]">${price}</p>
            </div>
        </div>
    );
}

export default ProductCard;
