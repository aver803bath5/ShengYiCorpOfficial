<template>
<div class="footer-wrapper">
  <footer class="footer-inner">
    <div class="corp-info-wrapper">
      <div class="corp-info-inner">
        <h3 class="corp-name">台北總公司</h3>
        <p>23511新北市中和區建八路2號7樓之3</p>
        <p>TEL: (02) 8226-2680</p>
        <p>FAX: (02) 8226-2740</p>
        <p>Email: sales@shengyi.com.tw</p>
      </div>
    </div>
    <div class="corp-info-wrapper">
      <div class="corp-info-inner">
        <h3 class="corp-name">台中分公司</h3>
        <p>40242台中市南區大慶街二段7巷22號8F</p>
        <p>TEL: (04) 2263-0967</p>
        <p>FAX: (04) 2263-0965</p>
        <p>Email: sales@shengyi.com.tw</p>
      </div>
    </div>
    <div class="corp-info-wrapper">
      <div class="corp-info-inner">
        <h3 class="corp-name">高雄分公司</h3>
        <p>81357高雄市左營區博愛二路198號5F-3</p>
        <p>TEL: (07) 558-6310</p>
        <p>FAX: (07) 558-6491</p>
        <p>Email: sales@shengyi.com.tw</p>
      </div>
    </div>
    <div class="icon-wrapper">
      <div class="icon-inner">
        <div class="icon">
          <a href="http://www.facebook.com.tw/shengyi82262680" target="_blank">
            <fa-icon pack="fab" name="facebook" />
          </a>
        </div>
        <div class="icon">
          <a href="https://www.youtube.com/channel/UC8uzDamISeL_F1JQwsprB8g?view_as=subscriber" target="_blank">
            <fa-icon pack="fab" name="youtube"></fa-icon>
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
