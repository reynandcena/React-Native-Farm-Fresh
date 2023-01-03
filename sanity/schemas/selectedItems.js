export default {
  name: "selected",
  title: "Selected Items Category",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Selected Items Category name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "products",
      title: "Products",
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
