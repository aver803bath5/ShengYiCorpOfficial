<template>
  <div class="wrapper" v-loading.fullscreen="loading">
    <header>
      <h1>
        {{ $t('navbar.contact') }}
      </h1>
    </header>
    <section class="form-wrapper">
      <el-form ref="form" @submit.native.prevent :model="form" :rules="rules" label-width="80px" label-position="top"  @keyup.enter.native="onSubmit">
        <el-form-item prop="name" :label="$t('contact.form-placeholder.name')">
          <el-input auto-complete="name" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item prop="phone" :label="$t('contact.form-placeholder.phone')" :required="true">
          <el-input auto-complete="phone" v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item prop="company" :label="$t('contact.form-placeholder.company')">
          <el-input auto-complete="company" v-model="form.company"></el-input>
        </el-form-item>
        <el-form-item prop="email" :label="$t('contact.form-placeholder.email')">
          <el-input auto-complete="email" v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item prop="fax" :label="$t('contact.form-placeholder.fax')">
          <el-input auto-complete="fax" v-model="form.fax"></el-input>
        </el-form-item>
        <el-form-item prop="message" :label="$t('contact.form-placeholder.message')" :required="true">
          <el-input auto-complete="message" type="textarea" v-model="form.message" :rows="5"></el-input>
        </el-form-item>
        <el-form-item class="button-wrapper">
          <el-button type="primary" @click="onSubmit('form')">{{ $t('submit') }}</el-button>
          <el-button type="default" @click="onReset('form')">{{ $t('reset') }}</el-button>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
import axios from '~/plugins/axios';

export default {
  data() {
    return {
      loading: false,
      form: {
        name: '',
        phone: '',
        company: '',
        email: '',
        fax: '',
        message: ''
      },
      rules: {
        name: [
          { required: true, message: this.$t('contact.rules.name.required'), trigger: 'blur' },
          { max: 100, message: this.$t('contact.rules.out-of-range'), trigger: 'blur' }
        ],
        phone: [
          { required: true, message: this.$t('contact.rules.phone.required'), trigger: 'blur' },
          { max: 100, message: this.$t('contact.rules.out-of-range'), trigger: 'blur' }
        ],
        company: [
          { max: 100, message: this.$t('contact.rules.out-of-range'), trigger: 'blur' }
        ],
        email: [
          { max: 100, message: this.$t('contact.rules.out-of-range'), trigger: 'blur' }
        ],
        fax: [
          { max: 100, message: this.$t('contact.rules.out-of-range'), trigger: 'blur' }
        ],
        message: [
          { required: true, message: this.$t('contact.rules.phone.required'), trigger: 'blur' },
          { max: 500, message: this.$t('contact.rules.out-of-range'), trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        this.loading = true;
        await axios.post('/contact', {
          companyName: this.form.company,
          email: this.form.email,
          fax: this.form.fax,
          name: this.form.name,
          tel: this.form.phone,
          message: this.form.message
        });
        this.$message.success(this.$t('submit-success'));
        this.$refs['form'].resetFields();
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.$message.error('Error Occured!');
      }
    },
    onReset(formName) {
      this.$refs[formName].resetFields();
    },
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.submitForm();
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.wrapper {
  max-width: 1300px;
  padding: 1rem;
  margin: auto;
}

.button-wrapper {
  text-align: center;
}

@media screen and (max-width: 1000px) {
  .wrapper {
    margin-top: 3rem;
  }
}
</style>
