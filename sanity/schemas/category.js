export default {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "categoryName",
      title: "Category Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Category Image",
      type: "image",
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
