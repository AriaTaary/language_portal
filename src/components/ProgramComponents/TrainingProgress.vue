<template>
  <v-app>
    <div class="text-center">
      <h3 class="progress-heading">Начальный уровень</h3>
      <v-progress-circular
        class="progress-item"
        :rotate="360"
        :size="100"
        :width="15"
        :value="20"
        color="#8892ad80"
      >20</v-progress-circular>
      <h3 class="progress-heading">Средний уровень</h3>
      <v-progress-circular
        class="progress-item"
        :rotate="-90"
        :size="100"
        :width="15"
        :value="50"
        color="#8892ad"
      >50</v-progress-circular>
      <h3 class="progress-heading">Продвинутый уровень</h3>
      <v-progress-circular
        class="progress-item"
        :rotate="90"
        :size="100"
        :width="15"
        :value="5"
        color="#6b738a"
      >5</v-progress-circular>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'TrainingProgress',
};
</script>

<style lang="scss" scoped>
.text-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.progress-item {
  margin-top: 20px;
}

.progress-heading {
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  color: #8892ad;
  margin-bottom: 20px;

  &:not(:first-child) {
    margin-top: 40px;
  }
}
</style>