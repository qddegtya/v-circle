<template>
<div id="v-circle-container" class="fluid">
  <!-- header -->
  <div class="header">
    <h3 class="logo">
      v-circle
    </h3>
  </div>

  <!-- css-circle -->
  <div class="circle-container">
    <div class="preview clearfix">
      <circle-css color="#c0392b" width=110 font-size=50 pv=12></circle-css>
      <circle-css color="#27ae60" width=180 font-size=80 bold=10 pv=100></circle-css>
      <circle-css color="#16a085" width=120 font-size=60 pv=88></circle-css>
    </div>
    <div class="codes">
      <code>
        var circle = require('v-circle/components/css-circle.vue');
      </code>
    </div>
  </div>

  <!-- css-circle -->
  <div class="circle-container">
    <div class="preview clearfix">
      <circle-css color="#c0392b" width=110 font-size=50 pv=12></circle-css>
      <circle-css color="#27ae60" width=180 font-size=80 bold=10 pv=100></circle-css>
      <circle-css color="#16a085" width=120 font-size=60 pv=88></circle-css>
    </div>
    <div class="codes">
      <code>
        var circle = require('v-circle/components/css-circle.vue');
      </code>
    </div>
  </div>

  <!-- css-circle -->
  <div class="circle-container">
    <div class="preview clearfix">
      <circle-css color="#c0392b" width=110 font-size=50 pv=12></circle-css>
      <circle-css color="#27ae60" width=180 font-size=80 bold=10 pv=100></circle-css>
      <circle-css color="#16a085" width=120 font-size=60 pv=88></circle-css>
    </div>
    <div class="codes">
      <code>
        var circle = require('v-circle/components/css-circle.vue');
      </code>
    </div>
  </div>

  <!-- install -->
  <div class="install">
    <code>
      $ npm install v-circle
    </code>
  </div>
</div>
</template>

<style lang="sass">
$bgColor: #f9f9f9;
$vGreen: #27ae60;
$codeBg: #2c3e50;
$white: #ffffff;

.clearfix {
  overflow:auto;
  _height:1%;
}

body {
  background-color: $bgColor;
  margin: 0;
  padding: 0;
  font-size: 16px;
}

.fluid {
  width: 100%;
}

.header {
  height: 200px;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  position: relative;
  background-color: $bgColor;
  margin-bottom: 200px;

  .logo {
    display: block;
    width: 200px;
    height: 200px;
    line-height: 200px;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    top: 50%;
    margin-top: 0;

    color: $vGreen;
    background-color: $white;

    border-color: $vGreen;
    border-width: 5px;
    border-style: solid;

    font-size: 24px;
    font-family: 'Monaco';
    border-radius: 50%;

    box-shadow: 5px 8px 10px 0 rgba(0, 0, 0, 0.1);
  }
}

.circle-container {
  width: 610px;
  height: auto;
  margin: 0 auto;

  border-radius: 5px;
  background-color: $white;
  margin-bottom: 100px;

  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  .preview {
    background-color: $white;
    box-sizing: border-box;
    padding: 60px 30px;

    .v-circle {
      float: left;
      margin-right: 50px;
    }

    .v-circle:last-child {
      margin-right: 0;
    }
  }

  .codes {
    width: 100%;
    box-sizing: border-box;
    background-color: $codeBg;
    color: $white;
    padding: 20px;
    font-size: 14px;

    pre {
      margin: 0;
      padding: 0;
    }
  }
}
.install {
  width: 610px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 20px 0;
  margin-bottom: 200px;

  background-color: $codeBg;
  color: $white;
  text-align: center;
  border-radius: 5px;

  code {
    margin: 0;
    padding: 0;
    font-family: 'Monaco';
  }
}
</style>

<script>
import CssCircle from './components/css-circle.vue'

export default {
  components: {
    circleCss: CssCircle
  }
}
</script>
