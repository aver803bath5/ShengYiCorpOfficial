<template>
  <div class="wrapper">
    <header class="product-title-text">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="convertPath('/', locale)">{{ $t('navbar.home') }}</el-breadcrumb-item>
        <el-breadcrumb-item :to="convertPath(`/gas-products-list/${curtGasName}`, locale)">{{ $t('navbar.gas-products') }}</el-breadcrumb-item>
        <el-breadcrumb-item v-html="product.name"></el-breadcrumb-item>
      </el-breadcrumb>
      <h1 class="product-name" v-html="product.name"></h1>
      <h2 class="product-model">
        Model: {{ product.model }}
      </h2>
      <h3 class="product-brand">
        廠牌: {{ product.brand }}
      </h3>
    </header>
    <article>
      <section>
        <img :src="product.picture" :alt="product.name">
      </section>
      <section class="products-descr-wrapper" v-html="product.description">
      </section>
    </article>
  </div>
</template>

<script>
import axios from '~/plugins/axios';
import convertPath from '~/utils/path';
import { mapState } from 'vuex';

export default {
  validate({ params }) {
    return /^\d+$/.test(params.productID);
  },
  async asyncData({ store, params }) {
    const { data } = await axios.get(`${store.state.locale}/products/${params.productID}`);
    return { product: data };
  },
  head() {
    return {
      title: `${this.product.name} | ${this.product.model}`,
      meta: [
        { hid: 'description', name: 'description', content: this.product.description },
        { hid: 'og-image', property: 'og-image', content: this.product.picture }
      ]
    };
  },
  computed: {
    ...mapState([
      'locale',
      'curtGasName'
    ])
  },
  methods: {
    convertPath
  }
}
</script>

<style scoped>
.wrapper {
  margin: .5rem auto;
  max-width: 1300px;
  padding: 1rem;
}

.product-title-text h1, h2, h3 {
  text-align: center;
  font-size: 2.5rem;
  color: #1f2d3d
}

img {
  display: block;
  width: 60%;
  margin: .3rem auto;
  border: 1px #ddd solid;
}

.products-descr-wrapper {
  border-top: 1px #ddd solid;
  margin: 1rem auto;
  padding: 1.2rem;
  font-size: 1.2rem;
}

@media screen and (max-width: 1000px) {
  .wrapper {
    margin-top: 3rem;
  }

  .product-title-text .product-name, .product-title-text .product-model {
    font-size: 1.5rem;
  }
}

</style>
