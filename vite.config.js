/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import viteJsconfigPaths from 'vite-jsconfig-paths';

export default defineConfig({
	plugins: [
		react(),
		viteJsconfigPaths(),
		eslintPlugin({
			cache: false,
			include: ['./src/**/*.js', './src/**/*.jsx'],
			exclude: [],
		}),
	],
	resolve: {
		alias: {
			// app: resolve(__dirname, "src", "app"),
			// components: resolve(__dirname, "src", "components"),
			// hooks: resolve(__dirname, "src", "hooks"),
			'@app': resolve(__dirname, 'src', 'app'),
			'@components': resolve(__dirname, 'src', 'components'),
			'@hooks': resolve(__dirname, 'src', 'hooks'),
			'@features': resolve(__dirname, 'src', 'features'),
		},
	},
});
