<template>
  <div>
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      nudge-width="200px"
      offset-x
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-badge color="#7367f0" content="6" offset-y="12" offset-x="10">
            <v-icon>fa-light fa-cart-shopping</v-icon>
          </v-badge>
        </v-btn>
      </template>

      <v-card height="500px">
        <v-card-title>
          <span class="text-h6">My Cart</span>
          <v-spacer></v-spacer>
          <v-chip class="ma-2" color="deep-purple" text-color="white">
            5 Items
          </v-chip>
        </v-card-title>

        <v-divider></v-divider>

        <v-list>
          <v-list-item>
            <img
              width="80px"
              src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/1.3b312012.png"
              alt=""
            />
            <v-spacer></v-spacer>
            <v-list-item-content>
              <v-list-item-title> Apple Watch Series 5 </v-list-item-title>
              <v-list-item-subtitle> By Apple </v-list-item-subtitle>
            </v-list-item-content>

            
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: false,
    };
  },
};
</script>

<style scoped>
.menuable__content__active {
  top: 98px !important;
  left: 1150px !important;
}
</style>