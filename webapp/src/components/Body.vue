<template>
<v-layout align-start pa-2 row grid-list-xl>
    <v-flex>
        <Weather></Weather>
        <v-container fluid grid-list-md >
            <v-layout row >
                <Currency></Currency>
            </v-layout>
        </v-container>
    </v-flex>
</v-layout> 
</template>
<script>
import Weather from '../components/cards/Weather/Weather'
import Currency from '../components/cards/Currency/Currency'
export default {
    name:'Body',
    components:{
        Weather,
        Currency
    }
}
</script>
