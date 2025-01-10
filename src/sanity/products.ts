import { defineType } from "sanity"

export const productType = defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'discountedPrice',
            title: 'Discounted Price',
            type: 'number',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
    ],
});
