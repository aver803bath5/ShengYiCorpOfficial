<template>
<div class="wrapper">
  <header>
    <h1>
      {{ $t('product_instruction') }}
    </h1>
  </header>
  <section>
    <el-row type="flex" class="products-list-row" justify="space-between">
      <el-col :sm="{span:5}" :xs={span:24} v-for="item in 4" :key="item">
        <nuxt-link to="google.com">
          <el-card class="product-card">
            <img src="http://www.shengyi.com.tw/api/upload/image/1503442406_272423_MicroRAE.jpg" class="image">
            <div class="product-text">
              <el-tooltip placement="top">
                <div slot="content" class="popover-text-box">productname<br/>product model</div>
                  <div>
                    <h3 class="product-name">productname</h3>
                    <h4 class="product-model">product model</h4>
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

export default {
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      productsList: []
    };
  },
  computed: {
    ...mapState([
      'locale'
    ])
  },
  methods: {
    async getProductsList() {
      try {
        const { data } = await axios.get(`${this.locale}/products/stick`);
        this.productsList = data.proudcts;
      } catch (error) {
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
  max-width: 1200px;
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

@media screen and (max-width: 950px) {
  .products-list-row {
    padding: 1rem;
  }
}

@media screen and (max-width: 768px) {
  .product-card {
    margin-top: 1rem;
  }
}
</style>
