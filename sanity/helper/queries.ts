import { defineQuery } from "next-sanity";

export const SALE_QUERY = defineQuery(
  `*[_type=='sale'] | order(nam asc)|order(name asc)`
);

export const PRODUCT_QUERY = defineQuery(
  `*[_type=='product'] | order(nam asc)|order(name asc)`
);
