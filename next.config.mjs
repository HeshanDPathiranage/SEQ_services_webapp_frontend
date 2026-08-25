import fs from 'node:fs';

// Node 24 on Windows compatibility patch for webpack enhanced-resolve
const wrapReadlinkCallback = (orig) => function (path, options, callback) {
  const cb = typeof options === 'function' ? options : callback;
  const opts = typeof options === 'function' ? undefined : options;
  return orig.call(fs, path, opts, (err, linkString) => {
    if (err && (err.code === 'EISDIR' || err.code === 'EINVAL')) {
      const customErr = new Error(`EINVAL: invalid argument, readlink '${path}'`);
      customErr.code = 'EINVAL';
      return cb(customErr);
    }
    return cb(err, linkString);
  });
};

if (fs.readlink) fs.readlink = wrapReadlinkCallback(fs.readlink);
if (fs.readlinkSync) {
  const origSync = fs.readlinkSync;
  fs.readlinkSync = function (path, options) {
    try {
      return origSync.call(fs, path, options);
    } catch (err) {
      if (err && (err.code === 'EISDIR' || err.code === 'EINVAL')) {
        const customErr = new Error(`EINVAL: invalid argument, readlink '${path}'`);
        customErr.code = 'EINVAL';
        throw customErr;
      }
      throw err;
    }
  };
}
if (fs.promises && fs.promises.readlink) {
  const origPromise = fs.promises.readlink;
  fs.promises.readlink = async function (path, options) {
    try {
      return await origPromise.call(fs.promises, path, options);
    } catch (err) {
      if (err && (err.code === 'EISDIR' || err.code === 'EINVAL')) {
        const customErr = new Error(`EINVAL: invalid argument, readlink '${path}'`);
        customErr.code = 'EINVAL';
        throw customErr;
      }
      throw err;
    }
  };
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  webpack: (config) => {
    config.resolve.symlinks = false;
    return config;
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self)',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // ==========================================
      // 0. Canonical WWW to Non-WWW Redirect
      // ==========================================
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.seqservices.com.au',
          },
        ],
        destination: 'https://seqservices.com.au/:path*',
        permanent: true,
      },

      // ==========================================
      // 1. Core Pages & Contact Redirections
      // ==========================================
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/about-us/',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/#contact',
        permanent: true,
      },
      {
        source: '/contact-us/',
        destination: '/#contact',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/#contact',
        permanent: true,
      },
      {
        source: '/contact/',
        destination: '/#contact',
        permanent: true,
      },
      {
        source: '/faqs',
        destination: '/faq',
        permanent: true,
      },
      {
        source: '/faqs/',
        destination: '/faq',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/privacy/',
        destination: '/privacy-policy',
        permanent: true,
      },

      // ==========================================
      // 2. Service Pages (Legacy URLs to /services/...)
      // ==========================================
      {
        source: '/warehouse-cleaning',
        destination: '/services/warehouse-cleaning',
        permanent: true,
      },
      {
        source: '/warehouse-cleaning/',
        destination: '/services/warehouse-cleaning',
        permanent: true,
      },
      {
        source: '/commercial-cleaning',
        destination: '/services/commercial-cleaning',
        permanent: true,
      },
      {
        source: '/commercial-cleaning/',
        destination: '/services/commercial-cleaning',
        permanent: true,
      },
      {
        source: '/office-cleaning',
        destination: '/services/office-cleaning',
        permanent: true,
      },
      {
        source: '/office-cleaning/',
        destination: '/services/office-cleaning',
        permanent: true,
      },
      {
        source: '/construction-cleaning',
        destination: '/services/construction-site-cleaning',
        permanent: true,
      },
      {
        source: '/construction-cleaning/',
        destination: '/services/construction-site-cleaning',
        permanent: true,
      },
      {
        source: '/builders-cleaning',
        destination: '/services/builders-final-handover-cleaning',
        permanent: true,
      },
      {
        source: '/builders-cleaning/',
        destination: '/services/builders-final-handover-cleaning',
        permanent: true,
      },
      {
        source: '/carpet-cleaning',
        destination: '/services/commercial-carpet-cleaning',
        permanent: true,
      },
      {
        source: '/carpet-cleaning/',
        destination: '/services/commercial-carpet-cleaning',
        permanent: true,
      },
      {
        source: '/residential-carpet-cleaning',
        destination: '/services/residential-carpet-cleaning',
        permanent: true,
      },
      {
        source: '/residential-carpet-cleaning/',
        destination: '/services/residential-carpet-cleaning',
        permanent: true,
      },
      {
        source: '/window-cleaning',
        destination: '/services/commercial-window-cleaning',
        permanent: true,
      },
      {
        source: '/window-cleaning/',
        destination: '/services/commercial-window-cleaning',
        permanent: true,
      },
      {
        source: '/pressure-cleaning',
        destination: '/services/commercial-pressure-cleaning',
        permanent: true,
      },
      {
        source: '/pressure-cleaning/',
        destination: '/services/commercial-pressure-cleaning',
        permanent: true,
      },
      {
        source: '/biohazard-cleaning',
        destination: '/services/biohazard-trauma-cleaning',
        permanent: true,
      },
      {
        source: '/biohazard-cleaning/',
        destination: '/services/biohazard-trauma-cleaning',
        permanent: true,
      },
      {
        source: '/event-cleaning',
        destination: '/services/event-cleaning',
        permanent: true,
      },
      {
        source: '/event-cleaning/',
        destination: '/services/event-cleaning',
        permanent: true,
      },
      {
        source: '/industrial-abseiling',
        destination: '/services/industrial-abseiling',
        permanent: true,
      },
      {
        source: '/industrial-abseiling/',
        destination: '/services/industrial-abseiling',
        permanent: true,
      },
      {
        source: '/sweeping-and-scrubbing',
        destination: '/services/sweeping-and-scrubbing',
        permanent: true,
      },
      {
        source: '/sweeping-and-scrubbing/',
        destination: '/services/sweeping-and-scrubbing',
        permanent: true,
      },

      // ==========================================
      // Service Alias Mappings (ensuring intermediate /services/... slugs resolve seamlessly)
      // ==========================================
      {
        source: '/services/window-cleaning',
        destination: '/services/commercial-window-cleaning',
        permanent: true,
      },
      {
        source: '/services/window-cleaning/',
        destination: '/services/commercial-window-cleaning',
        permanent: true,
      },
      {
        source: '/services/pressure-cleaning',
        destination: '/services/commercial-pressure-cleaning',
        permanent: true,
      },
      {
        source: '/services/pressure-cleaning/',
        destination: '/services/commercial-pressure-cleaning',
        permanent: true,
      },
      {
        source: '/services/commercial-cleaning',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/commercial-cleaning/',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/carpet-cleaning',
        destination: '/services/commercial-carpet-cleaning',
        permanent: true,
      },
      {
        source: '/services/carpet-cleaning/',
        destination: '/services/commercial-carpet-cleaning',
        permanent: true,
      },
      {
        source: '/services/construction-cleaning',
        destination: '/services/construction-site-cleaning',
        permanent: true,
      },
      {
        source: '/services/construction-cleaning/',
        destination: '/services/construction-site-cleaning',
        permanent: true,
      },
      {
        source: '/services/builders-cleaning',
        destination: '/services/builders-final-handover-cleaning',
        permanent: true,
      },
      {
        source: '/services/builders-cleaning/',
        destination: '/services/builders-final-handover-cleaning',
        permanent: true,
      },
      {
        source: '/services/biohazard-cleaning',
        destination: '/services/biohazard-trauma-cleaning',
        permanent: true,
      },
      {
        source: '/services/biohazard-cleaning/',
        destination: '/services/biohazard-trauma-cleaning',
        permanent: true,
      },

      // ==========================================
      // 3. Generic / Removed Legacy Pages
      // ==========================================
      {
        source: '/gallery',
        destination: '/',
        permanent: true,
      },
      {
        source: '/gallery/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/testimonials',
        destination: '/',
        permanent: true,
      },
      {
        source: '/testimonials/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/cleaning-for-a-cause',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/cleaning-for-a-cause/',
        destination: '/about',
        permanent: true,
      },

      // ==========================================
      // 4. File Shielding & Legacy WordPress Protection
      // ==========================================
      {
        source: '/.env:path*',
        destination: '/_not-found',
        permanent: false,
      },
      {
        source: '/.git/:path*',
        destination: '/_not-found',
        permanent: false,
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
      {
        source: '/wp-admin/:path*',
        destination: '/_not-found',
        permanent: false,
      },
      {
        source: '/wp-login.php',
        destination: '/_not-found',
        permanent: false,
      },
      {
        source: '/wp-config.php',
        destination: '/_not-found',
        permanent: false,
      },
      {
        source: '/xmlrpc.php',
        destination: '/_not-found',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
