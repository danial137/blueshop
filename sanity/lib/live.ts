import { createClient } from "next-sanity";

const client = createClient({
  projectId: "nhsmt9nd",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

export const sanityFetch = async ({ query, params }: any) => {
  return {
    data: await client.fetch(query, params),
  };
};

export const SanityLive = () => null;
