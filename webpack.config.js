// Configuración de Webpack que nos permitira preparar nuestro proyecto de forma personalizada
const path = require('path'); // Nos permite saber donde vamos a trabajar o donde esta ubicado el proyecto
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js', // Nos permite saber donde esta el punto de entrada de nuestra aplicacion
    output: { // Donde va  avivir el proyecto una vez que este preparado
        path: path.resolve(__dirname, 'dist'), //en nuestro path, crea la carpeta dist
        filename: 'bundle.js', // Poner nombre a nuestro Bundle o empaquetado que se va a crear
        publicPath: '/'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', 'jsx'], // extensión de archivos a tomar en cuenta
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@icons': path.resolve(__dirname, 'src/assets/icons/'),
            '@logos': path.resolve(__dirname, 'src/assets/logos/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@context': path.resolve(__dirname, 'src/context/'),
        }
    },
    module: { // loaders para cada tipo de archivo
        rules: [ // reglas para usar
            {
                // test: /\.(js|jsx)$/, // extensiones en las cuales actuará babel
                test: /\.js$|jsx/, // extensiones en las cuales actuará babel
                exclude: /node_modules/, // siempre excluir node modules que no lea nada dentro de node_modules
                use: { // indicamos el loader
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader'
                }]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset'
            }
        ]
    },
    plugins: [ // plugins
        new HtmlWebpackPlugin({ // instanciamos el plugin para html
            template: './public/index.html', // archivo raíz a transformar
            filename: './index.html' // el archivo resultante
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    devServer: {
        allowedHosts: path.join(__dirname, 'dist'),
        compress: true,
        port: 3005,
        historyApiFallback: true,

    }

}