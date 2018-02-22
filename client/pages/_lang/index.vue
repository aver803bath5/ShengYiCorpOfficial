<template>
  <div class="wrapper">
    <carousel></carousel>
  </div>
</template>

<script>
import axios from 'axios';
import Carousel from '@/components/home/Carousel';

export default {
  async fetch({ store }) {
    store.commit('SET_LOADING', true);
    const { data } = await axios.get('http://127.0.0.1:9999/banners');
    store.commit('SET_CAROUSELS', data);
    store.commit('SET_LOADING', false);
  },
  head() {
    return {
      title: '昇儀股份有限公司 Sheng Yi Tech & Analytics Co., Ltd.'
    };
  },
  components: {
    Carousel
  }
}
</script>

<style>
</style>
