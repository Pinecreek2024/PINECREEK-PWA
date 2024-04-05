// next.config.mjs
export default {
    reactStrictMode: true, // Enforces the strict mode for React
    poweredByHeader: false, // Disables the 'X-Powered-By' header for security
  
    // Uncomment and customize the following configurations as per your project needs:
  
    // Custom Webpack configuration
    // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    //   // Important: return the modified config
    //   return config;
    // },
  
    // Environment Variables
    // env: {
    //   CUSTOM_VARIABLE: 'value',
    // },
  
    // Redirects and Rewrites
    // async redirects() {
    //   return [
    //     {
    //       source: '/old-path',
    //       destination: '/new-path',
    //       permanent: true, // Indicates a 301 redirect
    //     },
    //   ];
    // },
  
    // async rewrites() {
    //   return [
    //     {
    //       source: '/api/:path*',
    //       destination: 'https://external-api.com/:path*',
    //     },
    //   ];
    // },
  
    // Customizing the Babel configuration
    // babel: {
    //   presets: [],
    //   plugins: [],
    // },
  
    // Image Optimization Configuration
    // images: {
    //   domains: ['example.com'], // Domains for external images
    // },
  
    // Internationalization (i18n) support
    // i18n: {
    //   locales: ['en', 'fr', 'es'],
    //   defaultLocale: 'en',
    // },
  
    // Additional Headers
    // async headers() {
    //   return [
    //     {
    //       source: '/(.*)',
    //       headers: [
    //         { key: 'X-Content-Type-Options', value: 'nosniff' },
    //         // More headers here
    //       ],
    //     },
    //   ];
    // },
  
    // Server-side Compression
    // compress: true,
  
    // Enabling HTTP/2 Push
    // experimental: {
    //   http2: true,
    // },
  };
  