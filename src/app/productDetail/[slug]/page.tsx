import { client } from "@/sanity/lib/client"
import Image from "next/image";
import listViewIcon from "@/app/assets/list_view_icon.png";
import tileViewIcon from "@/app/assets/tile_view_icon.png";

interface Props {
    params: {
        slug: string
    }
}

interface Product {

    title: string;
    price: number;
    discountedPrice: number;
    image: string;
    slug: string;
    description: string;

};

export default async function productDetail({ params }: Props) {
    const data: Product[] = await client.fetch(
        `
        *[_type == "product" && slug.current == "${params.slug}"]{
            title,
            price,
            discountedPrice,
            "image": image.asset->url,
              "slug": slug.current,
                  description,
        }
        `    )

    const product = data[0];
    console.log(product);
    return (
        <div>

            {/* Hero Section */}
            <div className="bg-[#F6F5FF] w-full h-[286px] flex flex-col items-start justify-center py-10 pl-[100px]">
                <h1 className="text-4xl text-black font-myFont font-bold mb-2">
                    Product Details
                </h1>
                <p className="text-sm text-black font-myFont font-bold">
                    Home - Pages - <span className="text-pink-500">Product Details</span>
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
            {/* Product Detail */}
            <div className="flex flex-col md:flex-row">

                {/* Image Section */}
                <div className="w-[375px] h-[487px]">
                    <Image src={product.image} alt={product.title} width={500} height={500} />
                </div>

                {/* Details section */}
                <div className="flex flex-col font-myFont">
                    <h1 className="text-[#0D134E] text-4xl leading-10">{product.title}</h1>
                    <p>{product.price}</p>
                    <p>Color</p>
                    <p>{product.description}</p>
                    <button>Add to Cart</button>
                    <p>Categories</p>
                    <p>Tags</p>
                    <p>Share</p>

                </div>


            </div>


        </div>
    )

}