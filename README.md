v-circle
======

A collection of circle progress with Vue.js.

* Vue 1.0+ use `v-circle 0.1+`
* Vue 2.0+ use `v-circle 0.2+`

## Demos & Examples

Live Demo: [xiaoa.name/v-circle](http://xiaoa.name/v-circle/)

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
<circle-css color="#3498db" width=120 font-size=48 pv=12 bold=8 text-bg-color='#f0f0f0'></circle-css>
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

## API

### CssCircles

| prop | type | description | example | default value |
|:------------- |:--------------- |:------------- |:-------- |:-------- |
| color | String | circle progress fill color | #000000 | #2ecc71 |
| width | Number | circle size | 180 | 150 |
| fontSize | Number | circle progress value size | 64 | 64 |
| pv | Number | circle progress value | 75 | 0 |
| textColor | String | circle progress value color | #bdc3c7 | #bdc3c7 |
| bold | String | circle progress outline width | 10 | 5 |
| textBgColor | String | circle progress value background-color | #000000 | #f9f9f9 |
| borderColor | String | circle progress outline color | #000000 | #bdc3c7 |
| during | Number | circle progress animation dur-time | 2 | 0.8 |
| bgColor | String | circle progress background-color | #000000 | #f0f0f0 |
