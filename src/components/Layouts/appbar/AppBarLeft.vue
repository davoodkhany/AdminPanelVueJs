<template>
    <div>
        <v-btn icon v-for="item in leftItems" :key="item.fa">
            <v-icon>
                {{ item.fa }}
            </v-icon>
        </v-btn>
  </div>
</template>
<style scoped>
.fa , .far{
    font-size:20px !important
}
</style>


<script>

export default {
    data(){
        return{
            leftItems:[
                {fa:'fa-regular fa-calendar'},
                {fa:'fa-regular fa-message'},
                {fa: "far fa-envelope" },
                {fa:'fa-light fa-calendar-check'},
                {fa:'fa-regular fa-star'},
                

            ]
        }
    }
}

</script>
