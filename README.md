# App - Gifexpert by udemy
Repositorio de prueba app gifs expert - by Udemy.
Búsqueda de gifs en base a un input simple utilizando API de `https://giphy.com/`. 

```
git clone https://github.com/eglade/app-gifexpert-udemy.git
npm install
```

## Instalación y configuracion de Jest + React Testing Library.
en proyectos de React + Vite

1. Instalaciones:
```
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 
yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
```

2. Opcional: Si usamos Fetch API en el proyecto:
```
yarn add --dev whatwg-fetch
```

3. Actualizar los scripts del __package.json__
```
"scripts: {
  ...
  "test": "jest --watchAll"
  ...
}
```

4. Crear la configuración de babel __babel.config.js__
```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```

5. Opcional, pero eventualmente necesario, crear Jest config y setup:

__jest.config.js__
```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```

__jest.setup.js__
```
// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
```

6. Opcional, caso de errr al realizar `npm run test`:
Si al realizar la configuracion les sale un error así
![image](https://user-images.githubusercontent.com/18151408/186029253-391245f4-1dd0-4233-ade9-c56084a1c5ed.png)


Entonces quitar el `"type": "module",` del archivo `package.json`
![image](https://user-images.githubusercontent.com/18151408/186029304-81fa74b7-8589-4b35-ab5d-2761e7da8352.png)