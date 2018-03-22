<template>
  <div class="wrapper">
    <header>
      <h1>
        {{ $t('navbar.brands') }}
      </h1>
    </header>
    <section>
      <el-row type="flex" class="brands-row" justify="space-between" :gutter="20">
        <el-col :sm="{span:8}" :xs="{span:24}" v-for="brand in brands" :key="brand.id" >
          <a :href="brand.link" class="brand-link" target="_blank">
            <img :src="brand.picture" :alt="brand.link">
          </a>
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<script>
import axios from '~/plugins/axios';

export default {
  async asyncData({ store }) {
    const { data } = await axios.get(`${store.state.locale}/brands`);
    return { brands: data.brands };
  }
}
</script>

<style scoped>
.wrapper {
  max-width: 1300px;
  margin: auto;
  padding: 1rem;
}

.brand-link {
  display: block;
  margin-top: 1rem;
  border: 1px #ddd solid
}

img {
  display: block;
  width: 100%;
}

.brands-row {
  flex-wrap: wrap;
}

@media screen and (max-width: 1000px) {
  .wrapper {
    margin-top: 3rem;
  }
}
</style>
