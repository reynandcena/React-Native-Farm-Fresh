export default {
  name: "posts",
  title: "Posts",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Post Title",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Post Image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      type: "string",
      title: "Post Date",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "content",
      type: "text",
      title: "Post Content",
    },
  ],
};
