<template>
  <el-menu :default-active="activeIndex" class="navbar" mode="horizontal" @select="handleSelect">
    <div class="navbar-inner el-menu--horizontal">
      <div class="logo-wrapper">
      <img src="/logo.jpg" alt="Sheng-Yi-Corp" class="logo-img">
      </div>
      <header class="logo-text-wrapper">
        <div class="logo-text-inner">
          <h1>
            <div class="tw-text">
              昇儀股份有限公司
            </div>
            <div class="en-text">
              Sheng Yi Tech &amp; Analytics Co., Ltd.
            </div>
          </h1>
        </div>
      </header>
      <el-menu-item index="1">{{ $t('navbar.home') }}</el-menu-item>
      <el-menu-item index="3">關於我們</el-menu-item>
    </div>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
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

</style>
