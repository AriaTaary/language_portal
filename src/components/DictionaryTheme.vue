<template>
  <div @click="$parent.toActivateTheme(card.name)">
    <span v-if="card.name !== $parent.currentTheme">
      <img class="img-theme" :src="require('../assets/img/'+card.name+'.png')" />
    </span>
    <span v-else>
      <img class="img-theme active-item" :src="require('../assets/img/'+card.name+'.png')" />
    </span>
  </div>
</template>

<script>
export default {
  props: {
    card: Object,
  },
};
</script>

<style>
.active-item {
  filter: drop-shadow(8px 9px 7px rgb(209, 137, 191));
}
</style>