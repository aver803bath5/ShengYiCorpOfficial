<template>
  <div class="wrapper">
    <carousel></carousel>
  </div>
</template>

<script>
import Carousel from '@/components/home/Carousel';
import axios from '~/plugins/axios';

export default {
  async fetch({ store }) {
    store.commit('SET_LOADING', true);
    const { data } = await axios.get(`${store.state.locale}/banners`);
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
