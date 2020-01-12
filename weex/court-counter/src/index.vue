<template>
  <div class="wrapper">
    <div class="team-container">
      <team
        teamName="Team A"
        :score="scoreTeamA"
        @add-three="addThreeForTeamA"
        @add-two="addTwoForTeamA"
        @add-one="addOneForTeamA"></team>
      <div class="line"></div>
      <team
        teamName="Team B"
        :score="scoreTeamB"
        @add-three="addThreeForTeamB"
        @add-two="addTwoForTeamB"
        @add-one="addOneForTeamB"></team>
    </div>
    <div class="btn-container">
      <button class="btn" text="reset" @press="reset"></button>
    </div>
  </div>
</template>

<script>
import Team from '@/components/Team';
import Button from '@/components/Button';

export default {
  name: 'App',
  components: {
    Team,
    Button
  },
  data () {
    return {
      scoreTeamA: 0,
      scoreTeamB: 0
    }
  },
  methods: {
    addThreeForTeamA() {
      this.scoreTeamA += 3;
    },
    addTwoForTeamA() {
      this.scoreTeamA += 2;
    },
    addOneForTeamA() {
      this.scoreTeamA += 1;
    },
    addThreeForTeamB() {
      this.scoreTeamB += 3;
    },
    addTwoForTeamB() {
      this.scoreTeamB += 2;
    },
    addOneForTeamB() {
      this.scoreTeamB += 1;
    },
    reset() {
      this.scoreTeamA = 0;
      this.scoreTeamB = 0;
    }
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: space-between;
  }

  .team-container {
    flex-direction: row;
  }

  .line {
    width: 2px;
    background-color: #aaa;
    margin-top: 32px;
  }

  .btn-container {
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 64px;
  }

  .btn {
    background-color: #ff9800;
  }
</style>
