<template>
  <header>
    <h1>
      產品介紹
    </h1>
  </header>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.catID && params.page);
  }
};
</script>

<style>

</style>
