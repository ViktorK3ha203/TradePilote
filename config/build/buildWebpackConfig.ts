import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolve } from './buildResolve';
import { BuildOptions } from './types/config';
import webpack from 'webpack';

export function buildWebpackConfig(
    options: BuildOptions
): webpack.Configuration {
    const {paths, mode, isDev} = options;
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: 'assets/js/[name].js', //filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolve(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    };
}
