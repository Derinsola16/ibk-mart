<template>
  <div id="app">
    <router-view />
    <AppNav />
    <AppFoot />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {
    AppNav: () => import("@/components/Header/Default.vue"),
    AppFoot: () => import("@/components/footer/Footer.vue")
  }
};
</script>

<style>
/* @import "~bootstrap/css/bootstrap"; */
@import "./style/index.css";
</style>
