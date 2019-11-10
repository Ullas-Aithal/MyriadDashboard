<template>
    <v-flex  xs3 text-xs-center>
    <v-card  :style="{'background': 'rgba(0,0,0,0.3)'}" class="max-card-height min-card-height white--text" >
         <v-card-title class="justify-center">
            <h1 primary-title class="font-weight-regular display-2 text-overflow" :style="{'text-overflow':'ellipsis'}">{{ctaDirectionUpper}}</h1>
        </v-card-title>          
            <v-layout class="margin-5">
                <v-flex v-if="etaTime[0]" class="font-weight-light text-overflow" :class="{'xs12': etaTime[0] != null}" :style="{'text-overflow':'ellipsis'}"> <h2 class="font-weight-light text-overflow" :style="{'text-overflow':'ellipsis'}">{{ctaETA[0].destNm}}  </h2> </v-flex>
                <v-flex v-if="etaTime[1]" class="font-weight-light text-overflow" :class="{'xs12': etaTime[1] != null}" :style="{'text-overflow':'ellipsis'}"> <h2 class="font-weight-light text-overflow" :style="{'text-overflow':'ellipsis'}">{{ctaETA[1].destNm}}  </h2> </v-flex>
                <v-flex v-if="etaTime[2]" class="font-weight-light text-overflow" :class="{'xs12': etaTime[2] != null}" :style="{'text-overflow':'ellipsis'}"> <h2 class="font-weight-light text-overflow" :style="{'text-overflow':'ellipsis'}">{{ctaETA[2].destNm}}  </h2> </v-flex>
            </v-layout>
            <v-layout class="margin-5">
                <v-flex v-if="etaTime[0]" class="font-weight-light text-overflow" :class="{'xs12': etaTime[0] != null}"> <h2 > {{etaTime[0]}} min </h2> </v-flex> 
                <v-flex v-if="etaTime[1]" class="font-weight-light text-overflow" :class="{'xs12': etaTime[1] != null}"> <h2 >{{etaTime[1]}} min</h2> </v-flex>
                <v-flex v-if="etaTime[2]" class="font-weight-light text-overflow" :class="{'xs12': etaTime[1] != null}"> <h2 >{{etaTime[2]}} min</h2> </v-flex>
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
    margin-left: 0px !important;
    margin-right: 0px !important;
}
.margin-5 {
    margin-right: 5px !important;
    margin-left: 5px !important;
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
            ctaDirectionUpper:this.ctaDirection[0].toUpperCase() + this.ctaDirection.slice(1),
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