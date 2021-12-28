<template>
  <div id="app">
    <v-app>
      <v-row animate__fadeInLeft>
        <SidebarAdminPanel class="pt-5 mt-3" @emit="Minis"></SidebarAdminPanel>

        
          <AppBarAdminPanel
            class="mt-10 ml-10"
            style="max-height: 100vh !important"
            :mini="mini"
          >
          </AppBarAdminPanel>
          <v-col cols="8">
   
        </v-col>
      </v-row>
    </v-app>
  </div>
</template>

<script>
import SidebarAdminPanel from "./components/Layouts/SidebarAdminPanel.vue";
import AppBarAdminPanel from "./components/Layouts/AppBarAdminPanel.vue";

export default {
  components: {
    SidebarAdminPanel,
    AppBarAdminPanel,
  },

  data() {
    return {
      mini: true,
    };
  },
  methods: {
    Minis(value) {
      this.mini = value;
    },
  },
};
</script>

<style scoped>
#app {
  background-color: #f5f5f5;
}
</style>