import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("http://dummyimage.com/**"),
      new URL("https://dummyimage.com/**"),
    ],
  },
};

export default nextConfig;
