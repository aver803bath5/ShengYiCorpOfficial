<template>
  <div class="cats-card-wrapper">
    <ul class="cats-card">
      <li v-for="(tag, index) in gasProductsTagsHtml" :key="tag">
          <el-tooltip placement="right">
            <div slot="content" v-html="tag"></div>
            <nuxt-link class="cat-link" :to="convertPath(`/gas-products-list/${gasProductsTags[index]}`, locale)">
              <span v-html="tag"></span>
            </nuxt-link>
          </el-tooltip>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import convertPath from '~/utils/path';

export default {
  computed: {
    ...mapState([
      'locale',
      'gasProductsTags',
      'gasProductsTagsHtml'
    ])
  },
  methods: {
    convertPath
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

a {
  color: #606266;
}

.cats-card {
  background-color: #eef1f6;
  box-shadow: 2px 2px 2px #aaa;
  max-height: 500px;
  margin-top: .5rem;
  overflow: auto;
}

.cat-link {
  padding: 1rem;
  display: block;
  text-align: center;
  transition: .3s ease-in-out;
}

.cat-link:hover {
  color: #409EFF;
  background-color: #d1dbe5
}
</style>
