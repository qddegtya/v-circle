<template>
<div class="v-circle" v-bind:style="circleStyle">
  <div class="fill" v-bind:style="fillStyle"></div>
  <span class="progress" v-bind:style="progressTextStyle">
    {{ pv || 0 }}
  </span>
</div>
</template>

<style lang="sass" scoped>
  .v-circle {
    border-radius: 50%;
    text-align: center;
    vertical-align: middle;
    position: relative;
    .fill {
      position: absolute;
      border-radius: 50%;
      box-sizing: border-box;
    }
    .progress {
      margin: 0;
      padding: 0;
      font-family: 'Impact';
    }
  }
</style>

<script>
const DEFAULT_WIDTH = 150
    , DEFAULT_BOLD = 5
    , DEFAULT_FONT_SIZE = 64
    , DEFAULT_TEXT_COLOR = '#bdc3c7'
    , DEFAULT_FILL_COLOR = '#2ecc71'

export default {
  methods: {
    getClip(t, r, b, l) {
      return `rect(${t}px, ${r}px, ${b}px, ${l}px)`
    }
  },

  props: [
    'color',
    'width',
    'fontSize',
    'pv',
    'textColor',
    'bold'
  ],

  data() {
    return {
      // 环形样式
      circleStyle: {
        borderColor: (this.textColor || DEFAULT_TEXT_COLOR),
        borderStyle: 'solid',
        borderWidth: DEFAULT_BOLD + 'px',
        width: (this.width || DEFAULT_WIDTH) + 'px',
        height: (this.width || DEFAULT_WIDTH) + 'px',
        lineHeight: (this.width || DEFAULT_WIDTH) + 'px'
      },

      // 进度文字样式
      progressTextStyle: {
        fontSize: (this.fontSize || DEFAULT_FONT_SIZE) + 'px',
        color: this.textColor || DEFAULT_TEXT_COLOR
      },

      fillStyle: {
        borderColor: this.color || DEFAULT_FILL_COLOR,
        width: (this.width || DEFAULT_WIDTH) + 'px',
        height: (this.width || DEFAULT_WIDTH) + 'px',
        borderStyle: 'solid',
        borderWidth: (this.bold || DEFAULT_BOLD) + 'px',
        clip: this.getClip(0, this.width, this.width, this.width / 2)
      }
    }
  }
}
</script>
