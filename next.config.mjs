/** @type {import('next').NextConfig} */
import { withExpo } from "@expo/next-adapter";
import withImages from "next-images";
import withFonts from "next-fonts";
import withPlugins from 'next-compose-plugins';
import withTM from 'next-transpile-modules';

const nextConfig = {
  reactStrictMode: false,
  images: {
    disableStaticImages: true,
  },
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
      },
      {
        test: /\.css$/,
        include: /[\\/]node_modules[\\/](slick-carousel)[\\/]/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      });

    return config;
  },
};
export default withPlugins([withTM(['slick-carousel']), withExpo, withImages, withFonts], nextConfig);
