/** @type {import('next').NextConfig} */
import withPlugins from 'next-compose-plugins';
import withTM from 'next-transpile-modules';

const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|woff|woff2|eot|ttf|otf)$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: '[name].[ext]',
          },
        },
      ],
    });

    return config;
  },
};
export default withPlugins([withTM(['slick-carousel'])], nextConfig);
