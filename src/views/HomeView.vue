<template>
  <div class="home">
    <MainPage msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from "@/components/MainPage.vue";

export default {
  name: "HomeView",
  components: {
    MainPage,
  },
};
</script>
