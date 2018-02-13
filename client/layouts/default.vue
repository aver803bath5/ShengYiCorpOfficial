<template>
  <div>
    <navbar/>
    <nuxt/>
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
</style>
