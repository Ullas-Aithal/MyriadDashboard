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
                        <img :src="hour.icon + '.svg'" />
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
</style>
<script>
import Vue from 'vue'
import config from '../../../config/config'
import moment from 'moment'
import VueSkycons from 'vue-skycons'

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
        filters: {
            moment:moment
        },
    };
</script>
