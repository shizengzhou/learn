<template>
  <div class="team">
    <text class="team-name">{{ teamName }}</text>
    <text class="score">{{ score }}</text>
    <div class="btn-container">
      <button class="btn" text="+3 Points" @press="onAddThree"></button>
    </div>
      <div class="btn-container">
        <button class="btn" text="+2 Points" @press="onAddTwo"></button>
      </div>
      <div class="btn-container">
        <button class="btn" text="Free Throw" @press="onAddOne"></button>
      </div>
  </div>
</template>

<script>
import Button from './Button';

export default {
  name: 'Team',
  components: {
    Button
  },
  props: {
    teamName: {
      type: String,
      required: true
    },
    score: {
      type: Number,
      required: true
    }
  },
  methods: {
    onAddThree() {
      this.$emit('addThree');
    },
    onAddTwo() {
      this.$emit('addTwo');
    },
    onAddOne() {
      this.$emit('addOne');
    }
  }
};
</script>

<style scoped>
  .team {
    flex: 1;
  }

  .team-name {
    padding-top: 32px;
    padding-bottom: 32px;
    font-family: 'sans-serif-medium';
    font-size: 14wx;
    color: #616161;
    text-align: center;
  }

  .score {
    margin-bottom: 48px;
    font-family: 'sans-serif-light';
    font-size: 56wx;
    color: #000;
    text-align: center;
  }

  .btn-container {
    margin-left: 48px;
    margin-right: 48px;
    margin-bottom: 16px;
  }

  .btn {
    background-color: #ff9800;
  }
</style>
