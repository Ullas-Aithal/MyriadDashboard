<template>
    <v-flex  xs3 text-xs-center>
    <v-card  class="max-card-height white--text" :style="{'background': 'rgba(0,0,0,0.3)'}">
    <v-card-title class="justify-center">
        <h1 primary-title class="display-2">Meetups</h1>
    </v-card-title>
    <v-carousel hide-controls hide-delimiters class="max-card-height box-shadow-none ">
        <v-carousel-item contain="true" 
            v-for="(meetup,index) in meetupsList"
            :key="index">
            <!-- <v-flex xs2><img style="width: 70px; height: 70px" :src=meetup.group_photo.thumb_link></v-flex> -->
            <h3 class=" white--text text-overflow" :style="{'text-overflow':'ellipsis'}">{{meetup.name}}</h3>
            <h3 class=" white--text text-overflow body-1" >{{meetup.next_event.name}}</h3>
            <h4 class="white--text text-overflow body-2">{{ moment.unix(meetup.next_event.time/1000).format('h:mm a dddd MMM Do ')}}</h4>
            </v-carousel-item>
    </v-carousel>
        </v-card>
    </v-flex>
</template>
<style>
.max-card-height{
    min-height: 150px !important;
}
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
</style>
<script>
import axios from 'axios'
import config from '../../../config/config'
import moment from 'moment'
export default {
    name: 'Meetups',
    data(){
        return{
            configData:config,
            moment: moment,
            meetupsList:[]
        }
    },
    filters: {
        moment:moment
    },
    methods:{
        getMeetupUpdates(){
            var tempUrl = this.configData.meetups.getUrl();
        var options = {
        url: 'http://localhost:3000/',
        method: 'POST',
        data: {
          url: this.configData.meetups.getUrl()
        }
      }
        axios(options)
        .then((response) => {
            if(response.status == 200){
                console.log(response.data);
                this.meetupsList = response.data
                console.log(this.meetupsList);
            }
            else {
                 /* eslint-disable no-console */
                    console.log("Error. Status code : " + response.status + ". Response : " + response);
                    /* eslint-enable no-console */
            }
        })
        }
    },
    mounted(){
        this.getMeetupUpdates();
        setInterval(() => this.getCurrency(), 60*60*1000);
    }
}
</script>