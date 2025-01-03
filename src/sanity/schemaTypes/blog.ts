import { defineField, defineType } from "sanity";

export default defineType({
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    // Title
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required().max(100).warning("Keep the title concise."),
    }),

    // Blog Content
    defineField({
      name: "content",
      type: "array",
      title: "Blog Content",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required().error("Content is required."),
    }),

    // Slug
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error("Slug is required."),
    }),

    // Author Name
    defineField({
      name: "authorName",
      type: "string",
      title: "Author Name",
      validation: (Rule) => Rule.required().error("Author name is required."),
    }),

    // Publishing Date
    defineField({
      name: "publishingDate",
      type: "datetime",
      title: "Publishing Date",
      validation: (Rule) => Rule.required().error("Publishing date is required."),
    }),

    // Featured Image
    defineField({
      name: "featuredImage",
      type: "image",
      title: "Featured Image",
      options: {
        hotspot: true,
      },
    }),

    // Tags
    defineField({
      name: "tags",
      type: "array",
      title: "Tags",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        list: [
          { title: "Top Trending", value: "topTrending" },
          { title: "Featured", value: "featured" },
        ],
        layout: "tags",
      },
    }),

    // Comments Section
    defineField({
      name: "comments",
      type: "array",
      title: "Comments",
      of: [
        defineField({
          name: "comment",
          type: "object",
          title: "Comment",
          fields: [
            { name: "name", type: "string", title: "Name", validation: (Rule) => Rule.required() },
            { name: "comment", type: "text", title: "Comment", validation: (Rule) => Rule.required() },
            { name: "postedAt", type: "datetime", title: "Posted At", initialValue: () => new Date().toISOString() },
          ],
        }),
      ],
    }),
  ],
});
