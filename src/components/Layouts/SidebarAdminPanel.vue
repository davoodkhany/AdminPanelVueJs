<template>
  <v-card >
    <v-navigation-drawer  v-model="drawer" :mini-variant.sync="mini" permanent  @click="$emit('emit', mini = !mini)">
      <v-list-item class="px-2">
        <v-img v-if="mini" @click="$emit('emit', mini = !mini)" src="https://www.skincarely.com.au/wp-content/uploads/2021/11/Asset-1.svg" width="20px"></v-img>
         <v-img else="mini = false" @click="$emit('emit', mini = !mini)" src="https://www.skincarely.com.au/wp-content/uploads/2021/11/Asset-3.png" width="20px"></v-img>
        <v-btn icon @click="$emit('emit', mini = !mini)">
           <v-img>></v-img>
        </v-btn>
      </v-list-item>

      
      <v-list dense > 
      <v-list-item  @click="$emit('emit', mini = !mini)" v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
          <v-icon>
            {{ item.icon }}
          </v-icon>
            </v-list-item-icon>

        <v-list-item-content>
            <v-list-item-title>
                {{ item.title }}
            </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>

    export default {
        data(){
            return {
                drawer: true,
                items:[
                    {title : 'Dashboard', icon:'fa fa-home'},
                    {title : 'My Account', icon:'fa fa-dashboard'},
                    {title : 'Users' , icon: 'fa fa-user'},
                ],
                mini : true
            }
        },

    }
</script>