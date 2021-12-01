/* eslint-disable vue/no-template-key */
<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    nudge-width="200"
    offset-x
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon class="mr-2" v-bind="attrs" v-on="on">
        <v-badge color="red" content="5" offset-x="12" offset-y="10">
          <v-icon>fa fa-bell-o</v-icon>
        </v-badge>
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="">
        <span class="text-h6" gray>Notification</span>
        <v-spacer></v-spacer>
        <v-chip class="ma-2" color="indigo" text-color="white"> 6 New </v-chip>
      </v-card-title>
      <v-divider></v-divider>
      <v-list v-for="item in items" :key="item.title">
        <template>
          <v-list-item>
            <v-list-item-avatar>
              <img :src="item.avatar" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }} </v-list-item-title>
              <v-list-item-subtitle> Im From In Iran </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
        </template>
      </v-list>
      <v-sheet class="flex flex-row-reverse">
        <v-switch
          color="indigo"
          input-value="true"
          style="font-weight: 900"
          label="System Notifications"
        >
        </v-switch>
      </v-sheet>
      <v-divider></v-divider>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      items: [
        {
          avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
          title: "Congratulation Sam 🎉 ",
          subtitle: "Won the monthly best seller badge",
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
          title: "New message received ",
          subtitle: "You have 10 unread messages",
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
          title: "Revised Order 👋 ",
          subtitle: "MD Inc. order updated",
        },
      ],
      items2: [
        { fa: "", title: " ", subtitle: "", color: "" },
        { fa: "", title: " ", subtitle: "", color: "" },
        { fa: "", title: " ", subtitle: "", color: "" },
      ],
    };
  },
};
</script>
<style>
.menuable__content__active {
  top: 98px !important;
  left: 970px !important;
}

.v-input__slot {
  disaplay: flex;
  flex-direction: row-reverse;
  padding: 0 10px;
}
.v-input--selection-controls {
  margin-top: 16px;
  padding-top: 0px !important;
}
</style>