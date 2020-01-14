<template>
  <div class="button" @click="onClick">
    <text class="button-text">{{ text }}</text>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    onClick() {
      this.$emit('press');
    }
  }
}
</script>

<style scoped>
  .button {
    justify-content: center;
    align-items: center;
    min-width: 88px;
    min-height: 48px;
    padding: 16px;
    border-radius: 4px;
  }

  .button-text {
    font-size: 28px;
    font-weight: 500;
  }
</style>