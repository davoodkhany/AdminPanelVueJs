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

      <v-card width="450">
        <v-card-title>
          <span class="text-h6">My Cart</span>
          <v-spacer></v-spacer>
          <v-chip class="ma-2" color="deep-purple" text-color="white">
            5 Items
          </v-chip>
        </v-card-title>

        <v-divider></v-divider>
     
          <v-list  height="400px">
             <v-scroll :ops="ops">
            <v-list-item-group
              v-model="model"
              v-for="product in products" 
              :key="product.id"
            >
              <v-list-item>
                <img
                  width="80px"
                  src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/1.3b312012.png"
                  alt=""
                />
                <v-list-item-content>
                  <v-list-item-title> Apple Watch Series 5 </v-list-item-title>
                  <v-list-item-subtitle> By Apple </v-list-item-subtitle>
                </v-list-item-content>
                <v-btn class="mx-2" fab dark small color="#7367f0">
                  <v-icon dark small> fa-solid fa-cart-shopping-fast </v-icon>
                </v-btn>
              </v-list-item>
           
              <v-divider></v-divider>
            </v-list-item-group>
               </v-scroll>
          </v-list>
    
        <div style="padding: 20px">
          <v-btn class="v-btn--block" color="deep-purple lighten-1 white--text">
            Checkout
          </v-btn>
        </div>
      </v-card>
    </v-menu>
  </div>
</template>
<script>
import vuescroll from "vuescroll";
export default {
  components: {
    "v-scroll": vuescroll,
  },
  data() {
    return {
      menu: false,
      model: 1,
      products: [
        { id: 1, name: "Apple Watch Series 5", title: "By Apple", img: "" },
        { id: 2, name: "Apple Watch Series 5", title: "By Apple", img: "" },
        { id: 3, name: "Apple Watch Series 5", title: "By Apple", img: "" },
        { id: 4, name: "Apple Watch Series 5", title: "By Apple", img: "" },
        { id: 5, name: "Apple Watch Series 5", title: "By Apple", img: "" },
        { id: 6, name: "Apple Watch Series 5", title: "By Apple", img: "" },
        { id: 7, name: "Apple Watch Series 5", title: "By Apple", img: "" },
        { id: 8, name: "Apple Watch Series 5", title: "By Apple", img: "" },
      ],
      ops: {
        vuescroll: {},
        scrollPanel: {},
        rail: {},
        bar: {
          background: "#7367f0",
        },
      },
    };
  },
};
</script>

<style scoped>
.menuable__content__active {
  top: 98px !important;
  left: 840px !important;
}
</style>