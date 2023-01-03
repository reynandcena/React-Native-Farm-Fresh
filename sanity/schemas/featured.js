export default {
  name: "featured",
  title: "Feature Products Categories",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Featured Category name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "products",
      title: "products",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "products" }],
        },
      ],
    },
  ],
};
