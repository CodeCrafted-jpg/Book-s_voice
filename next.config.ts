import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images: {remotePatterns: [
    {protocol: "https", hostname: "covers.openlibrary.org", },
     {protocol: "https", hostname: "xuwjfwsu6pm2xocq.public.blob.vercel-storage.com", }
]},
};

export default nextConfig;
