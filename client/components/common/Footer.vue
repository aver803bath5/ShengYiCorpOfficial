<template>
<div class="footer-wrapper">
  <footer class="footer-inner">
    <div class="corp-info-wrapper">
      <div class="corp-info-inner">
        <h3 class="corp-name">{{ $t('footer.taipei.name') }}</h3>
        <p>{{ $t('footer.taipei.address') }}</p>
        <p>{{ $t('footer.taipei.tel') }}</p>
        <p>{{ $t('footer.taipei.fax') }}</p>
        <p>Email: {{ $t('footer.taipei.email') }}</p>
      </div>
    </div>
    <div class="corp-info-wrapper">
      <div class="corp-info-inner">
        <h3 class="corp-name">{{ $t('footer.taichung.name') }}</h3>
        <p>{{ $t('footer.taichung.address') }}</p>
        <p>{{ $t('footer.taichung.tel') }}</p>
        <p>{{ $t('footer.taichung.fax') }}</p>
        <p>Email: {{ $t('footer.taichung.email') }}</p>
      </div>
    </div>
    <div class="corp-info-wrapper">
      <div class="corp-info-inner">
        <h3 class="corp-name">{{ $t('footer.kaoshiung.name') }}</h3>
        <p>{{ $t('footer.kaoshiung.address') }}</p>
        <p>{{ $t('footer.kaoshiung.tel') }}</p>
        <p>{{ $t('footer.kaoshiung.fax') }}</p>
        <p>Email: {{ $t('footer.kaoshiung.email') }}</p>
      </div>
    </div>
    <div class="icon-wrapper">
      <div class="icon-inner">
        <div class="icon">
          <a href="http://www.facebook.com.tw/shengyi82262680" target="_blank">
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
        </div>
        <div class="icon">
          <a href="https://www.youtube.com/channel/UC8uzDamISeL_F1JQwsprB8g?view_as=subscriber" target="_blank">
            <font-awesome-icon :icon="['fab', 'youtube']" />
          </a>
        </div>
      </div>
    </div>
  </footer>
  <div class="copyright-wrapper">
    <div class="copyright-inner">
      <p>
        Copyright 2018 昇儀股份有限公司. All rights reserved.
      </p>
      <p>
        Web design: Moai Studio TW | Email: noob@noob.tw
      </p>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer-wrapper {
  width: 100%;
  margin-top: 1rem;
  background-color: #324057;
}

.footer-inner {
  max-width: 1188px;
  margin: auto;
  color: #fff;
}

.corp-info-wrapper {
  display: inline-block;
  width: 380px;
  margin-left: 1rem;
}

.corp-info-inner {
  padding: 2.5rem;
  padding-bottom: .5rem;
  text-align: center;
  letter-spacing: .7px;
}

.corp-name {
  font-size: 1.5rem;
}

.icon-wrapper {
  max-width: 600px;
  margin: .3rem auto 0;
  padding-bottom: .7rem;
}

.icon-inner {
  text-align: center;
}

.icon {
  display: inline-block;
  margin-left: 1rem;
  font-size: 3rem;
}

.icon a {
  color: #fff;
  transition: .2s ease-in-out;
}

.icon a:hover {
  color: #409EFF;
}

.copyright-wrapper {
  background-color: #1f2d3d;
}

.copyright-inner {
  padding: .5rem 0 .3rem;
  text-align: center;
  color: #d3dce6;
}


@media screen and (max-width: 1210px) {
  .corp-info-wrapper {
    display: block;
    width: 100%;
    margin: 1rem auto;
  }
}
</style>
