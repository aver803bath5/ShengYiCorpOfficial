<template>
  <div class="product-display-wrapper">
    <el-row :gutter="20" class="product-display-row" v-if="gasProducts.length != 0">
      <el-col v-for="product in gasProducts" :key="product.id"  :xs="{span:24}" :sm="{span:8}" class="product-card-wrapper">
        <nuxt-link :to="convertPath(`/gas/product/${product.id}`, locale)">
          <el-card :body-style="{ padding: '0px' }" class="product-card">
            <img :src="product.picture" class="image">
            <div class="product-text">
              <el-tooltip placement="top">
                <div slot="content" class="popover-text" v-html="product.name"></div>
                <div slot="content" class="popover-text" v-html="product.model"></div>
                <div>
                  <h3 v-html="product.name" class="product-name"></h3>
                  <h3 v-html="product.model" class="product-model"></h3>
                </div>
              </el-tooltip>
            </div>
          </el-card>
        </nuxt-link>
      </el-col>
    </el-row>
    <h3 class="no-product-text" v-else>{{ $t('gas-products-no-products') }}</h3>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import convertPath from '~/utils/path';

export default {
  computed: {
    ...mapState([
      'locale',
      'gasProducts'
    ])
  },
  methods: {
    convertPath
  }
};
</script>

<style scoped>
.product-display-wrapper {
  margin-top: -1rem;
}

a {
  display: block;
}

img {
  display: block;
  width: 100%;
  border-bottom: 1px rgba(17, 17, 17, 0.1) solid;
}

.product-display-row {
  flex-wrap: wrap;
}

.product-card-wrapper {
  margin-top: 1.5rem;
}

.product-card {
  height: 280px;
}

.product-name, .product-model {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  text-decoration: none;
}

.product-text {
  text-align: center;
  padding: .5rem;
  color: #409EFF;
}

.no-product-text {
  text-align: center;
  font-size: 3rem;
  font-weight: 200;
}

.popover-text {
  text-align: center;
  padding: .2rem;
  font-size: 1rem;
}

@media screen and (max-width: 1300px){
  .product-card {
    height: 260px;
  }
}

@media screen and (max-width: 1200px){
  .product-card {
    height: 240px;
  }
}

@media screen and (max-width: 1100px){
  .product-card {
    height: 230px;
  }
}

@media screen and (max-width: 1000px){
  .product-card {
    height: 220px;
  }
}

@media screen and (max-width: 900px){
  .product-card {
    height: 200px;
  }
}

@media screen and (max-width: 768px){
  .product-display-wrapper {
    margin-top: 0;
  }

  .product-card {
    height: auto;
  }
}
</style>
