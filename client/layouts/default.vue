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
html
{
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}

</style>
