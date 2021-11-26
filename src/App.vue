<template>
  <div id="app">
    <SidebarAdminPanel></SidebarAdminPanel>
  </div>
</template>

<script>
import SidebarAdminPanel from './components//Layouts/SidebarAdminPanel'

export default {
  name: 'App',
  components:{
  SidebarAdminPanel
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
