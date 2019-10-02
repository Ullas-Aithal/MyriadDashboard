<template>
<v-flex xs3 text-xs-center>
    <v-card class="max-card-height white--text" :style="{'background': 'rgba(0,0,0,0.3)'}" >
        <v-card-title primary-title class="justify-center">
                <h1 primary-title class="display-3"> {{hourlyPrice}}¢ </h1>
                <p class="delta-value-style" v-if="deltaValueString" v-bind:class="{ 'green-color': deltaPositive , 'red-color': !deltaPositive }">{{deltaValueString}}</p>
        </v-card-title>
        <v-divider light></v-divider>
        <h2>ComEd Hourly Pricing</h2>
    </v-card>
</v-flex>
</template>
<style>
.max-card-height{
    min-height: 150px !important;
}
.delta-value-style {
    margin-right: -20px !important;
    padding-left: 5px !important;
    align-self: end !important;
}
.green-color {
    color: greenyellow;
}
.red-color {
    color: red;
}
</style>
<script>
import axios from 'axios'
import config from '../../../config/config'
export default {
    name: 'ComEd',
    data() {
        return {
            hourlyPrice:0.0,
            previousHourlyPrice: 0.0,
            deltaValueString:'',
            deltaPositive:false,
            configData: config,
            querying: false
        }
    },
    methods:{
        getHourlyPricing(){
            var options = {
                url: this.configData.domainName + 'comed',
                method: 'POST'
            }
            if(options.url != null){
                this.querying = true;
                axios(options)
                .then((response) => {
                    this.querying = false;
                
                if(response.status == 200){
                    this.hourlyPrice = (response.data[0].price);
                    //When the app is opened first time
                    if(this.previousHourlyPrice == 0.0){
                        this.previousHourlyPrice = this.hourlyPrice;
                    }
                    else{
                        this.calculateChange();
                    }
                }
                else{
                    /* eslint-disable no-console */
                    console.log("Error. Status code : " + response.status + ". Response : " + response);
                    /* eslint-enable no-console */
                }
                });
            }
            else{
                /* eslint-disable no-console */
                console.log("Couldn't get url for comed from config.js file");
                /* eslint-disable no-console */
            }
        },
        calculateChange(){
            var deltaValue = 0.00;
            deltaValue =  this.hourlyPrice - this.previousHourlyPrice;
            console.log(this.previousHourlyPrice);
            deltaValue = deltaValue.toFixed(3);
            if(deltaValue > 0){
                this.deltaValueString =  "(+" + deltaValue + ")";
                this.deltaPositive = true;
            }
            else if(deltaValue < 0){
                this.deltaValueString =  "(" + deltaValue + ")";
                this.deltaPositive = false;
            }
            this.previousHourlyPrice = this.hourlyPrice                
        }   
    },
    mounted(){
        this.getHourlyPricing();
        setInterval(() => this.getHourlyPricing(), 60*5*1000);
    }
}

</script>