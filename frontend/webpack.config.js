module.exports = {
    entry: {
        main: './src/index.js',
        project: './src/project.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: [
                  "style-loader",
                ],
              },
        ]
    }
};