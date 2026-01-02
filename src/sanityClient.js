// src/sanityClient.js
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "krvkmkhp", // Paste your ID here
  dataset: "production",
  useCdn: false, // true = fast, false = fresh data
  apiVersion: "2023-01-01",
});

const builder = imageUrlBuilder(client);

// Helper to easily get image URLs
export const urlFor = (source) => builder.image(source);