<template>
    <v-flex  xs3 text-xs-center>
    <v-card  :style="{'background': 'rgba(0,0,0,0.3)'}" class="max-card-height min-card-height white--text" >
         <v-card-title class="justify-center">
            <h1 primary-title class="display-2">{{destinationStation}}</h1>
        </v-card-title>
        
            <h3 v-if="etaTime[0]"> Next Train in </h3>            
    
            <v-layout>
                <v-flex v-if="etaTime[0]"> <h2 > {{etaTime[0]}} min</h2> </v-flex>
                <v-flex v-if="etaTime[1]"> <h2 >{{etaTime[1]}} min</h2> </v-flex>
                <v-flex  v-if="etaTime[2]"> <h2 >{{etaTime[2]}} min</h2> </v-flex>
            </v-layout>
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
        
        getCTATimings(){
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

                    //Reset object to null
                    this.etaTime = [];
                    for(var index in this.ctaETA){
                        var arrivaltime = moment(this.ctaETA[index].arrT);
                        this.$set(this.etaTime,index,moment(arrivaltime).diff(moment(),'minutes'));
                        // this.etaTime[index] = moment(arrivaltime).diff(moment(),'minutes');
                        console.log(this.etaTime[index]);
                    }
                }
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
        this.getCTATimings();
      setInterval(() => this.getCTATimings(), 20*1000);
    }
}
</script>