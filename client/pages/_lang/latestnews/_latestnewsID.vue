<template>
<div class="latestnews-card-wrapper">
  <el-card class="latestnews-card">
    <div slot="header" class="clearfix">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="convertPath('/', locale)">{{ $t('navbar.home') }}</el-breadcrumb-item>
        <el-breadcrumb-item>{{ latestnews.title }}</el-breadcrumb-item>
      </el-breadcrumb>
      <h1>{{ latestnews.title }}</h1>
      <div class="date">
        {{ latestnews.editTime | toReadableTime(locale) }}
      </div>
    </div>
    <article v-html="latestnews.content">
    </article>
  </el-card>


</div>
</template>

<script>
import { mapState } from 'vuex';
import axios from '~/plugins/axios';
import convertPath from '@/utils/path';
import toReadableTime from '@/utils/convertTimestamp';

export default {
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.latestnewsID);
  },
  async asyncData({ params, store }) {
    try {
      const { data } = await axios.get(`${store.state.locale}/news/${params.latestnewsID}`);
      return { latestnews: data };
    } catch (e) {
      this.$message.error(e);
    }
  },
  head () {
    return {
      title: this.latestnews.title,
        meta: [
          { hid: 'description', name: 'description', content: this.latestnews.content }
      ]
    }
  },
  computed: {
    ...mapState([
      'locale'
    ])
  },
  methods: {
    convertPath
  },
  filters: {
    toReadableTime
  },
};
</script>

<style scoped>
.latestnews-card-wrapper {
  padding: 1rem;
}

.latestnews-card {
  max-width: 1200px;
  margin: 1rem auto;
  padding: 1rem 2.5rem;
}

.date {
  text-align: center;
}

@media screen and (max-width: 950px) {
  .latestnews-card-wrapper {
    margin-top: 3rem;
  }
}
</style>
