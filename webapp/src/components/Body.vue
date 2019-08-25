<template>
<v-layout align-start pa-2 row grid-list-xl>
    <v-flex>
        <Weather></Weather>
        <v-container fluid grid-list-md >
            <v-layout row >
                <CTA v-bind:ctaDirection="ctaDirection[0]"></CTA>
                <CTA v-bind:ctaDirection="ctaDirection[1]"></CTA>
                <Currency></Currency>
                <LastFM></LastFM>
            </v-layout>
            <v-layout row>
                <Meetups></Meetups>
                <CPL></CPL>
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
import LastFM from '../components/cards/Music/LastFM'
import CPL from '../components/cards/CPL/CPL'
export default {
    name:'Body',
    components:{
        Weather,
        Currency,
        Meetups,
        CTA,
        LastFM,
        CPL
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
