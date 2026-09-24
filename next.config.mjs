/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ["images.unsplash.com"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*",
                port: "",
                pathname: "/**",
            },
        ]
    }
};

export default nextConfig;
