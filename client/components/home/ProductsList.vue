<template>
<div class="wrapper" v-loading="loading">
  <header>
    <h1>
      {{ $t('product_instruction') }}
    </h1>
  </header>
  <section>
    <el-row type="flex" class="products-list-row" justify="space-around">
      <el-col :md="{span: 5}" :sm="{span:11}" :xs={span:24} v-for="product in productsList" :key="product.id">
        <nuxt-link :to="convertPath(`/products/${product.id}`, locale)">
          <el-card class="product-card" :body-style="{ padding: '0px' }">
            <img :src="product.picture" class="image">
            <div class="product-text">
              <el-tooltip placement="top">
                <div slot="content" class="popover-text" v-html="product.name"></div>
                <div slot="content" class="popover-text" v-html="product.model"></div>
                <div>
                  <h3 v-html="product.name"></h3>
                  <h3 v-html="product.model"></h3>
                </div>
              </el-tooltip>
            </div>
          </el-card>
        </nuxt-link>
      </el-col>
    </el-row>
  </section>
</div>
</template>

<script>
import axios from '~/plugins/axios';
import { mapState } from 'vuex';
import convertPath from '~/utils/path';

export default {
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      loading: false,
      productsList: []
    };
  },
  computed: {
    ...mapState([
      'locale'
    ])
  },
  methods: {
    convertPath,
    async getProductsList() {
      try {
        this.loading = true;
        const { data } = await axios.get(`${this.locale}/products/stick`);
        this.productsList = data.products;
        this.loading = false;
      } catch (error) {
        this.loaidng = false;
        this.$message.error('Error Occured!');
      }
    },
    fetchData() {
      this.getProductsList();
    }
  }
};
</script>

<style scoped>
.wrapper {
  width: 80%;
  margin: 1rem auto;
}

.products-list-row {
  flex-wrap: wrap;
}

.el-card__body {
  padding: 0;
}

.image {
  display: block;
  width: 100%;
  height: auto;
  border-bottom: 1px #ddd solid;
}

.product-text {
  text-align: center;
  padding: 1rem;
  color: #409EFF;
  font-size: 1.2rem;
  font-weight: 800;
}

.popover-text-box {
  font-size: 1.2rem;
  text-align: center;
  padding: .5rem;
}

.product-name, .product-model {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}

@media screen and (max-width: 990px) {
  .product-card {
    margin-top: 1rem;
  }
}
</style>
