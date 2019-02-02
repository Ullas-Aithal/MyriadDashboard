<template>
    <div>
        <v-container fluid grid-list-md text-xs-center>
            <v-layout row>
                <v-flex xs1 v-for="(hour,index) in hours.hourly.data.slice(0,12)" v-bind:key="index">
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
import {dataBus} from '../../../main'
export default {
    name:'Weather',
    components:{
        Hourly
    },
    data(){
        return{
            heading:'Weather For Today',
            configData: config,
            hours:[],
                  
        }
    },
    methods:{
      getWeatherUpdates(){
        var options = {
        url: this.configData.domainName + 'weather',
        method: 'POST',
      }
        axios(options)
        .then((response) => {                        
                 this.hours = response.data;
                 dataBus.$emit('updateWeatherinHeader',this.hours);
            });
      }
    },
    mounted(){
        this.getWeatherUpdates();
        setInterval(() => this.getWeatherUpdates(), 60 * 15 * 1000);
    }
}
</script>
