<template>
  <div class="pagination-wrapper">
    <el-pagination
      layout="prev, pager, next"
      :total="productsListTotal"
      :page-size="12"
      @current-change="handlePageChange"
      :current-page="parseInt(productsListCurtPage)"
      >
    </el-pagination>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import convertPath from '~/utils/path';

export default {
  computed: {
    ...mapState([
      'locale',
      'productsListTotal',
      'productsListSearchText',
      'productsListCurtCatID',
      'productsListCurtPage'
    ])
  },
  methods: {
    convertPath,
    ...mapMutations([
      'SET_PRODUCTSLISTCURTPAGE'
    ]),
    handlePageChange(page) {
      this.SET_PRODUCTSLISTCURTPAGE(page);
      this.$router.push(convertPath(`/products-list/${this.productsListCurtCatID}/${page}/${this.productsListSearchText}`, this.locale));
    }
  }
};
</script>

<style scoped>
.pagination-wrapper {
  text-align: center;
  margin-top: 1rem;
}
</style>
