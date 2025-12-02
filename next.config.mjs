/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
  // webpack: (config, { isServer }) => {
  //   if (isServer) {
  //     config.externals = config.externals || [];
  //     config.externals.push({
  //       'braintrust': 'commonjs braintrust',
  //       '@braintrust/otel': 'commonjs @braintrust/otel',
  //     });
  //   }
  //   return config;
  // },
};

export default nextConfig;
