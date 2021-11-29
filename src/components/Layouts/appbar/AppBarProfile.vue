<template>
  <div>
    <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-badge bordered bottom color="red" dot offset-x="10" offset-y="10">
          <v-avatar size="40" v-bind="attrs" v-on="on">
            <v-img
              src="https://www.skincarely.com.au/wp-content/uploads/2021/11/Asset-1.svg"
            ></v-img>
          </v-avatar>
        </v-badge>
      </template>

      <v-list>
        <v-list-item v-for="item in items" :key="item.title" @click="() => {}">
          <v-list-item-icon >
            <v-icon small>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<style scoped>
.menuable__content__active {
  top: 98px !important;
  left: 1260px !important;
  width: 12rem;
}

.v-list-item__icon{
   margin-right: 8px !important;
}
.v-list-item:hover{
    background-color:rgba(115, 103, 240, .1)
}
</style>


<script>
export default {
  data() {
    return {
      items: [
        { title: "Profile", icon: "fa-user" },
        { title: "Inbox", icon: "fa-envelope" },
        { title: "Task", icon: " fa-check-square-o" },
        { title: "Chat", icon: " fa-comments-o" },
        { title: "Setting", icon: "fa-cogs" },
        { title: "Pricing", icon: "fa-credit-card" },
        { title: "FAQ", icon: " fa-question-circle" },
        { title: "Logout", icon: "fa-sign-out" },
      ],
    };
  },
};
</script>

