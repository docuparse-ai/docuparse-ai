// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         remotePatterns: [
//             {
//                 protocol: "https",
//                 hostname: "randomuser.me"
//             }
//         ]
//     }
// };

// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me"
      }
    ]
  }
};

export default nextConfig;
