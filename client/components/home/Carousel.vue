<template>
  <div class="carousel-wrapper" v-loading="loading">
    <el-carousel :interval="4000" :type="carouselType" :height="carouselHeight">
      <el-carousel-item v-for="item in carousels.banners" :key="item.id" :style="{ backgroundImage: `url(${item.url})` }">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  data() {
    return {
      loading: false,
      carouselHeight: '0',
      carouselType: '',
    };
  },
  computed: {
    ...mapState([
      'carousels'
    ])
  },
  methods: {
    handleResize() {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 480) {
        this.carouselHeight = "300px";
        this.carouselType = '';
      } else if (screenWidth <= 800) {
        this.carouselHeight = "500px";
        this.carouselType = '';
      } else if (screenWidth <= 1680) {
        this.carouselHeight = "400px";
        this.carouselType = 'card';
      } else if (screenWidth <= 1920) {
        this.carouselHeight = "800px";
        this.carouselType = 'card';
      } else {
        this.carouselHeight = '800px';
        this.carouselType = 'card';
      }
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
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
