<template>
<div class="wrapper">
  <header>
    <h1>
      產品介紹
    </h1>
  </header>
</div>
</template>

<script>
import axios from '~/plugins/axios';

export default {
  validate({ params }) {
    return /^\d+$/.test(params.catID && params.page);
  },
  async fetch({ store, params }) {
    store.commit('SET_LOADING', true);
    const catRes = await axios.get(`${store.state.locale}/categories`);
    const productsRes = await axios.get(`${store.state.locale}/products`, {
      params: {
        category: params.catID,
        page: params.page,
        count: 12,
        name: ''
      }
    });
    store.commit('SET_PRODUCTSLISTCATEGORIES', catRes.data.categories);
    store.commit('SET_PRODUCTSLISTPRODUCTS', productsRes.data.products);
    store.commit('SET_LOADING', false);

  },
};
</script>

<style>

</style>
