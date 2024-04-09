// @ts-check
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  basePath: "/first-react",
  reactStrictMode: true,
  output: "export",  // <=== enables static exports
}
 
module.exports = nextConfig