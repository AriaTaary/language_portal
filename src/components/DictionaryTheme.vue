<template>
  <div @click="$parent.toActivateTheme(card.id)">
    <img 
      v-if="card.id !== $parent.currentTheme"
      class="itemImage" 
      :src="card.image" 
    />
    <img 
      v-else 
      class="itemImage" 
      :src="card.image" 
    />
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
