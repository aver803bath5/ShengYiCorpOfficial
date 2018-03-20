<template>
  <div>
    <el-select v-model="selectValue" :placeholder="$t('products-select-placeholder')" class="products-select" @change="handleSelect">
      <el-option
        :label="$t('products-all')"
        :value="0">
      </el-option>
      <el-option
        v-for="(tag, index) in gasProductsTagsHtml"
        :key="tag"
        :label="tag"
        :value="gasProductsTags[index]">
        <span v-html="tag"></span>
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
      'gasProductsTags',
      'gasProductsTagsHtml'
    ])
  },
  methods: {
    convertPath,
    handleSelect() {
      this.$router.push(this.convertPath(`/gas-products-list/${this.selectValue}`, this.locale));
    }
  }
};
</script>

<style scoped>
.products-select {
  width: 100%;
}
</style>
