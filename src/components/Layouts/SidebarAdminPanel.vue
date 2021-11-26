<template>
  <div>
    <b-button v-b-toggle.sidebar-border>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-border" sidebar-class="border-right border-danger">
      <div class="px-2 py-1">
        <p></p>
      </div>
    </b-sidebar>
  </div>
</template>



<style>

.collapsed > .when-open,
.not-collapsed > .when-closed {
  width: 130px !important;
}
.b-sidebar {
  width: 260px !important;
}

</style>