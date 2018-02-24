<template>
  <div class="carousel-wrapper" v-loading="loading">
    <el-carousel :interval="4000" type="card" height="500px">
      <el-carousel-item v-for="item in carousels.banners" :key="item.id" :style="{ backgroundImage: `url(${item.url})` }">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      loading: false,
      height: 0,
      mode: '',
      project: '123'
    };
  },
  computed: {
    ...mapState([
      'carousels'
    ])
  },
}
</script>

<style scoped>
.carousel-wrapper {
  margin-top: 1rem;
}

.el-carousel__item {
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain
}
</style>
