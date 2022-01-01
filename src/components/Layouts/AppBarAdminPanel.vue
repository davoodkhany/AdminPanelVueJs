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
    <v-content class="mt-7 d-flex">
      <v-row no-gutters>
        <v-col cols="12" sm="6" md="4" class="">
          <v-card width="385px" class="rounded-md d-flex pa-2">
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
          <v-card class="rounded-md pa-2">
            <div class="justify-space-between d-flex">
              <span class="headline">Statistics</span>
              <span class="subtitle-1">Updated 1 month ago</span>
            </div>
            <div class="d-flex">
              <div class="col-xl-6 mb-2 d-flex" style="padding: 3rem 2rem">
                <v-icon
                  style="
                    font-size: 30px !important;
                    padding: 3.7rem;
                    background-color: rgba(115, 103, 240, 0.12);
                  "
                  x-large
                  color="#7367f0"
                  class="pa-2 rounded-circle mr-3"
                  >fa-light fa-wave-pulse</v-icon
                >
                <div>
                  <h4 class="headline">230k</h4>
                  <span class="subtitle-1">Sales</span>
                </div>
              </div>
              <div class="col-xl-6 mb-2 d-flex" style="padding: 3rem 2rem">
                <v-icon
                  style="
                    font-size: 30px !important;
                    padding: 15px !important;
                    background-color: rgba(0, 207, 232, 0.12);
                  "
                  x-large
                  color="#00cfe8"
                  class="pa-2 rounded-circle mr-3"
                  >fa-light fa-user</v-icon
                >
                <div>
                  <h4 class="headline">230k</h4>
                  <span class="subtitle-1">Sales</span>
                </div>
              </div>
              <div class="col-xl-6 mb-2 d-flex" style="padding: 3rem 2rem">
                <v-icon
                  style="
                    font-size: 30px !important;
                    padding: 3.7rem;
                    background-color: rgba(234, 84, 85, 0.12);
                  "
                  x-large
                  color="#ea5455"
                  class="pa-2 rounded-circle mr-3"
                  >fa-light fa-child</v-icon
                >
                <div>
                  <h4 class="headline">230k</h4>
                  <span class="subtitle-1">Sales</span>
                </div>
              </div>
              <div class="col-xl-6 mb-2 d-flex" style="padding: 3rem 2rem">
                <v-icon
                  style="
                    font-size: 30px !important;
                    padding: 3.7rem;
                    background-color: rgba(40, 199, 111, 0.12);
                  "
                  x-large
                  color="#28c76f"
                  class="pa-2 rounded-circle mr-3"
                  >fa-light fa-dollar-sign</v-icon
                >
                <div>
                  <h4 class="headline">230k</h4>
                  <span class="subtitle-1">Sales</span>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="m-0" style="margin:0px;">
      <v-col cols="12" sm="6" md="4" class="pa-0">
        <div class="d-flex">
          <v-card class="rounded-md pa-2 pr-0 mt-7 mr-6 " width="170px" > sadsa </v-card>
          <v-card class="rounded-md pa-2 pr-0 mt-7  ml-5" width="170px"> sadsa </v-card>
        </div>
        <v-card class="rounded-md pa-2 pr-0 mt-7 " width="385px" >asdasdasd</v-card>
      </v-col>
      <v-col cols="12" sm="6" md="8" class="pa-0"> 
        <v-card class="rounded-md pa-2  mt-7 "  >asdasdasd</v-card>
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