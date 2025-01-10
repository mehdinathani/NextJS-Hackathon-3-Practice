import listViewIcon from "@/app/assets/list_view_icon.png";
import tileViewIcon from "@/app/assets/tile_view_icon.png";
import Image from "next/image";
// import p1 from "@/app/assets/p1.png";
// import p2 from "@/app/assets/p2.png";
// import p3 from "@/app/assets/p3.png";
// import p4 from "@/app/assets/p4.png";
// import p5 from "@/app/assets/p5.png";
// import p6 from "@/app/assets/p6.png";
// import p7 from "@/app/assets/p7.png";
// import p8 from "@/app/assets/p8.png";
// import p9 from "@/app/assets/p9.png";
// import p10 from "@/app/assets/p10.png";
// import p11 from "@/app/assets/p11.png";
// import p12 from "@/app/assets/p12.png";
import v3circle from "@/app/assets/v3circle.png";
import { client } from "@/sanity/lib/client";
import Link from "next/link";


export default async function ProductsPage() {
    // const [products, setProducts] = useState<Product[]>([]);
    // const [loading, setLoading] = useState<boolean>(true);
    const data: Product[] = await client.fetch(
        `
       *[_type == "product"]
{
            title,
            price,
            discountedPrice,
            "image": image.asset->url,
             "slug": slug.current
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
                    //         <ProductCard
                    //         key = { index }
                    //         name = {product.title
                    // }
                    //         price = { product.price }
                    //         discountedPrice = { product.discountedPrice }
                    //         image = { product.image }
                    //     />
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

};// Define Props Type

// const products: Product[] = [
//     {

//         name: "Vel elit euismod",
//         price: 26.00,
//         discountedPrice: 42,
//         image: p1,

//     },
//     {

//         name: "Ultricies condimentum imperdiet",
//         price: 26,
//         discountedPrice: 42,
//         image: p2,

//     },
//     {

//         name: "Vitae suspendisse sed",
//         price: 26,
//         discountedPrice: 42,
//         image: p3,

//     },
//     {

//         name: "Sed at fermentum",
//         price: 26,
//         discountedPrice: 42,
//         image: p4,

//     },
//     {

//         name: "Product 5",
//         price: 26,
//         discountedPrice: 42,
//         image: p5,

//     },
//     {

//         name: "Product 6",
//         price: 26,
//         discountedPrice: 42,
//         image: p6,

//     },
//     {

//         name: "Product 7",
//         price: 26,
//         discountedPrice: 42,
//         image: p7,

//     },
//     {

//         name: "Product 8",
//         price: 26,
//         discountedPrice: 42,
//         image: p8,

//     },
//     {

//         name: "Product 9",
//         price: 26,
//         discountedPrice: 42,
//         image: p9,

//     },
//     {

//         name: "Product 10",
//         price: 26,
//         discountedPrice: 42,
//         image: p10,

//     },
//     {

//         name: "Product 11",
//         price: 26,
//         discountedPrice: 42,
//         image: p11,

//     },
//     {

//         name: "Product 12",
//         price: 26,
//         discountedPrice: 42,
//         image: p12,

//     },
// ]

interface ProductCardProps {
    name: string;
    price: number;
    discountedPrice: number;
    image: string;
}

function ProductCard({ name, price, discountedPrice, image }: ProductCardProps) {
    return (
        <div className="border p-4 shadow-md rounded-md w-[270px] h-[363px] flex flex-col items-center">
            <Image
                src={image}
                alt={name}
                width={200}
                height={200}
                className="rounded"
            />
            <h3 className="text-lg font-bold font-myFont mt-2 text-center">{name}</h3>
            <div className="w-[42px] h-[42px] my-2 ">

                <Image src={v3circle} alt="v3" />
            </div>
            <div className="flex items-center space-x-2">
                <p className="text-sm text-gray-500 font-bold">${price.toFixed(2)}</p>
                <p className="text-xs  text-pink-500  line-through">
                    ${discountedPrice.toFixed(2)}
                </p>
            </div>
        </div>
    );
}


