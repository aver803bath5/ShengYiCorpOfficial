<template>
  <div class="navbar-wrapper">
    <el-menu :default-active="activeIndex" class="navbar" mode="horizontal" @select="handleSelect">
      <div class="navbar-inner">
        <div class="logo-wrapper">
          <img src="/logo.jpg" alt="Sheng-Yi-Corp" class="logo-img">
        </div>
        <div class="logo-text-wrapper">
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
        </div>
        <div class="navbar-item-wrapper">
          <el-menu-item index="1">首頁</el-menu-item>
          <el-menu-item index="3">關於我們</el-menu-item>
        </div>
      </div>
    </el-menu>
  </div>
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
.navbar {
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}

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
  padding-top: 3px;
}

.logo-text-wrapper {
  float: left;
  margin-left: .2rem;
}

h1 {
  font-size: 1.2rem;
  font-weight: 100;
  letter-spacing: 1px;
}

</style>
