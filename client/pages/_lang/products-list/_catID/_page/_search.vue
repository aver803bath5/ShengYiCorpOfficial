<template>
<div class="wrapper">
  <el-row  :gutter="20">
    <el-col :sm="{span:6}" :xs="{span:24}">
      <search-input></search-input>
      <products-cats-card class="products-card"></products-cats-card>
    </el-col>
    <el-col :sm="{span:17}" :xs="{span:24}" class="product-display-wrapper">
      <products-display></products-display>
      <products-pagination></products-pagination>
    </el-col>
  </el-row>
</div>
</template>

<script>
import axios from '~/plugins/axios';
import SearchInput from '~/components/products/SearchInput';
import ProductsCatsCard from '~/components/products/ProductsCatsCard';
import ProductsDisplay from '~/components/products/ProductsDisplay';
import ProductsPagination from '~/components/products/ProductsPagination';

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
        name: params.search
      }
    });
    const totalRes = await axios.get(`${store.state.locale}/products/total`, {
      params: {
        category: params.catID,
        name: params.search
      }
    });
    store.commit('SET_PRODUCTSLISTCATEGORIES', catRes.data.categories);
    store.commit('SET_PRODUCTSLISTPRODUCTS', productsRes.data.products);
    // catID
    store.commit('SET_PRODUCTSLISTCURTCATID', params.catID);
    // total
    store.commit('SET_PRODUCTSLISTTOTAL', totalRes.data.total);
    // search text
    store.commit('SET_PRODUCTSLISTSEARCHTEXT', params.search);
    // curt page
    store.commit('SET_PRODUCTSLISTCURTPAGE', params.page);
    store.commit('SET_LOADING', false);
  },
  components: {
    SearchInput,
    ProductsCatsCard,
    ProductsDisplay,
    ProductsPagination
  }
};
</script>

<style scoped>
.wrapper {
  max-width: 1400px;
  margin: 1rem auto;
  padding: 1rem;
}

@media screen and (max-width: 1000px) {
  .wrapper {
     margin-top: 3rem;
  }
}

@media screen and (max-width: 768px) {
  .products-card {
    display: none;
  }
}

</style>
