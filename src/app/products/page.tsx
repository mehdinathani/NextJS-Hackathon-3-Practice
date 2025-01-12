import listViewIcon from "@/app/assets/list_view_icon.png";
import tileViewIcon from "@/app/assets/tile_view_icon.png";
import Image from "next/image";
import v3circle from "@/app/assets/v3circle.png";
import { client } from "@/sanity/lib/client";
import Link from "next/link";


export default async function ProductsPage() {
    // const [products, setProducts] = useState<Product[]>([]);
    // const [loading, setLoading] = useState<boolean>(true);
    const data: Product[] = await client.fetch(
        `
       *[_type == "product"]{
 "title": name,
  "tags": tags[],
  price,
  "image": image.asset->url,
  rating,
  "ratingCount": ratingCount,
  "slug": slug.current,
  description
}

        `
    );
    console.log(data);
    return (

        <div className="mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="bg-[#F6F5FF] w-full h-[286px] flex flex-col items-start justify-center py-10 pl-[100px]">
                <h1 className="text-4xl text-black font-myFont font-bold mb-2">
                    Shop Grid Default
                </h1>
                <p className="text-sm text-black font-myFont font-bold">
                    Home - Pages - <span className="text-pink-500">Shop Grid Default</span>
                </p>
            </div>

            {/* Heading and Filters */}
            <div className="flex flex-col md:flex-row items-center justify-between py-10">
                {/* Heading */}
                <div>
                    <h2 className="text-[#151875] text-2xl font-bold">
                        Ecommerce Accessories & Fashion item
                    </h2>
                    <p className="text-xs text-[#8A8FB9]">
                        About 9,620 results (0.62 seconds)
                    </p>
                </div>

                {/* Filters */}
                <div className="flex items-center space-x-4 mt-6 md:mt-0">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="perPage" className="text-sm">
                            Per Page:
                        </label>
                        <input
                            id="perPage"
                            type="text"
                            className="bg-[#E7E6EF] w-16 h-8 rounded-md px-2 text-sm focus:outline-none"
                        />
                    </div>

                    <div className="flex items-center space-x-2">
                        <label htmlFor="sortBy" className="text-sm">
                            Sort By:
                        </label>
                        <select
                            id="sortBy"
                            className="bg-[#E7E6EF] p-2 rounded-md text-sm focus:outline-none"
                        >
                            <option value="relevance">Relevance</option>
                            <option value="price-low-high">Price: Low to High</option>
                            <option value="price-high-low">Price: High to Low</option>
                        </select>
                    </div>

                    <div className="flex items-center space-x-2">
                        <span className="text-sm">View:</span>
                        <Image
                            src={tileViewIcon}
                            alt="Tile view"
                            width={16}
                            height={16}
                            className="cursor-pointer"
                        />
                        <Image
                            src={listViewIcon}
                            alt="List view"
                            width={16}
                            height={16}
                            className="cursor-pointer"
                        />
                    </div>
                </div>
            </div>

            {/* Products Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.map((product, index) => {
                    return (
                        <Link key={product.slug} href={`productDetail/${product.slug}`} >
                            <ProductCard
                                key={index}
                                name={product.title}
                                price={product.price}
                                discountedPrice={product.discountedPrice}
                                image={product.image}

                            />
                        </Link>
                    )
                }
                )}
            </div>

        </div>
    );
}

interface Product {

    title: string;
    price: number;
    discountedPrice: number;
    image: string;
    slug: string;

};

interface ProductCardProps {
    name: string;
    price: number;
    discountedPrice: number;
    image: string;
}

function ProductCard({ name, price, discountedPrice, image }: ProductCardProps) {
    return (
        <div className="border p-4 shadow-md rounded-md w-[270px] h-[363px] flex flex-col items-center">
            {/* Image Section */}
            <div className="w-[200px] h-[200px] flex items-center justify-center overflow-hidden rounded">
                <Image
                    src={image}
                    alt={name}
                    width={200}
                    height={200}
                    className="object-cover"
                />
            </div>

            {/* Product Details */}
            <h3 className="text-lg font-bold font-myFont mt-2 text-center">{name}</h3>
            <div className="w-[42px] h-[42px] my-2">
                <Image src={v3circle} alt="v3" />
            </div>
            <div className="flex items-center space-x-2">
                <p className="text-sm text-gray-500 font-bold">${price.toFixed(2)}</p>
                <p className="text-xs text-pink-500 line-through">
                    ${discountedPrice ? discountedPrice.toFixed(2) : price}
                </p>
            </div>
        </div>
    );
}



