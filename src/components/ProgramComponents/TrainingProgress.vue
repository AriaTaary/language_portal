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
        color="teal"
      >20</v-progress-circular>
      <h3 class="progress-heading">Средний уровень</h3>
      <v-progress-circular
        class="progress-item"
        :rotate="-90"
        :size="100"
        :width="15"
        :value="50"
        color="primary"
      >50</v-progress-circular>
      <h3 class="progress-heading">Продвинутый уровень</h3>
      <v-progress-circular
        class="progress-item"
        :rotate="90"
        :size="100"
        :width="15"
        :value="5"
        color="red"
      >5</v-progress-circular>
    </div>
  </v-app>
</template>


<script>
export default {
  value: 20,
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
  margin-top: 40px;
  font-size: 14px;
  color: #666e83;
}
</style>