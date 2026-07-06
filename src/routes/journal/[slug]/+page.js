import { error } from "@sveltejs/kit";
import { essays } from "../essays.js";

export function load({ params }) {
  const essay = essays.find((e) => e.slug === params.slug);

  if (!essay) {
    throw error(404, "Essay not found");
  }

  return { essay };
}
