<template>
<div class="v-circle" v-bind:style="circleStyle">
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
    , DEFAULT_TEXT_COLOR = '#333333'

export default {
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
        borderColor: this.color || '#fb3b00',
        borderStyle: 'solid',
        borderWidth: (this.bold || DEFAULT_BOLD) + 'px',
        width: (this.width || DEFAULT_WIDTH) + 'px',
        height: (this.width || DEFAULT_WIDTH) + 'px',
        lineHeight: (this.width || DEFAULT_WIDTH) + 'px'
      },

      // 进度文字样式
      progressTextStyle: {
        fontSize: (this.fontSize || DEFAULT_FONT_SIZE) + 'px',
        color: this.textColor || DEFAULT_TEXT_COLOR
      }
    }
  }
}
</script>
