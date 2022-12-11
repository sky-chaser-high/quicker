const path = require('path');

module.exports = {
    entry: './src/index.jsx',
    mode: 'production',
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist')
    },
    externals: {
        photoshop: 'commonjs2 photoshop',
        uxp: 'commonjs2 uxp',
        os: 'commonjs2 os'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/react']
                    }
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [{
                    loader: 'file-loader'
                }]
            }
        ]
    }
};
