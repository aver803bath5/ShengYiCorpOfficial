<template>
<div class="wrapper">
  <el-row  :gutter="20">
    <el-col :span="6">
      <search-input></search-input>
      <products-cats-card></products-cats-card>
    </el-col>
    <el-col :span="17" class="product-display-wrapper">
      <products-display></products-display>
    </el-col>
  </el-row>
</div>
</template>

<script>
import axios from '~/plugins/axios';
import SearchInput from '~/components/products/SearchInput';
import ProductsCatsCard from '~/components/products/ProductsCatsCard';
import ProductsDisplay from '~/components/products/ProductsDisplay';

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
        name: params.search ? params.search : ''
      }
    });
    store.commit('SET_PRODUCTSLISTCATEGORIES', catRes.data.categories);
    store.commit('SET_PRODUCTSLISTPRODUCTS', productsRes.data.products);
    store.commit('SET_LOADING', false);
  },
  components: {
    SearchInput,
    ProductsCatsCard,
    ProductsDisplay
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
