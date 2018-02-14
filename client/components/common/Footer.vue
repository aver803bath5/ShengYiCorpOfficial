<template>
<div class="footer-wrapper">
  <footer class="footer-inner">
    <div class="corp-location-wrapper">
      <div class="corp-location-inner">
        <h3 class="corp-name">台北總公司</h3>
        <p>23511新北市中和區建八路2號7樓之3</p>
        <p>TEL: (02) 8226-2680</p>
        <p>FAX: (02) 8226-2740</p>
        <p>Email: sales@shengyi.com.tw</p>
      </div>
    </div>
    <div class="corp-location-wrapper">
      <div class="corp-location-inner">
        <h3 class="corp-name">台中分公司</h3>
        <p>40242台中市南區大慶街二段7巷22號8F</p>
        <p>TEL: (04) 2263-0967</p>
        <p>FAX: (04) 2263-0965</p>
        <p>Email: sales@shengyi.com.tw</p>
      </div>
    </div>
    <div class="corp-location-wrapper">
      <div class="corp-location-inner">
        <h3 class="corp-name">高雄分公司</h3>
        <p>81357高雄市左營區博愛二路198號5F-3</p>
        <p>TEL: (07) 558-6310</p>
        <p>FAX: (07) 558-6491</p>
        <p>Email: sales@shengyi.com.tw</p>
      </div>
    </div>
  </footer>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer-wrapper {
  width: 100%;
  background-color: #324057;
}

.footer-inner {
  max-width: 1300px;
  margin: auto;
  color: #fff;
}

.corp-location-wrapper {
  display: inline-block;
  max-width: 380px;
  margin-left: 1rem;
}

.corp-location-inner {
  padding: 2.5rem;
  text-align: center;
  letter-spacing: .7px;
}

.corp-name {
  font-size: 1.5rem;
}

@media screen and (max-width: 1170px) {
  .corp-location-wrapper {
    display: block;
    width: 100%;
    margin: 1rem auto;
  }
}
</style>
