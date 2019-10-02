<template>
    <v-flex  xs3 text-xs-center>
    <v-card  :style="{'background': 'rgba(0,0,0,0.3)'}" class="max-card-height min-card-height white--text" >
         <v-card-title class="justify-center">
            <h1 primary-title class="display-2 text-overflow" :style="{'text-overflow':'ellipsis'}">{{destinationStation}}fjsdkjfkdsfjdskfhdsjkhfsjdkfhjsdfhdsjfhsdjkfhsdjkfhsdjkfhdsjk</h1>
        </v-card-title>
        
            <h3> Next Train in </h3>            
    
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
            url: this.configData.domainName,
            method: 'POST',
      }
      if(this.ctaDirection == "north"){
         options.url = options.url + "ctanorth"
      }
      else if(this.ctaDirection == "south"){
          options.url = options.url + "ctasouth"
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