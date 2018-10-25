<template>
    <v-flex  xs3 text-xs-center>
    <v-card  :style="{'background': 'rgba(0,0,0,0.3)'}" class="max-card-height min-card-height white--text" >
        <!-- <v-card-title primary-title class="display-6"> -->
            <h1 primary-title class="display-3">{{destinationStation}}</h1>
        <!-- </v-card-title> -->
        <v-layout>
            <v-flex xs4 > <h2> Next Train in </h2> </v-flex>
            <v-flex xs3 > <h2 > {{etaTime[0]}} min</h2> </v-flex>
            <v-flex xs3> <h2 >{{etaTime[1]}} min</h2> </v-flex>
            <v-flex xs3 v-if="etaTime[2]"> <h2 >{{etaTime[2]}} min</h2> </v-flex>
        </v-layout>
        <!-- <p>{{etaTime1}}</p> -->
    <!-- <v-carousel hide-controls hide-delimiters class="max-card-height">
        <v-carousel-item contain="true" 
            v-for="(meetup,index) in meetupsList"
            :key="index"
            :src="meetup.group_photo.thumb_link">
            <p>{{meetup.name}}</p>
            </v-carousel-item>
    </v-carousel> -->
        </v-card>
    </v-flex>
</template>
<style>
.max-card-height{
    max-height: 150px !important;
}
.min-card-height{
    min-height: 150px !important;
}
</style>
<script>
import axios from 'axios'
import moment from 'moment'
import config from '../../../config/config'
export default {
    name: 'CTA',
    props:{
        ctaDirection:String
    },
    data(){
        return{
            configData:config,
            ctaETA:[],
            destinationStation:'',
            etaTime:[],
            moment:moment
        }
    },
    methods:{

    },
    mounted(){
        var options = {
        url: 'http://localhost:3000/cta',
        method: 'POST',
        data: {
          url: ''
        }
      }
      if(this.ctaDirection == "north"){
         options.data.url =  this.configData.cta.north.getUrl();
         console.log(options.data.url);
      }
      else if(this.ctaDirection == "south"){
          options.data.url =  this.configData.cta.south.getUrl();
          console.log(options.data.url);
      }
        axios(options)
        .then((response) => {
            if(response.status == 200){
                this.ctaETA = response.data.ctatt.eta;
                if(this.ctaETA != null){
                    //Destination station name is the same in alll children objects since we're asking for a specified destination
                    this.destinationStation = this.ctaETA[0].destNm;
                    for(var index in this.ctaETA){
                        var arrivaltime = moment(this.ctaETA[index].arrT);
                        this.etaTime[index] = moment(arrivaltime).diff(moment(),'minutes');
                        console.log(this.etaTime[index]);
                    }
                }
                // console.log(this.ctaETA );
            //    this.tempDate = moment(this.ctaETA[0].arrT).subtract(moment());
            // this.tempDate = moment(this.ctaETA[0].arrT);
            // var tempDate2 = moment(this.ctaETA[1].arrT);
            //    var ms = moment(tempDate2).diff(moment(),'minutes');

            
               // var currentTime = moment().format('LTS');
                // console.log(ms);
               // this.etaTime1 = moment().duration(tempDate.diff(currentTime));
               // this.meetupsList = response.data
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