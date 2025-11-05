module.exports = function(config) {
config.set({
    
    // 1. FRAMEWORKS
    // Le dice a Karma que usaremos la sintaxis de Jasmine.
    frameworks: ['jasmine'],

    // 2. ARCHIVOS DE PRUEBA
    // Este patrón busca en todas las carpetas dentro de 'src'
    // cualquier archivo que termine en .spec.js
    // (Encontrará src/utils/formatters.spec.js y src/utils/validators.spec.js)
    files: [
    'src/**/*.spec.js'
    ],

    // 3. PREPROCESADORES (EL "TRADUCTOR" DE REACT)
    // Le dice a Karma: "Pasa los archivos .spec.js por Webpack
    // para que entienda 'import' y el código de React (JSX)".
    preprocessors: {
    'src/**/*.spec.js': ['webpack', 'sourcemap']
    },

    // 4. CONFIGURACIÓN DE WEBPACK
    // Aquí está la magia para que funcione con React.
    webpack: {
    module: {
        rules: [
        {
            // Para todos los archivos .js o .jsx
            test: /\.(js|jsx)$/, 
            exclude: /node_modules/, // Ignora el código de terceros
            use: {
            loader: 'babel-loader',
            options: {
                // Le enseña a Babel a entender:
                //   - '@babel/preset-env': JavaScript moderno (ES6+)
                //   - '@babel/preset-react': La sintaxis de React (JSX)
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
            }
        }
          // NOTA: Si tus pruebas importan .css o imágenes, 
          // necesitaríamos más loaders, pero para probar lógica no es necesario.
        ]
    },
    resolve: {
        // Permite que en tus pruebas puedas hacer `import ...`
        // sin tener que escribir la extensión .js o .jsx
        extensions: ['.js', '.jsx']
    },
      devtool: 'inline-source-map' // Ayuda a debugear
    },

    // 5. CONFIGURACIÓN RESTANTE (EL "RUNNER")
    reporters: ['progress'], // Cómo mostrar los resultados (simple)
    port: 9876,              // Puerto para Karma
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,         // Re-ejecuta las pruebas cada vez que guardas un archivo
    browsers: ['Chrome'],    // Abre Chrome para correr las pruebas
    singleRun: false         // Se queda corriendo
});
};