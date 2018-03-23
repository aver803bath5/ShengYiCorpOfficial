<template>
  <div class="side-navbar-wrapper">
    <el-menu :default-active="activeIndex" class="side-navbar">
      <el-menu-item index="1"  @click="toggleNavMenu">
        <nuxt-link :to="convertPath('/', locale)">
          {{ $t('navbar.home') }}
        </nuxt-link>
      </el-menu-item>
      <el-menu-item index="2"  @click="toggleNavMenu">
        <nuxt-link :to="convertPath('/about', locale)">
          {{ $t('navbar.about') }}
        </nuxt-link>
      </el-menu-item>
      <el-menu-item index="3"  @click="toggleNavMenu">
        <nuxt-link :to="convertPath('/products-list/0/1', locale)">
          {{ $t('navbar.products') }}
        </nuxt-link>
      </el-menu-item>
      <el-menu-item index="4"  @click="toggleNavMenu">
        <nuxt-link :to="convertPath('/gas-products-list/', locale)">
          {{ $t('navbar.gas-products') }}
        </nuxt-link>
      </el-menu-item>
      <el-menu-item index="5"  @click="toggleNavMenu">
        <nuxt-link :to="convertPath('/brands', locale)">
          {{ $t('navbar.brands') }}
        </nuxt-link>
      </el-menu-item>
      <el-menu-item index="6"  @click="toggleNavMenu">
        <nuxt-link :to="convertPath('/contact', locale)">
          {{ $t('navbar.contact') }}
        </nuxt-link>
      </el-menu-item>
      <el-menu-item v-if="showLang" index="7" @click="changeLang">{{ $t('navbar.lang') }}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import convertPath from '@/utils/path';
import { mapActions, mapState } from 'vuex';
import showLang from '@/utils/showLang';

export default {
  data() {
    return {
      activeIndex: '1'
    };
  },
  computed: {
    ...mapState([
      'locale'
    ]),
    showLang
  },
  methods: {
    convertPath,
    ...mapActions([
      'switchLocale',
      'toggleNavMenu'
    ]),
    async changeLang() {
      if (this.loading === true) return false;
      await this.switchLocale(this.locale);
      this.toggleNavMenu();
      await this.$router.push(this.convertPath(this.$route.fullPath, this.locale));
    }
  },
}
</script>

<style scoped>
  .side-navbar a, .side-navbar li {
    color: #606266;
    text-align: center;
  }

  .side-navbar-wrapper {
    box-shadow: 0px -6px 17px #888888;
    border-bottom: 1px solid #ddd;
  }
</style>
