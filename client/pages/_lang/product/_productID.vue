<template>
  <header>
    <h1>產品名稱</h1>
  </header>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.productID);
  }
}
</script>

<style>

</style>
