<template>
<div class="navbar-wrapper">
  <el-menu :default-active="activeIndex" :router="true" class="navbar" mode="horizontal">
    <div class="navbar-inner">
      <div class="logo-and-text-wrapper">
        <div class="logo-wrapper">
          <img src="/logo.jpg" alt="Sheng-Yi-Corp" class="logo-img">
        </div>
        <header class="logo-text-wrapper">
          <div class="logo-text-inner">
            <h1>
              <div class="tw-text">
                昇儀<span class="ms-hide">股份有限公司</span>
              </div>
              <div class="en-text">
                Sheng Yi<span class="ms-hide"> Tech &amp; Analytics Co., Ltd.</span>
              </div>
            </h1>
          </div>
        </header>
      </div>
      <div class="float-right el-menu--horizontal menu-item-wrapper">
        <el-menu-item :index="convertPath('/', locale)">
          {{ $t('navbar.home') }}
        </el-menu-item>
        <el-menu-item :index="convertPath('/about', locale)">
          {{ $t('navbar.about') }}
        </el-menu-item>
        <el-menu-item :index="convertPath('/products-list/0/1', locale)">
          {{ $t('navbar.products') }}
        </el-menu-item>
        <el-menu-item :index="convertPath('/gas-products-list/', locale)">
          {{ $t('navbar.gas-products') }}
        </el-menu-item>
        <el-menu-item :index="convertPath('/brands', locale)">
          {{ $t('navbar.brands') }}
        </el-menu-item>
        <el-menu-item :index="convertPath('/contact', locale)">
          {{ $t('navbar.contact') }}
        </el-menu-item>
        <el-menu-item v-if="showLang" index="" @click="changeLang">{{ $t('navbar.lang') }}</el-menu-item>
      </div>
      <div class="toggle-menu-button-wrapper" :class="{open: navMenuShow}" @click="toggleNavMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </el-menu>
  <el-collapse-transition>
    <sidenav v-show="navMenuShow"></sidenav>
  </el-collapse-transition>
</div>

</template>

<script>
import { mapState, mapActions } from 'vuex';
import convertPath from '@/utils/path';
import Sidenav from '@/components/common/Sidenav';
import showLang from '@/utils/showLang';

export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  computed: {
    ...mapState([
      'locale',
      'loading',
      'navMenuShow'
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
      await this.$router.push(this.convertPath(this.$route.fullPath, this.locale));
    }
  },
  components: {
    Sidenav
  }
}
</script>

<style scoped>
.navbar-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.logo-wrapper {
  max-width: 60px;
  float: left;
}

.logo-img {
  width: 100%;
  display: block;
  margin-top: 5px;
}

.logo-text-wrapper {
  float: left;
  margin-left: .2rem;
}

h1 {
  font-size: 1.7rem;
  letter-spacing: 1px;
}

.tw-text {
  font-weight: 400;
}

.en-text {
  font-size: .8rem;
  font-weight: 300;
  margin-top: -5px;
  letter-spacing: .7px;
  margin-left: 1px;
}

.menu-item-wrapper li {
  color: #606266;
}

.toggle-menu-button-wrapper {
  display: none;
  position: relative;
  width: 40px;
  height: 30px;
  margin: .8rem auto;
  cursor: pointer;
  float: right;
}

.toggle-menu-button-wrapper span {
  position: absolute;
  width: 100%;
  border-radius: 30px;
  left: 0;
  height: 4px;
  background-color: #909399;
  display: block;
  transition: .5s ease-in-out;
}

.toggle-menu-button-wrapper span:nth-child(1) {
  top: 0;
}

.toggle-menu-button-wrapper span:nth-child(2) {
  top: 15px;
}

.toggle-menu-button-wrapper span:nth-child(3) {
  top: 30px;
}

.toggle-menu-button-wrapper.open span {
  background-color: #111;
}

.toggle-menu-button-wrapper.open span:nth-child(1) {
  top: 15px;
  transform: rotate(135deg);
}

.toggle-menu-button-wrapper.open span:nth-child(2) {
  transform: translateX(-50px);
  opacity: 0;
}

.toggle-menu-button-wrapper.open span:nth-child(3) {
  top: 15px;
  transform: rotate(-135deg);
}


@media screen and (max-width: 1000px) {
  .navbar-wrapper {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 999;
  }

  .toggle-menu-button-wrapper {
    display: block;
  }

  .menu-item-wrapper {
    display: none;
  }
}

@media screen and (max-width: 400px){
  .logo-and-text-wrapper {
    max-width: 120px;
    margin: 0 auto;
  }

  .logo-text-wrapper {
    margin-left: .3rem;
  }

  .ms-hide {
    display: none;
  }

  .tw-text {
    font-size: 1.6rem;
    letter-spacing: 2px;
    text-align: center;
  }

  .en-text {
    font-size: .75rem;
    text-align: center;
  }
}

</style>
