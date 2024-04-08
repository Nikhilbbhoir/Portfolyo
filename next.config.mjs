/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "portfolio-image-store.s3.ap-south-1.amazonaws.com",
      },
    ],
    dangerouslyAllowSVG: true, // Enable SVG processing
  },
};

export default nextConfig;
