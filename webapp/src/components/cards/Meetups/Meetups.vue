<template>
    <v-flex  xs3 text-xs-center>
    <v-card  class="max-card-height white--text" :style="{'background': 'rgba(0,0,0,0.3)'}">
    <v-card-title class="justify-center">
        <h1 primary-title class="display-2">Meetups</h1>
    </v-card-title>
    <v-carousel hide-controls hide-delimiters class="max-card-height">
        <v-carousel-item contain="true" 
            v-for="(meetup,index) in meetupsList"
            :key="index">
            <!-- <v-flex xs2><img style="width: 70px; height: 70px" :src=meetup.group_photo.thumb_link></v-flex> -->
            <h2 class=" white--text" :style="{'text-overflow':'ellipsis'}">{{meetup.name}}</h2>
            <h3 class="white--text">{{ moment.unix(meetup.next_event.time/1000).format('hh:mm YYYY-MM-DD')}}</h3>
            <h4 class="white--text"></h4>
            </v-carousel-item>
    </v-carousel>
        </v-card>
    </v-flex>
</template>
<style>
.max-card-height{
    max-height: 150px !important;
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

    },
    mounted(){
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
            }
            else {
                 /* eslint-disable no-console */
                    console.log("Error. Status code : " + response.status + ". Response : " + response);
                    /* eslint-enable no-console */
            }
        })
    }
}
</script>