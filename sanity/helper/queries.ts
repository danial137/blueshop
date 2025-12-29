import { defineQuery } from "next-sanity";

export const SALE_QUERY = defineQuery(
  `*[_type=='sale'] | order(nam asc)|order(name asc)`
);

export const PRODUCT_QUERY = defineQuery(
  `*[_type=='product'] | order(nam asc)|order(name asc)`
);

export const CATEGORIES_QUERY = defineQuery(
  `*[_type=='category'] | order(nam asc)|order(name asc)`
);

export const PRODUCT_BY_SLUG = defineQuery(
  `*[_type=='product' && slug.current==$slug ] | order(name)[0]`
);

export const PRODUCT_SEARCH_QUERY = defineQuery(
  `*[_type=='product'&& name match $searchParams] | order(name asc)`
);
