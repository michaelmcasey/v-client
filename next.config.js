/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Exclude firebase-admin from client-side bundling
      config.resolve.alias = {
        ...config.resolve.alias,
        'firebase-admin': false,
      };

      // Handle node: protocol imports
      config.resolve.fallback = {
        ...config.resolve.fallback,
        stream: require.resolve('stream-browserify'),
        crypto: require.resolve('crypto-browserify'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        url: require.resolve('url/'),
        assert: require.resolve('assert/'),
        buffer: require.resolve('buffer/'),
      };
    }

    // Add externals configuration
    if (!config.externals) {
      config.externals = [];
    }
    if (Array.isArray(config.externals)) {
      config.externals.push({
        'node:stream': 'stream',
        'node:crypto': 'crypto',
        'node:http': 'http',
        'node:https': 'https',
        'node:os': 'os',
        'node:url': 'url',
        'node:assert': 'assert',
        'node:buffer': 'buffer'
      });
    }

    return config;
  },
  transpilePackages: ['firebase-admin'],
};

module.exports = nextConfig;
