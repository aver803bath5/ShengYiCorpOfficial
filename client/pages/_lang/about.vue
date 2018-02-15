<template>
  <div class="container about-wrapper">
    <article>
      <header>
        <h1 class="title">
          {{ $t('about.title') }}
        </h1>
      </header>
      <section class="content-wrapper">
        <p>
          {{ $t('about.instruction') }}
        </p>
      </section>
      <section class="about-us-section">
        <article class="content-wrapper">
          <h2 class="subtitle">
            {{ $t('about.duty.title') }}
          </h2>
          <p>
            {{ $t('about.duty.content') }}
          </p>
        </article>
      </section>
      <section class="about-us-section">
        <article class="content-wrapper">
          <h2 class="subtitle">
            {{ $t('about.ideal.title') }}
          </h2>
          <p>
            {{ $t('about.ideal.content') }}
          </p>
        </article>
      </section>
      <section class="about-us-section">
        <article class="content-wrapper">
          <h2 class="subtitle">
            {{ $t('about.overwatch.title') }}
          </h2>
          <p>
            {{ $t('about.overwatch.content') }}
          </p>
        </article>
      </section>
      <section class="about-us-section">
        <article class="content-wrapper">
          <h2 class="subtitle">
            {{ $t('about.certification.title') }}
          </h2>
          <div class="tw-cert-content" v-if="locale==='tw'">
            <p>
              2012年取得 <b>ISO 9001</b> 認證。
            </p>
            <p>
              2013年通過 <b>ISO 17025 TAF</b> 認證之校正實驗室。
            </p>
            <p>
              校正實驗室認證編號：2703
            </p>
            <div>
              範圍：
              <ol>
                <li>
                  四用氣體：氧氣（O2）、可燃性（LEL）、一氧化碳（CO）、硫化氫（H2S）
                </li>
                <li>
                  五用氣體：氧氣（O2）、可燃性（LEL）、一氧化碳（CO）、硫化氫（H2S）、揮發性有機氣體（VOC）
                </li>
                <li>
                  揮發性有機氣體（VOC）
                </li>
                <li>
                  二氧化碳（CO2）氣體
                </li>
              </ol>
            </div>
            <p>
              *以上均含遊校
            </p>
          </div>
          <div class="en-cert-content" v-else>
            <p>
              ISO 9001 compliance certificate.
            </p>
            <p>
              We are accredited in respect of TAF laboratory ISO/IEC 17025:2005.
            </p>
            <p>
              Accreditation Number: 2703
            </p>
            <p>
              Originally Accredited Date: May 07, 2013
            </p>
            <p>
              Accredited Scope: Calibration Field
            </p>
            <p>
              Calibration Items: Four-sensor Gas Detector, Five-sensor Gas Detector and VOC Gas Detector (On-site Calibration Included)
            </p>
          </div>
          <div class="cert-images-wrapper">
            <div class="cert-image">
              <img src="/about/aboutImage1.jpg" alt="登錄證書">
            </div>
            <div class="cert-image" v-if="locale==='tw'">
              <img src="/about/aboutImage2.jpg" alt="TAF 認證證書">
            </div>
            <div class="cert-image" v-else>
              <img src="/about/enAboutImage.jpg" alt="TAF 認證證書">
            </div>
            <div class="cert-image">
              <img src="/about/aboutImage3.jpg" alt="TAF 認證證書">
            </div>
          </div>
        </article>
      </section>
    </article>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'locale'
    ])
  },
  head () {
    return {
      title: this.$t('about.title'),
        meta: [
          { hid: 'description', name: 'description', content: this.$t('about.instruction') }
      ]
    }
  }
}
</script>

<style scoped>
img {
  display: block;
  margin: auto;
}

.about-wrapper {
  max-width: 900px;
  margin: .7rem auto;
  padding: 1rem;
}

.title {
  text-align: center;
  font-size: 2rem;
  color: #1f2d3d;
  letter-spacing: .7px;
}

.subtitle {
  text-align: center;
  color: #1f2d3d;
}

.content-wrapper p {
  color: #2c3e50;
  letter-spacing: .7px;
}

.about-us-section {
  margin-top: 1.5rem;
}

.cert-image {
  margin-top: 1rem;
}
</style>
