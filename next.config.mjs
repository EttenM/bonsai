import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "cs63440-wordpress-irqux.tw1.ru",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
