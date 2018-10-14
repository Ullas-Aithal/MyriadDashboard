<template>
    <v-flex  xs3 text-xs-center>
    <v-card  class="max-card-height white--text">
    <v-carousel hide-controls hide-delimiters class="max-card-height">
        <v-carousel-item contain="true" 
            v-for="(meetup,index) in meetupsList"
            :key="index"
            :src="meetup.group_photo.thumb_link">
            <p>{{meetup.name}}</p>
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
export default {
    name: 'Meetups',
    data(){
        return{
            configData:config,
            meetupsList:[]
        }
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