import { defineField, defineType } from "sanity";

export default defineType({
  name: "home",
  title: "Home Furniture",
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
      name: "overview",
      title: "Product Overview",
      type: "string",
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
          { title: "Sofa", value: "sofa" },
          { title: "Dining Table", value: "dining_table" },
          { title: "Bed", value: "bed" },
          { title: "Chair", value: "chair" },
          { title: "Cupboard", value: "cupboard" },

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