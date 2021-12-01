/* eslint-disable vue/valid-v-bind */
<template>
  <v-app-bar
    class="rounded-lg"
    color="white"
    :style="mini ? 'max-width:90%' : 'max-width:78%'"
  >
    <v-spacer></v-spacer>
    <v-btn icon small >
      <v-icon>fa-light fa-magnifying-glass</v-icon>
    </v-btn>
    <v-btn icon >
      <v-badge  color="#7367f0" content="6" offset-y="12" offset-x="10">
        <v-icon>fa-light fa-cart-shopping</v-icon>
      </v-badge>
    </v-btn>
    <v-btn icon class="mr-2">
      <v-badge color="red" content="5" offset-x="12" offset-y="10">
        <v-icon>fa fa-bell-o</v-icon>
      </v-badge>
    </v-btn>

    <div>
      <h5>Davood Khani</h5>
      <p>admin</p>
    </div>
    <AppBarProfile></AppBarProfile>
  </v-app-bar>
</template>

<script>
import AppBarProfile from "./appbar/AppBarProfile.vue";
export default {
  components: {
    AppBarProfile,
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
</style>