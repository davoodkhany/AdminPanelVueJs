/* eslint-disable vue/no-template-key */
<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    nudge-width="180"
    offset-x
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon class="mr-2" v-bind="attrs" v-on="on">
        <v-badge color="red" content="5" offset-x="12" offset-y="10">
          <v-icon>fa fa-bell-o</v-icon>
        </v-badge>
      </v-btn>
    </template>



    <vue-scroll :ops="ops">
      <v-card class="child-element" height="500px">
        <v-card-title>
          <span class="text-h6" gray>Notification</span>
          <v-spacer></v-spacer>
          <v-chip class="ma-2" color="deep-purple" text-color="white">
            6 New
          </v-chip>
        </v-card-title>

        <v-divider></v-divider>
        <v-list>
          <div v-for="item in items" :key="item.title">
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
          </div>
        </v-list>
        <v-sheet class="flex flex-row-reverse">
          <v-switch
            color="deep-purple"
            input-value="true"
            style="font-weight: 900"
            label="System Notifications"
          >
          </v-switch>
        </v-sheet>
        <v-divider></v-divider>

        <v-list>
          <div v-for="card in cards" :key="card.title">
            <v-list-item>
              <v-btn icon class="mr-4" :class="card.colorBtn">
                <v-icon :color="card.colorIcon" class="rounded-circle" small>{{
                  card.fa
                }}</v-icon>
              </v-btn>
              <v-list-item-content>
                <v-list-item-title>{{ card.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ card.subtitle }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
          </div>
        </v-list>
        <div style="padding: 10px">
          <v-btn
            color="deep-purple lighten-1 white--text deep-purple"
            class="v-btn--block"
          >
            Read all notifications
          </v-btn>
        </div>
      </v-card>
    </vue-scroll>
  </v-menu>
</template>

<script>
import vuescroll from "vuescroll";
export default {
  components: {
    "vue-scroll": vuescroll,
  },
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
      cards: [
        {
          fa: "fa-thin fa-xmark",
          title: "Sales report generated",
          subtitle: "Last month sales report generated",
          colorBtn: "red lighten-5",
          colorIcon: "red lighten",
        },
        {
          fa: "fa-thin fa-check",
          title: "Server down",
          subtitle: "USA Serve is down due to hight CPU usage",
          colorBtn: "green lighten-4",
          colorIcon: "green",
        },

        {
          fa: "fa-solid fa-triangle-exclamation",
          title: "High memory usage",
          subtitle: "BLR Server using high memory",
          colorBtn: "orange lighten-5",
          colorIcon: "orange lighten",
        },
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