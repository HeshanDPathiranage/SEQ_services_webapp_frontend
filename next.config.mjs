const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/warehouse-cleaning',
        destination: '/services/warehouse-cleaning',
        permanent: true,
      },
      {
        source: '/wp-content/:path*',
        destination: '/_not-found', 
        permanent: false,
      },
      {
        source: '/wp-includes/:path*',
        destination: '/_not-found',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
