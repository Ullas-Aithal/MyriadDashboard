<template>
<v-layout align-start pa-2 justify-center row grid-list-xl>
    <v-flex>
        <Weather></Weather>
    </v-flex>
</v-layout> 
</template>
<script>
import Weather from '../components/cards/Weather/Weather'
export default {
    name:'Body',
    components:{
        Weather
    }
    // data(){
    //     return{
    //         heading:'Weather'
    //     }
    // }
}
</script>
