/*
 * @Description: 
 * @Version: 1.0.0
 * @Autor: lqc
 * @Date: 2019-12-06 14:39:58
 * @LastEditors: lqc
 * @LastEditTime: 2020-06-01 14:03:33
 * @FilePath: \cesiumVueClean\vue.config.js
 */
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
	configureWebpack: {
		plugins: [
			new CopyWebpackPlugin([
				{
					from: 'node_modules/cesium/Build/Cesium/Workers',
					to: 'cesium/Workers'
				}
			]),
			new CopyWebpackPlugin([
				{
					from: 'node_modules/cesium/Build/Cesium/ThirdParty',
					to: 'cesium/ThirdParty'
				}
			]),
			new CopyWebpackPlugin([
				{ from: 'node_modules/cesium/Build/Cesium/Assets', to: 'cesium/Assets' }
			]),
			new CopyWebpackPlugin([
				{
					from: 'node_modules/cesium/Build/Cesium/Widgets',
					to: 'cesium/Widgets'
				}
			]),
			new webpack.DefinePlugin({
				// Define relative base path in cesium for loading assets
				CESIUM_BASE_URL: JSON.stringify('./cesium')
			})
		],
		module: {
			unknownContextCritical: false
		}
	}
}
