import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MT Solutions - Software OEE & Monitoreo de Producción",
    short_name: "MT Solutions",
    description: "Software OEE, monitoreo en tiempo real, pesaje industrial y eficiencia energética.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B132B",
    theme_color: "#00F2FE",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
