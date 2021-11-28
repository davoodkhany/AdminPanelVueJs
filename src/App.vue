<template>
  <div id="app">
    <v-app>

       <SidebarAdminPanel></SidebarAdminPanel>



      <v-main>
        <v-container fluid>
         
        </v-container>
      </v-main>
    </v-app>
   
  </div>
</template>

<script>
import SidebarAdminPanel from "./components/Layouts/SidebarAdminPanel.vue";

export default {
  components: {
    SidebarAdminPanel,
  },
};
</script>