<template>
  <div id="app">
    <v-app>
        <v-row>
          <v-col class="col-2"><SidebarAdminPanel></SidebarAdminPanel></v-col>
          <v-col class="col-9"><AppBarAdminPanel></AppBarAdminPanel> </v-col>
        </v-row>
     
      
      

      <v-main>
        <v-container fluid> </v-container>
      </v-main>
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
};
</script>