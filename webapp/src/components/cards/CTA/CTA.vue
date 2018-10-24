<template>
    <v-flex  xs3 text-xs-center>
    <v-card  :style="{'background': 'rgba(0,0,0,0.3)'}" class="max-card-height white--text" >
        <p>{{ctaETA[0].destNm}}</p>
        <p>{{etaTime1}}</p>
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
</style>
<script>
import axios from 'axios'
import moment from 'moment'
import config from '../../../config/config'
export default {
    name: 'CTA',
    data(){
        return{
            configData:config,
            ctaETA:[],
            etaTime1:'',
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
          url: this.configData.cta.north.getUrl()
        }
      }
        axios(options)
        .then((response) => {
            if(response.status == 200){
                this.ctaETA = response.data.ctatt.eta;
                console.log(this.ctaETA );
            //    this.tempDate = moment(this.ctaETA[0].arrT).subtract(moment());
            this.tempDate = moment(this.ctaETA[0].arrT);
            var tempDate2 = moment(this.ctaETA[1].arrT);
               var ms = moment(tempDate2).diff(moment(),'minutes');

            
               // var currentTime = moment().format('LTS');
                console.log(ms);
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