## Installation
```bash
# Make sure both is installed globally
cnpm i

#npm start 开启项目
npm start 

# Generating new stateless functional components
yo react-webpack:component my/namespaced/components/name --stateless

```
##架构脚手架源于 generator-react-webpack
```bash
# Make sure both is installed globally
npm install -g yo
npm install -g generator-react-webpack
```

## Setting up projects
```bash
# Create a new directory, and `cd` into it:
mkdir my-new-project && cd my-new-project

# Run the generator
yo react-webpack
```

Please make sure to edit your newly generated `package.json` file to set description, author information and the like.

The above command will create a new component, as well as its stylesheet and a basic testcase.

## Generating new stateless functional components
```
yo react-webpack:component components/name --stateless
```

## Adding PostCSS plugins
If you have enabled [PostCSS](https://github.com/postcss/postcss) at generation time, install your PostCSS plugins via npm and *require* it in **postcss** function in *cfg/base.js*.

Example for autoprefixer:
```bash
cd my-new-project
npm install autoprefixer
```
Require in *cfg/base.js*
```JavaScript
...
postcss: function () {
  return [
    require('autoprefixer')({
      browsers: ['last 2 versions', 'ie >= 8']
    })
  ];
}
...
```

## Usage
The following commands are available in your project:
```bash
# Start for development
npm start # or
npm run serve

# Start the dev-server with the dist version
npm run serve:dist

# Just build the dist version and copy static files
npm run dist

# Run unit tests
npm test

# Auto-run unit tests on file changes
npm run test:watch

# Lint all files in src (also automatically done AFTER tests are run)
npm run lint

# Clean up the dist directory
npm run clean

# Just copy the static assets
npm run copy
```

