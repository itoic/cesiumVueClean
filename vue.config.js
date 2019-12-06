const path = require("path");
// The path to the ceisum source code  导入下面四个常量 然后下面有四处配置
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const cesiumSource = "node_modules/cesium/Source";
const cesiumWorkers = "../Build/Cesium/Workers";
const resolve = (dir) => {
	return path.join(__dirname, dir);
};
module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'@': resolve('src'),
				// cesium 1
				cesium: path.resolve(__dirname, cesiumSource) // 用source会导致每次build所有cesium js；用DebugDir，则存在widgets.css引用问题
			}
		},
		amd: {
			// cesium 2
			toUrlUndefined: true
		},
		module: {
			// cesium 3 不加这个配置会报require引入警告
			unknownContextCritical: false
		},
		// cesium 4
		plugins: [
			new webpack.DefinePlugin({
				// Define relative base path in cesium for loading assets
				CESIUM_BASE_URL: JSON.stringify("")
			}), // 对build生效，拷贝到dist目录下。如：dist/Assets
			new CopyWebpackPlugin([{
				from: path.join(cesiumSource, cesiumWorkers),
				to: "Workers"
			}]),
			new CopyWebpackPlugin([{
				from: path.join(cesiumSource, "Assets"),
				to: "Assets"
			}]),
			new CopyWebpackPlugin([{
				from: path.join(cesiumSource, "Widgets"),
				to: "Widgets"
			}]),
			new webpack.ProvidePlugin({
				Cesium: ["cesium/Cesium"], // Cesium对象实例可在每个js中使用而无须import
			})
		],
		optimization: {
			minimize: process.env.NODE_ENV === "production" ? true : false
		}
	}
};

if (process.env.NODE_ENV === "production") {
	module.exports.configureWebpack.devtool = false; //网上之前资料建议这么做,不晓得新版用不用,空了研究 不生成source map 
	module.exports.configureWebpack.plugins = (module.exports.configureWebpack.plugins || []).concat([
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	]);
} else {
	module.exports.configureWebpack.devtool = "#source-map";
}
