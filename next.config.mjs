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
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.symlinks = false;
    return config;
  },
};

export default nextConfig;