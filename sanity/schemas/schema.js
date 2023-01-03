import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import category from "./category";
import products from "./products";
import featured from "./featured";
import post from "./post";
import selectedItems from "./selectedItems";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    category,
    products,
    featured,
    post,
    selectedItems,
  ]),
});
