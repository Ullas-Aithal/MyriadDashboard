<template>
    <div>
        <v-container fluid grid-list-md text-xs-center>
            <v-layout row>
                <v-flex xs1 v-for="hour in hours" v-bind:key="hour.id">
                    <Hourly v-bind:hour="hour"></Hourly>
                </v-flex>
            </v-layout>
         </v-container>
    </div>
</template>
<script>
import axios from 'axios'
import Hourly from './Hourly'
import config from '../../../config/config'
export default {
    name:'Weather',
    components:{
        Hourly
    },
    data(){
        return{
            heading:'Weather For Today',
            configData: config,
            hours:[]
        }
    },
    mounted(){
        if(this.configData.accuWeather.getForecastUrl() != null){
        axios.get(this.configData.accuWeather.getForecastUrl())
        .then((response) => {
                 var tempResponse = response.data;
             for(var index in tempResponse){
                 this.hours[index] = tempResponse[index];
                 this.hours[index].id = index;
                console.log(this.hours[index]);
             }
            });
        }
        else{
            console.log("Couldn't get url from forecastUrl from config.js file");
        }
    }
}
</script>
