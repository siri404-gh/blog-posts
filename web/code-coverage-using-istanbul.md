# Code coverage using Istanbul

&nbsp;

## Install

```shell
npm  i --save babel-plugin-istanbul
```

## Configure

Update `.babelrc` to include the plugin.

```json
{
  "presets": ["@babel/preset-react"],
  "plugins": [
    "istanbul",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import"
  ]
}
```

## Execute

Run `npm run test`. It will generate the test coverage report on the console as
well as an html and several other files. The output of the html report looks
something like this:

## Output

![karma html output](/posts/web/karma-html-output.jpg 'karma html output')
