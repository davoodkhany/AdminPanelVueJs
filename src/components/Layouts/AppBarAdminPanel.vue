/* eslint-disable vue/valid-v-bind */
<template>
  <v-col :cols="mini ? 10 : 9">
    <v-app-bar class="rounded-lg" color="white">
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
    <v-content class="mt-3 d-flex">
     
        <v-row no-gutters>
          <v-col cols="12" sm="6" md="4" class="">
            <v-card :elevation="n - 1" width="410px" class="rounded-md d-flex tile pa-2">
              <div>
                <v-card-title class="text-p"> OVERLINE </v-card-title>
                <v-card-subtitle> You have won gold medal </v-card-subtitle>
                <v-card-text>
                  <a class="display-1"> $48.9k </a>
                </v-card-text>
                <v-card-actions>
                  <v-btn color=" deep-purple lighten-1 white--text">
                    View Sales
                  </v-btn>
                </v-card-actions>
              </div>

              <div>
                <v-img
                  width="100%"
                  style="left: 90px"
                  src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/badge.0fa134b5.svg"
                >
                </v-img>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="8">
            <v-card  :elevation="n - 1" class="rounded-md d-flex pa-2">
              <div>
                <v-card-title class="text-p"> OVERLINE </v-card-title>
                <v-card-subtitle> You have won gold medal </v-card-subtitle>
                <v-card-text>
                  <a class="display-1"> $48.9k </a>
                </v-card-text>
                <v-card-actions>
                  <v-btn color=" deep-purple lighten-1 white--text">
                    View Sales
                  </v-btn>
                </v-card-actions>
              </div>

              <div>
                <v-img
                  width="100%"
                  style="left: 90px"
                  src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/badge.0fa134b5.svg"
                >
                </v-img>
              </div>
            </v-card>
          </v-col>
        </v-row>

    </v-content>
  </v-col>
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