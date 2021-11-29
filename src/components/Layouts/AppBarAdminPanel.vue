/* eslint-disable vue/valid-v-bind */
<template>
 
  <v-app-bar color="white" :style=" mini ? 'max-width:85%' : 'max-width:76%'" >

  </v-app-bar>
</template>

<script>
export default {
  props: ["mini"]

};


</script>


<style>
.max-80 {
  max-width: 75%;
}
.max-90 {
  max-width: 90%;
}
</style>