<template>
  <div>
    <FooCom />
    {{ item }}
  </div>
</template>



<script>
export default {
  name: 'foo',


  data() {
    return {
      item: '',
    }
  },


  async asyncData (ctx) {
    const item = 'foo asyncData'
    return { item }
  },
}
</script>



<style scoped>

</style>
