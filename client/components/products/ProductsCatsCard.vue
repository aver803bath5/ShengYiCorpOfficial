<template>
  <div class="cats-card-wrapper">
    <ul class="cats-card">
      <li>
        <nuxt-link class="cat-link" :to="convertPath('/products-list/0/1/', locale)">
          {{ $t('products-all') }}
        </nuxt-link>
      </li>
      <li v-for="cat in productsListCategories" :key="cat.id">
        <nuxt-link class="cat-link" :to="convertPath(`/products-list/${cat.id}/1/`, locale)">
          {{ cat.name }}
        </nuxt-link>
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
      'productsListCategories'
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
  color: #909399;
}

.cats-card {
  background-color: #eef1f6;
  box-shadow: 2px 2px 2px #aaa;
  max-height: 500px;
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
