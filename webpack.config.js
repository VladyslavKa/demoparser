const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { loader: miniCssExtractPluginLoader} = MiniCssExtractPlugin;
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = (params, {mode}) => {
	const isProduction = mode === 'production';

	return {
		mode,

		devtool: isProduction ? 'none' : 'inline-source-map',

		entry: {
			main: './frontend/initialize',
		},

		output: {
			filename: "bundle-[name].js?h=[fullhash]",
			path: `${__dirname}/public/`,
			publicPath: '/',
		},
		resolve: {
			extensions: [
				'.ts',
				'.js',
				'.vue',
				'.vue.ts'
			],

			alias: {
				"@Components": `${__dirname}/frontend/application/components`,
				"@Assets": `${__dirname}/frontend/assets`
			},
		},

		module: {
			rules: [
				{
					test: /\.tsx?$/,
					loader: 'ts-loader',
					options: {
						appendTsSuffixTo: [/\.vue$/],
					},
					exclude: /node_modules/,
				},

				{
					test: /\.vue$/,
					loader: 'vue-loader',
				},

				{
					test: /\.m?js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								['@babel/preset-env', { targets: "defaults" }]
							]
						}
					}
				},

				{
					test: /\.less$/,
					use: [
						{
							loader: miniCssExtractPluginLoader
						},
						{
							loader: 'css-loader'
						},
						{
							loader: 'less-loader'
						}
					]
				},

				{
					test: /\.css$/,
					use: [
						{
							loader: miniCssExtractPluginLoader
						},
						{
							loader: 'css-loader'
						},
					]
				},

				{
					test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
							}
						}
					]
				},

				{
					test: /\.(png|jpe?g|gif)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[path][name].[ext]',
							},
						},
					],
				},
			],
		},

		plugins: [
			new HtmlWebpackPlugin({
				template: './frontend/assets/templates/index.html',
				filename: 'index.html?hash=[fullhash]',
			}),

			new MiniCssExtractPlugin({
				filename: '[name].css?hash=[fullhash]',
				chunkFilename: '[name].css?hash=[fullhash]',
			}),

			new CopyPlugin(
				{
					patterns: [
						{
							from: './frontend/assets/images/',
							to: 'assets/images'
						},
					],
				},
			),

			new VueLoaderPlugin(),
		],

		devServer: {
			contentBase: `${__dirname}/public`,
			historyApiFallback: true,
		},
	};
};
