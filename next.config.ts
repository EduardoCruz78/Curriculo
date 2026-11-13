import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Shareable English link: /?lang=en goes to the English page.
    return [{ source: "/", has: [{ type: "query", key: "lang", value: "en" }], destination: "/en", permanent: false }];
  },
};

export default nextConfig;
