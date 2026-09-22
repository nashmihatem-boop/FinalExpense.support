import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FinalExpense.support",
    short_name: "FinalExpense.support",
    description: "Caring, no-pressure help finding final expense life insurance for your family.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0e5265",
    icons: [{ src: "/icon.svg", type: "image/svg+xml", sizes: "any" }],
  };
}
