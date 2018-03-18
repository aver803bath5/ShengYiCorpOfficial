<template>
  <div>
    <navbar/>
    <nuxt id="nuxt-app"/>
    <my-footer/>
  </div>
</template>

<script>
import navbar from '~/components/common/Navbar';
import MyFooter from '~/components/common/Footer';

export default {
  components: {
    navbar,
    MyFooter
  }
}
</script>

<style>
#nuxt-app {
  min-height: 100vh;
}
</style>
