import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dummyimage.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  cacheComponents: true,
  // cacheLife: {
  //   data: {
  //     stale: 3600,
  //     revalidate: 4200,
  //     expire: 86400,
  //   },
  // },
};

export default nextConfig;
