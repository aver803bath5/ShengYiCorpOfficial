<template>
<div class="wrapper">
  <header>
    <h1>
      產品介紹
    </h1>
  </header>
  <el-row>
    <el-col :span="8">
      <el-card class="box-card">
        <div v-for="category in productsListCategories" :key="category.id" class="text item">
          {{ category.name }}
        </div>
      </el-card>
    </el-col>
    <el-col :span="16">
      <div v-for="product in productsListProducts" :key="product.id">
        {{ product }}
      </div>
    </el-col>
  </el-row>
</div>
</template>

<script>
import axios from '~/plugins/axios';
import { mapState } from 'vuex';

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
  computed: {
    ...mapState([
      'productsListCategories',
      'productsListProducts'
    ])
  }
};
</script>

<style scoped>
.wrapper {
  padding: 1rem;
}

@media screen and (max-width: 950px) {
  .wrapper {
     margin-top: 4.5rem;
  }
}

</style>
