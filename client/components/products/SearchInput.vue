<template>
  <div class="search-input-wrapper">
    <el-input :placeholder="$t('products-search-placeholder')" v-model="inputText" @keydown.native.enter="doSearch">
      <el-button slot="append" icon="el-icon-search" @click="doSearch"></el-button>
    </el-input>
  </div>
</template>

<script>
import convertPath from '~/utils/path';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      inputText: ''
    };
  },
  computed: {
    ...mapState([
      'locale'
    ])
  },
  methods: {
    convertPath,
    doSearch() {
      this.$router.push(this.convertPath(`/${this.locale}/products-list/0/1/${this.inputText}`));
    }
  }
};
</script>

<style scoped>
.search-input-wrapper {
  margin: 1rem auto;
}
</style>
