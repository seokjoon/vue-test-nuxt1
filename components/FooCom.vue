<template>
  <div>
    {{ item }}
  </div>
</template>



<script>
export default {
  name: 'Foo',


  data() {
    return {
      item: '',
    }
  },


  async fetch () {
    setTimeout(() => {
      this.item = 'FooCom'
    }, 1000)
  },
}
</script>



<style scoped>

</style>
