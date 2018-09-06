<template>
    <v-card>
        <v-card-title>
            <h1>{{heading}}</h1>
        </v-card-title>        
        <v-layout row wrap>
            <v-flex v-for="hour in hours" v-bind:key="hour.id" d-flex xs12 sm1 md1 text-xs-center >
                <Hourly v-bind:id="hour.id"></Hourly>
                <v-divider light vertical></v-divider>
            </v-flex>
        </v-layout>
    </v-card> 
</template>
<script>
// import axios from 'axios'
import Hourly from './Hourly'
export default {
    name:'Weather',
    components:{
        Hourly
    },
    data(){
        return{
            heading:'Weather For Today',
            weatherResponse:'null',
            example:{
                title:'abcd'
            },
            hours:[{
                id:1
            },
            {
                id:2
            }]
        }
    },
    mounted(){
        
    }
}
</script>
