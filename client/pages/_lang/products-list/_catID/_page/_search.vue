<template>
<div class="wrapper">
  <header>
    <h1>
      產品介紹
    </h1>
  </header>
  <el-row>
    <el-col :span="6">
      <products-cats-card></products-cats-card>
    </el-col>
    <el-col :span="17">
    </el-col>
  </el-row>
</div>
</template>

<script>
import axios from '~/plugins/axios';
import ProductsCatsCard from '~/components/products/ProductsCatsCard';

export default {
  validate({ params }) {
    return /^\d+$/.test(params.catID && params.page);
  },
  async fetch({ store, params }) {
    if (!params.search) params.search = '';

    store.commit('SET_LOADING', true);
    const catRes = await axios.get(`${store.state.locale}/categories`);
    const productsRes = await axios.get(`${store.state.locale}/products`, {
      params: {
        category: params.catID,
        page: params.page,
        count: 12,
        name: params.search ? '' : params.search
      }
    });
    store.commit('SET_PRODUCTSLISTCATEGORIES', catRes.data.categories);
    store.commit('SET_PRODUCTSLISTPRODUCTS', productsRes.data.products);
    store.commit('SET_LOADING', false);
  },
  components: {
    ProductsCatsCard
  }
};
</script>

<style scoped>
.wrapper {
  max-width: 1400px;
  margin: 1rem auto;
  padding: 1rem;
}

@media screen and (max-width: 950px) {
  .wrapper {
     margin-top: 4.5rem;
  }
}

</style>
