v-circle
======

A collection of circle progress with Vue.js.

* Vue 1.0+ use `v-circle 0.1+`
* Vue 2.0+ use `v-circle 0.2+`

## Demos & Examples

Live Demo: [xiao.name/v-circle](http://xiaoa.name/v-circle/)

To build the examples locally, run:

```
npm install
npm run dev
```

Then open [http://localhost:8080/examples/home.html](http://localhost:8080/examples/home.html) in a browser.

## Installation

The easiest way to use `v-circle` is to install it from NPM and include it in your own Vue build process (using [Webpack](http://webpack.github.io/), etc)

```bash
$ npm install v-circle
```

## Build

build to dist

```
$ npm run build
```

You can also use the standalone build by including `dist/v-circle.js` in your page. If you use this, make sure you have already included Vue, and it is available as a global variable.

## Usage

.vue file usage

```
<template>
<circle-css color="#c0392b" width=110 font-size=50 pv=12></circle-css>      
</template>

<script>
import CssCircle from 'v-circle/components/css-circle.vue'

export default {
  components: {
    circleCss: CssCircle
  }
}
</script>
```

## Circles

* CssCircles
* SvgCircles
* CanvasCircles

## Browser Support
