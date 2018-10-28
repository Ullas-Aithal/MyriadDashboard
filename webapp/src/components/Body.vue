<template>
<v-layout align-start pa-2 row grid-list-xl>
    <v-flex>
        <Weather></Weather>
        <v-container fluid grid-list-md >
            <v-layout row >
                <Currency></Currency>
                <Meetups></Meetups>
                <CTA v-bind:ctaDirection="ctaDirection[0]"></CTA>
                <CTA v-bind:ctaDirection="ctaDirection[1]"></CTA>
            </v-layout>
        </v-container>
    </v-flex>
</v-layout> 
</template>
<script>
import Weather from '../components/cards/Weather/Weather'
import Currency from '../components/cards/Currency/Currency'
import Meetups from '../components/cards/Meetups/Meetups'
import CTA from '../components/cards/CTA/CTA'
export default {
    name:'Body',
    components:{
        Weather,
        Currency,
        Meetups,
        CTA
    },
    data(){
        return{
            ctaDirection:[
                'north',
                'south'
            ]
        }
    }
}
</script>
