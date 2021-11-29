/* eslint-disable vue/valid-v-bind */
<template>
  <v-app-bar class="rounded-lg" color="white" :style="mini ? 'max-width:90%' : 'max-width:78%'">
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon color="red">fa-heart</v-icon>
    </v-btn>
    <v-text>
      <h5>Skeencarly</h5>
      <p>admin</p>
    </v-text>

    <v-menu :rounded="rounded" offset-y  >
      <template v-slot:activator="{ on, attrs }">
        <v-badge bordered bottom color="red" dot offset-x="10" offset-y="10">
          <v-avatar size="40" v-bind="attrs" v-on="on">
            <v-img
              src="https://www.skincarely.com.au/wp-content/uploads/2021/11/Asset-1.svg"
            ></v-img>
          </v-avatar>
        </v-badge>
      </template>
   
      <v-list >
        <v-list-item   v-for="n in 5" :key="n" @click="() => {}">
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
  
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
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
.menuable__content__active{
     
    top: 98px !important;
    left: 1370px !important;
  
}
</style>