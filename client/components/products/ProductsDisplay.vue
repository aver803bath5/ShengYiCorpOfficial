<template>
  <div>
    <el-row type="flex" :gutter="20" class="product-display-row" justify="space-around" v-if="productsListProducts.length != 0">
      <el-col v-for="product in productsListProducts" :key="product.id"  :xs="{span:24}" :sm="{span:8}" class="product-card-wrapper">
        <nuxt-link :to="convertPath(`/product/${product.id}`, locale)">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="product.picture" class="image">
            <div class="product-text">
              <el-tooltip placement="top">
                <div slot="content" class="popover-text">{{ product.name }}</div>
                <div slot="content" class="popover-text">{{ product.model }}</div>
                <div>
                  <h3>{{ product.name }}</h3>
                  <h3>{{ product.model }}</h3>
                </div>
              </el-tooltip>
            </div>
          </el-card>
        </nuxt-link>
      </el-col>
    </el-row>
    <h3 class="no-product-text" v-else>{{ $t('products-no-products') }}</h3>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import convertPath from '~/utils/path';

export default {
  computed: {
    ...mapState([
      'locale',
      'productsListProducts'
    ])
  },
  methods: {
    convertPath
  }
};
</script>

<style scoped>
a {
  display: block;
}

img {
  display: block;
  width: 100%;
}

.product-display-row {
  flex-wrap: wrap;
}

.product-card-wrapper {
  margin-top: 1.5rem;
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
</style>
