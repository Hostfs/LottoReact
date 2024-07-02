const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = function override(config) {
    if (config.mode === 'production') {
        config.optimization.minimizer = [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        drop_console: true, // 콘솔 로그 제거
                    },
                    output: {
                        comments: false, // 주석 제거
                    },
                    mangle: true, // 변수 이름 난독화
                },
            }),
        ];
    }

    return config;
};
