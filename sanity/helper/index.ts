import { sanityFetch } from "../lib/live";
import { CATEGORIES_QUERY, PRODUCT_BY_SLUG, PRODUCT_QUERY, SALE_QUERY } from "./queries";

export const getSale = async () => {
  try {
    const products = await sanityFetch({
      query: SALE_QUERY,
    });
    return products?.data || [];
  } catch (error) {
    console.error("Error fetching Sale data:", error);
    return [];
  }
};

export const getAllproducts = async () => {
  try {
    const products = await sanityFetch({
      query: PRODUCT_QUERY,
    });
    return products.data || [];
  } catch (error) {
    console.error("ALL product fetching error:", error);
    return [];
  }
};

export const getAllCategories = async () => {
  try {
    const categories = await sanityFetch({
      query: CATEGORIES_QUERY,
    });
    return categories.data || [];
  } catch (error) {
    console.error("ALL Categories fetching error:", error);
    return [];
  }
};

export const getProductBySlug = async (slug:string) => {
  try {
    const product = await sanityFetch({
      query:PRODUCT_BY_SLUG
    })
  } catch (error) {
    console.error("Product fetching error:", error);
    return null;
  }
};
