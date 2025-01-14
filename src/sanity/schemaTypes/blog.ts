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
      description: "Enter the title of the blog.",
      validation: (Rule) =>
        Rule.required().max(100).warning("Keep the title concise."),
    }),

    // Blog Content
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" }, // For general content like paragraphs
        { type: "image" }, // For images
        {
          type: "object",
          name: "blockquote",
          title: "Quote",
          fields: [
            {
              name: "quote",
              title: "Quote Text",
              type: "string",
            },
            {
              name: "author",
              title: "Quote Author",
              type: "string",
            },
          ],
        },
      ],
    }),

    // Overview
    defineField({
      name: "overview",
      type: "string",
      title: "Overview",
      description: "A short summary of the blog.",
      validation: (Rule) =>
        Rule.required().max(200).warning("Keep the overview concise."),
    }),

    // Slug
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "Unique URL identifier for the blog.",
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
      description: "Name of the blog author.",
      validation: (Rule) => Rule.required().error("Author name is required."),
    }),

    // Author Image
    defineField({
      name: "authorImage",
      type: "image",
      title: "Author Image",
      description: "Image of the author.",
      options: {
        hotspot: true,
      },
    }),

    // Publishing Date
    defineField({
      name: "publishingDate",
      type: "datetime",
      title: "Publishing Date",
      description: "Date and time when the blog was published.",
      validation: (Rule) =>
        Rule.required().error("Publishing date is required."),
    }),

    // Featured Image
    defineField({
      name: "featuredImage",
      type: "image",
      title: "Featured Image",
      description: "Main image for the blog.",
      options: {
        hotspot: true,
      },
    }),

    // Tags
    defineField({
      name: "tags",
      type: "array",
      title: "Tags",
      description: "Categorize your blog with tags.",
      of: [{ type: "string" }],
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
      description: "User comments for the blog.",
      of: [
        defineField({
          name: "comment",
          type: "object",
          title: "Comment",
          fields: [
            {
              name: "name",
              type: "string",
              title: "Name",
              description: "Name of the commenter.",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "email",
              type: "string",
              title: "Email",
              description:
                "Email of the commenter (optional, for form validation).",
              validation: (Rule) => Rule.email(),
            },
            {
              name: "pic",
              type: "image",
              title: "Profile Picture",
              description: "Profile picture of the commenter.",
              options: {
                hotspot: true,
              },
            },
            {
              name: "comment",
              type: "text",
              title: "Comment",
              description: "Comment text.",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "postedAt",
              type: "datetime",
              title: "Posted At",
              description: "Timestamp when the comment was posted.",
              initialValue: () => new Date().toISOString(),
            },
          ],
        }),
      ],
    }),
  ],
});
