<template>
<v-container fluid grid-list-md text-xs-center>
    <v-layout>
    <v-flex>
        <v-card class="white--text" :style="{'background': 'rgba(0,0,0,0.3)'}">
            <v-card-title primary-title>
                <v-flex xs6 class="text-xs-left">
                <h1 primary-title class="display-4">{{currentTime}}</h1>
                </v-flex>
                <v-flex class="text-xs-right" xs6>                                            
                    <v-layout row class="justify-end align-center">                                         
                         <skycon v-bind:condition="currentWeather.currently.icon" :key="currentWeather.currently.icon"/>
                         <h1 class="display-2">{{currentWeather.currently.apparentTemperature.toFixed(0)}}°</h1>
                    </v-layout>
                     <v-layout row class="justify-end">
                        <h2 class="text-xs-right">{{currentWeather.hourly.summary}}</h2>
                    </v-layout>
                        <slider animation="fade" class="box-shadow-none news-ticker" :indicators="false" :control-btn=false :interval=5000>
                            <slider-item v-for="(news,index) in newsList" :key="index">
                                <h2 class=" white--text text-overflow">{{news.webTitle}}</h2>
                                <h3 class=" white--text text-overflow subheading" :style="{'text-overflow':'ellipsis'}">{{news.fields.trailText}}</h3>          
                            </slider-item>
                        </slider>      
                </v-flex>                
            </v-card-title>        
        </v-card>
    </v-flex>
</v-layout> 
</v-container>
</template>
<style>
    .box-shadow-none {
        box-shadow: none !important;
    }
    .text-overflow {
        white-space: nowrap !important;
        text-overflow: ellipsis !important;
        display: block !important;
        overflow: hidden !important;
        margin-left: 10px !important;
        margin-right: 1px !important;
    }
    .news-ticker {
        max-height: 60px !important;
        margin-top: 20px !important;
    }
</style>
<script>
import Vue from 'vue'
import moment from 'moment'
import axios from 'axios'
import config from '../config/config'
import VueSkycons from 'vue-skycons'
import { Slider, SliderItem } from 'vue-easy-slider'

Vue.use(VueSkycons, { color: 'white' });
import {dataBus} from '../main'
export default {
    name:'Header',
    data(){
        return{
            heading:'Weather',
            datenow: '',
            moment: moment,
            currentTime: null,
            configData:config,
            newsList:[],
            currentWeather:{}
            // news:{
            //     "id": "world/2018/oct/26/jamal-khashoggi-erdogan-saudis-body-turkey",
            //     "type": "article",
            //     "sectionId": "world",
            //     "sectionName": "World news",
            //     "webPublicationDate": "2018-10-26T11:05:22Z",
            //     "webTitle": "Erdoğan tells Saudis: show us where Jamal Khashoggi's body is",
            //     "webUrl": "https://www.theguardian.com/world/2018/oct/26/jamal-khashoggi-erdogan-saudis-body-turkey",
            //     "apiUrl": "https://content.guardianapis.com/world/2018/oct/26/jamal-khashoggi-erdogan-saudis-body-turkey",
            //     "isHosted": false,
            //     "pillarId": "pillar/news",
            //     "pillarName": "News"
            // },
        }
    },
    components: {
        Slider,
        SliderItem
    },
    methods: {
    updateCurrentTime() {
      this.currentTime = moment().format('LTS');
    },
    updateNewsFeed(){
      var options = {
              url: 'http://localhost:3000/cta',
              method: 'POST',
              data: {
                url: this.configData.guardian.getUrl()
              }
            }
      axios(options)
        .then((response) => {
            if(response.status == 200){
              this.newsList = response.data.response.results;
          }
        });
    }
  },
  created() {
        dataBus.$on('updateWeatherinHeader', (weather) => {
            this.currentWeather = weather;
            console.log(this.currentWeather);
    });
    this.updateNewsFeed();
    this.currentTime = moment().format('LTS');
    setInterval(() => this.updateCurrentTime(), 1 * 1000);
    setInterval(() => this.updateNewsFeed(), 60 * 15 * 1000);
  }
}

</script>
