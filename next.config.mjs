/** @type {import('next').NextConfig} */
import dotenv from "dotenv";

dotenv.config();

const staticBuildEnabled = process.env.STATIC_BUILD_ENABLED === "true";
const nextConfig = {
  output: staticBuildEnabled ? "export" : undefined,
  images: {
    unoptimized: true
  },
};

export default nextConfig;
