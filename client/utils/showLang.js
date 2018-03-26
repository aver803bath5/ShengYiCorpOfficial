function showLang() {
  if (/\/gas\/product\//.test(this.$route.path) || /\/products\//.test(this.$route.path) || /\/latestnews\//.test(this.$route.path) || /\/gas-product\//.test(this.$route.path)) return false;
  return true;
}

export default showLang;
