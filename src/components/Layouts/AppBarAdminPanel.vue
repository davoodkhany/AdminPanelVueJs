/* eslint-disable vue/valid-v-bind */
<template>
  <v-app-bar
    class="rounded-lg"
    color="white"
    :style="mini ? 'max-width:90%' : 'max-width:78%'"
  >
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon color="red">fa-heart</v-icon>
    </v-btn>
      <div>
            <h5>DavoodKhani</h5>
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