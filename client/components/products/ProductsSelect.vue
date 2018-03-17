<template>
  <div>
    <el-select v-model="selectValue" :placeholder="$t('products-select-placeholder')" class="products-select" @change="handleSelect">
      <el-option
        :label="$t('products-all')"
        :value="0">
      </el-option>
      <el-option
        v-for="cat in productsListCategories"
        :key="cat.id"
        :label="cat.name"
        :value="cat.id">
      </el-option>
    </el-select>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import convertPath from '~/utils/path';

export default {
  data() {
    return {
      selectValue: ''
    };
  },
  computed: {
    ...mapState([
      'locale',
      'productsListCategories'
    ])
  },
  methods: {
    convertPath,
    handleSelect() {
      this.$router.push(this.convertPath(`/products-list/${this.selectValue}/1/`, this.locale));
    }
  }
};
</script>

<style scoped>
.products-select {
  width: 100%;
}
</style>
