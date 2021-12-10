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
  left: 83% !important;
  width: 12rem;
}

.v-list-item__icon{
   margin-right: 8px !important;
}
.v-list-item:hover{
    background-color:rgba(115, 103, 240, .1)
}


.footer_h6 ul li a{

}
</style>


<script>
export default {
  data() {
    return {
      items: [
        { title: "Profile", icon: "far fa-user" },
        { title: "Inbox", icon: "far fa-envelope" },
        { title: "Task", icon: "fa-light fa-calendar-check" },
        { title: "Chat", icon: "fa-light fa-message" },
        { title: "Setting", icon: "far fa-cogs" },
        { title: "Pricing", icon: "far fa-credit-card" },
        { title: "FAQ", icon: "far fa-question-circle" },
        { title: "Logout", icon: "far fa-sign-out" },
      ],
    };
  },
};
</script>

