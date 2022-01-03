<template>
  <v-card p-5 style="padding: 20px; position: fixed;" max-height="100vh">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      @click="$emit('emit', (mini = !mini))"
    >
      <v-list-item class="px-2">
        <v-img
          v-if="mini"
          @click="$emit('emit', (mini = !mini))"
          src="https://www.skincarely.com.au/wp-content/uploads/2021/11/Asset-1.svg"
          width="20px"
        ></v-img>
        <v-img
          else="mini = false"
          @click="$emit('emit', (mini = !mini))"
          src="https://www.skincarely.com.au/wp-content/uploads/2021/11/Asset-3.png"
          width="20px"
        ></v-img>
        <v-btn icon @click="$emit('emit', (mini = !mini))">
          <v-img>></v-img>
        </v-btn>
      </v-list-item>

      <vue-csroll :ops="ops">
        <v-list class="mr-3">
          <v-list-group
            class=""
            v-for="item in items"
            :key="item.title"
            v-model="item.active"
            no-action
          >
          
            <template small v-slot:activator>
              <v-icon small class="mr-3">{{ item.action }}</v-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="child in item.items" :key="child.title">
              <v-list-item-content>
                <v-list-item-title
                  ><a href="/en">{{ child.title }}</a></v-list-item-title
                >

              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </vue-csroll>
    </v-navigation-drawer>
  </v-card>
</template>

<style >
.v-navigation-drawer__border {
  background-color: unset !important;
}
.v-navigation-drawer__content {
  height: 100%;
  overflow-y: unset;
  overflow-x: unset;
}
</style>

<script>
import vuescroll from "vuescroll";

export default {
  components: {
    "vue-csroll": vuescroll,
  },
  data() {
    return {
      drawer: true,
      items: [
        {
          title: "Dashboard",
          action: "fa fa-home",
          items: [
            { title: "list Item", action: "fa fa-box" },
            { title: "list Item 2", action: "fa fa-box" },
          ],
        },
        { title: "My Account", action: "fa fa-dashboard" },
        { title: "Users", action: "fa fa-user" },
        { title: "سیب", action: "fa fa-user" },
        { title: "sdfsdf", action: "fa fa-user" },
        { title: "sdf", action: "fa fa-user" },
        { title: "ertg", action: "fa fa-user" },
        { title: "retert", action: "fa fa-user" },
        { title: "ert", action: "fa fa-user" },
        { title: "erter", action: "fa fa-user" },
        { title: "ereter", action: "fa fa-user" },
        { title: "ergdfg", action: "fa fa-user" },
        { title: "dfgdfv", action: "fa fa-user" },
        { title: "hgfr", action: "fa fa-user" },
        { title: "ryrs", action: "fa fa-user" },
        { title: "sdfsd", action: "fa fa-user" },
        { title: "sdfew", action: "fa fa-user" },
        { title: "werds", action: "fa fa-user" },
        { title: "sfdsdf", action: "fa fa-user" },
        { title: "sfwer", action: "fa fa-user" },
        { title: "cxvxsd", action: "fa fa-user" },
        { title: "werwer", action: "fa fa-user" },
      ],
      mini: true,
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