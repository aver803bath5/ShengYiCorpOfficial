<template>
<div class="wrapper">
  <el-row  :gutter="20">
    <el-col :sm="{span:6}" :xs="{span:24}">
      <product-card class="products-card"></product-card>
    </el-col>
    <el-col :sm="{span:17}" :xs="{span:24}" class="product-display-wrapper">
      <products-display></products-display>
    </el-col>
  </el-row>
</div>
</template>

<script>
import axios from '~/plugins/axios';
import ProductCard from '~/components/gas-products/ProductsCatsCard';
import ProductsDisplay from '~/components/gas-products/ProductsDisplay';

export default {
  async fetch({ store, params }) {
    store.commit('SET_LOADING', true);

    if (params.gasName !== '') {
      const productsRes = await axios.get(`/${store.state.locale}/tags/${params.gasName}`);
      store.commit('SET_GASPRODUCTS', productsRes.data.products);
    } else {
      // 如果 gasName 是空字串，清空 gasproudcts 的 state，避免從其他 gasName 導到空 gasName 還有 products 的情況
      store.commit('SET_GASPRODUCTS', []);
    }

    const gasRes = await axios.get(`/${store.state.locale}/tags`);
    store.commit('SET_CURTGASNAME', params.gasName);
    store.commit('SET_GASPRODUCTSTAGS', gasRes.data.tags);
    store.commit('SET_GASPRODUCTSTAGSHTML', gasRes.data.tagsHtml);
    store.commit('SET_LOADING', false);
  },
  components: {
    ProductCard,
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
