export default {
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Product name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Product image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      title: "Rating",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a value between 1 and 5"),
    },
    {
      name: "price",
      type: "string",
      title: "Price",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "salePrice",
      type: "string",
      title: "Sale Price",
    },
    {
      name: "type",
      title: "Category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
  ],
};
