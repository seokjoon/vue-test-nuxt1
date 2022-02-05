<template>
  <div>
    {{ item }}
    <br />
    <button @click="foo">foo</button>
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
    }, 500)
  },


  methods: {
    foo() {
      this.$store.dispatch('foo/setItem')
      this.item = this.$store.getters['foo/getItem']
    },
  },
}
</script>



<style scoped>

</style>
