<template>
  <div @click="$parent.toActivateTheme(card.name)">
    <img
      v-if="card.name !== $parent.currentTheme"
      class="itemImage"
      :src="require('../assets/img/'+card.name+'.png')"
    />
    <img v-else class="itemImage active-item" :src="require('../assets/img/'+card.name+'.png')" />
  </div>
</template>

<script>
export default {
  name: 'DictionaryTheme',

  props: {
    card: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
<style lang="scss" scoped>
.active-item {
  filter: drop-shadow(0px 10px 20px #5f7dce);
}
</style>