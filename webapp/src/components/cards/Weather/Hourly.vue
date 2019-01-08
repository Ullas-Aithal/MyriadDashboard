<template>
    <div>
    <!-- <div style="opacity: 0.5;"> -->
        <v-card class="card-height white--text" :style="{'background': 'rgba(0,0,0,0.3)'}">
            <v-card-title primary-title class="justify-center">
                <div align-center>
                    <v-layout>
                        <v-flex  text-xs-center>
                            <h1>{{hour.apparentTemperature.toFixed(0)}}°</h1>
                        </v-flex>
                    </v-layout>
                    <v-layout text-xs-center>
                        <!-- <skycon v-bind:condition="hour.icon" :key="hour.icon"/> -->
                        <!-- <img :src="hour.icon + '.png'" /> -->
                        <component class="margin-svg" :is="hour.icon"></component>
                    </v-layout>
                    <v-layout text-xs-center justify-center class="margin-top">                        
                        <h4 class="caption text-overflow2">{{hour.summary}}</h4>
                    </v-layout>
                </div>
            </v-card-title>
            <v-card-actions class="justify-center padding-up-0">
                <h4>{{moment.unix(hour.time).format('h A')}}</h4>
            </v-card-actions>
        </v-card>
    </div>
</template>


<style>
.card-margin {
    margin-left:3px;
    margin-right:3px;
}
.weather-icon-style {
    display: inline-flex;
    justify-content: center;
}
.card-bottom-background {
    background: #2e3858;
}
.padding-up-0 {
    padding-top: 0px !important;
}
.margin-top {
    margin-top: 10px !important;
}
.text-overflow2 {
    white-space: nowrap !important;
    text-overflow: ellipsis !important;
    display: block !important;
    overflow: hidden !important;
    margin-left: 0px !important;
    margin-right: 0px !important;
}
.margin-svg{
    margin-top: -25px;
    margin-bottom: -30px;
}
</style>
<script>
import Vue from 'vue'
import config from '../../../config/config'
import moment from 'moment'
import VueSkycons from 'vue-skycons'
import clearDay from '../../../assets/clear-day'
import clearNight from '../../../assets/clear-night'
import cloudFog from '../../../assets/cloud-fog'
import cloudy from '../../../assets/cloudy'
import partlyCloudyDay from '../../../assets/partly-cloudy-day'
import partlyCloudyNight from '../../../assets/partly-cloudy-night'
import rain from '../../../assets/rain'
import sleet from '../../../assets/sleet'
import snow from '../../../assets/snow'
import wind from '../../../assets/wind'
Vue.use(VueSkycons, { color: 'white' });
//import axios from 'axios'    
    export default {
        name: "Hourly",
        props: {    
            hour: {}
        },
    
        data() {    
            return {    
                configData: config,        
                moment: moment,
            };   
             
        },
        components: {
            'clear-day': clearDay,
            'clear-night': clearNight,
            'cloud-fog': cloudFog,
            'cloudy': cloudy,
            'partly-cloudy-day': partlyCloudyDay,
            'partly-cloudy-night': partlyCloudyNight,
            'rain': rain,
            'sleet': sleet,
            'snow': snow,
            'wind': wind,
        },
        filters: {
            moment:moment
        },
    };
</script>
