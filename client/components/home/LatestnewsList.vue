<template>
<div class="wrapper" v-loading="loading">
  <header>
    <h1>
      {{ $t('latestnews') }}
    </h1>
  </header>
  <div class="card-list-wrapper">
    <ul class="card-list">
      <li v-for="latestnews in latestnewsList" :key="latestnews.id" class="latestnews-title-card">
        <nuxt-link :to="convertPath(`/latestnews/${latestnews.id}`, locale)" class="latestnews-title" >
          <span v-if="latestnews.isStick" class="latestnews-title-text icon"><font-awesome-icon :icon="['fas', 'thumbtack']" /></span>
          <span class="latestnews-title-text title">{{ latestnews.title }}</span>
          <span class="latestnews-title-text">{{ latestnews.editTime | toReadableTime(locale) }}</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
  <div class="pagination-wrapper">
    <el-pagination
      :current-page.sync="curtPage"
      @current-change="handlePageChange"
      layout="prev, pager, next"
      :total="total">
    </el-pagination>
  </div>
</div>

</template>

<script>
import convertPath from '@/utils/path';
import toReadableTime from '@/utils/convertTimestamp';
import { mapState } from 'vuex';
import axios from '~/plugins/axios';

export default {
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      loading: false,
      curtPage: 1,
      total: 0,
      latestnewsList: [],
    };
  },
  computed: {
    ...mapState([
      'locale'
    ]),
  },
  methods: {
    convertPath,
    handlePageChange(page) {
      this.curtPage = page;
      this.fetchData();
    },
    async getLatestnewsList() {
      try {
        this.loading = true;
        const { data } = await axios.get(`${this.locale}/news`, {
          params: {
            page: this.curtPage,
            count: 5,
            isStick: 0,
            keyword: ''
          }
        });
        this.latestnewsList = data.news;
        this.loading = false;
      } catch (err) {
        this.loading = false;
        this.$message.error('Error Occured!');
      }
    },
    async getLatestnewsTotal() {
      try {
        this.loading = true;
        const { data } = await axios.get(`${this.locale}/news/total`, {
          params: {
            isStick: 0,
            keyword: ''
          }
        });
        this.total = data.total;
        this.loading = false;
      } catch (err) {
        this.loading = false;
        this.$message.error('Error Occured!');
      }
    },
    fetchData() {
      this.getLatestnewsList();
      this.getLatestnewsTotal();
    },
  },
  filters: {
    toReadableTime
  }
};
</script>

<style scoped>
.wrapper {
  max-width: 1200px;
  padding: 1rem;
  margin: 0 auto;
}

.card-list-wrapper {
  margin-top: .5rem;
  border: #eee 1px solid;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
}

.card-list {
  padding: 0
}

.card-list li {
  list-style-type: none;
  border-bottom: #eee 1px solid;
}

.latestnews-title-card {
  display: block;
}

.latestnews-title {
  padding: 1rem;
  text-align: center;
  transition: ease-in-out .3s;
  color: #409EFF;
}

.latestnews-title:hover {
  color: #fff;
  background-color: #123;
}

.latestnews-title-text.title {
  margin-left: .5rem;
}

.latestnews-title-text {
  margin-left: 1rem;
}

.pagination-wrapper {
  margin-top: .3rem;
  text-align: center;
}
</style>
