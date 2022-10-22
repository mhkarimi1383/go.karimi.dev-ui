<template>
  <a-page-header
    style="border: 1px solid rgb(235, 237, 240)"
    title="Docker Registry Mirror"
    sub-title="--faster-docker"
  >
    <template #avatar>
      <a-avatar :size="{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }">
        <template #icon>
          <font-awesome-icon icon="fa-brands fa-docker" />
        </template>
      </a-avatar>
    </template>
  </a-page-header>
  <RegistryCards />
</template>

<script>
import RegistryCards from "./components/RegistryCards.vue";

import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  components: {
    RegistryCards,
  },
  mounted() {
    document.documentElement.style.overflowX = "hidden";
  },
  created() {
    document.documentElement.setAttribute("lang", "en");
  },
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #ececec;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #cccccc;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
  border-radius: 10px;
}
</style>
