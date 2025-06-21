const isProd = process.env.NODE_ENV === "production";
 
const nextConfig = {
  basePath: isProd ? "/Next.js-Tailwind-CSS-Portfolio-Template" : "",
  assetPrefix: isProd ? "/Next.js-Tailwind-CSS-Portfolio-Template/" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    // Disable the warning about preloaded CSS not being used
    optimizeCss: false,
  },
  // Disable the warning about preloaded CSS not being used
  onRecoverableError: (err) => {
    if (err.message.includes('was preloaded using link preload but not used')) {
      return;
    }
    console.error(err);
  },
};
 
module.exports = nextConfig;