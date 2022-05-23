
<template>
  <radial-progress-bar
    :diameter="200"
    :completed-steps="completedSteps"
    :total-steps="totalSteps">
   <p>{{ totalSteps }} / {{ completedSteps }}</p>
  </radial-progress-bar>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress'

export default {
  name: 'ProgressBar',

  components: {
    RadialProgressBar,
  },

  data () {
    return {
      completedSteps: 10,
      totalSteps: 100
    }
  },
}
</script>
