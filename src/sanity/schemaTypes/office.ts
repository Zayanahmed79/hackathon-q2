import { defineField, defineType } from "sanity";

export default defineType({
  name: "office",
  title: "Office Furniture",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc) => `${doc.title}-${Math.floor(Math.random() * 100000)}`,
        maxLength: 200,
      },
    }),
    defineField({
      name: "productDetails",
      title: "Product Details",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        defineField({
          name: "image",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "onSale",
      title: "On Sale",
      type: "boolean",
    }),
    defineField({
      name: "salePrice",
      title: "Sale Price",
      type: "number",
      hidden: ({ parent }) => !parent?.onSale,
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "string",
      options: {
        list: [
          { title: "Best Selling", value: "best_selling" },
          { title: "Featured", value: "featured" },
          { title: "Special Offer", value: "special_offer" },
          { title: "New Arrival", value: "new_arrival" },
        ],
      },
    }),
    defineField({
      name: "subCategory",
      title: "Sub Category",
      type: "string",
      options: {
        list: [
          { title: "Bookcases", value: "bookcases" },
          { title: "Office Chair", value: "office_chair" },
          { title: "Office Table", value: "office_table" },


        ],
      },
    }),
    defineField({
      name: "stock",
      title: "Availability",
      type: "string",
      options: {
        list: [
          { title: "In Stock", value: "instock" },
          { title: "Out of Stock", value: "outofstock" },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "images.0",
    },
  },
});
