/* eslint-disable vue/valid-v-bind */
<template>
  <v-app-bar
    class="rounded-lg"
    color="white"
    :style="mini ? 'max-width:90%' : 'max-width:78%'"
  >
  
    <App-Bar-Left></App-Bar-Left>

    <v-spacer></v-spacer>
    <v-btn icon small>
      <v-icon>fa-light fa-magnifying-glass</v-icon>
    </v-btn>

    <App-Bar-Shop></App-Bar-Shop>

    <App-Bar-Notification></App-Bar-Notification>

    <div>
      <h5>Davood Khani</h5>
      <p>admin</p>
    </div>

    <App-Bar-Profile></App-Bar-Profile>
  </v-app-bar>




</template>

<script>
import AppBarProfile from "./appbar/AppBarProfile.vue";
import AppBarLeft from "./appbar/AppBarLeft.vue";
import AppBarNotification from "./appbar/AppBarNotification.vue";
import AppBarShop from "./appbar/AppBarShop.vue";
export default {
  components: {
    "App-Bar-Profile": AppBarProfile,
    "App-Bar-Left": AppBarLeft,
    "App-Bar-Notification": AppBarNotification,
    "App-Bar-Shop": AppBarShop,
  },
  props: ["mini"],
};
</script>


<style scoped>
.max-80 {
  max-width: 75%;
}
.max-90 {
  max-width: 90%;
}

.fa {
  font-size: 20px !important;
}
</style>