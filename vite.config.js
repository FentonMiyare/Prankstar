/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import viteJsconfigPaths from 'vite-jsconfig-paths';

export default defineConfig((configEnv) => {
	const isDevelopment = configEnv.mode === 'development';

	return {
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
				'@app': resolve(__dirname, 'src', 'app'),
				'@components': resolve(__dirname, 'src', 'components'),
				'@hooks': resolve(__dirname, 'src', 'hooks'),
				'@features': resolve(__dirname, 'src', 'features'),
				'@config': resolve(__dirname, 'src', 'config'),
				'@pages': resolve(__dirname, 'src', 'pages'),
			},
		},
		css: {
			modules: {
				generateScopedName: isDevelopment
					? '[name]__[local]__[hash:base64:5]'
					: '[hash:base64:5]',
			},
		},
	};
});

// , './src/**/*.css'
