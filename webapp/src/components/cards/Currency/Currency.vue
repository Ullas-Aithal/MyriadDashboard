<template>
<v-flex xs3 text-xs-center>
    <v-card class="max-card-height white--text" :style="{'background': 'rgba(0,0,0,0.3)'}" >
        <v-card-title primary-title class="justify-center">
                <h1 primary-title class="display-3">₹ {{currencyValue}}</h1>
                <p class="delta-value-style" v-if="deltaValueString" v-bind:class="{ 'green-color': deltaPositive , 'red-color': !deltaPositive }">{{deltaValueString}}</p>
        </v-card-title>
        <h2>USD → INR</h2>
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
    name: 'Currency',
    data() {
        return {
            currencyValue:0.0,
            previousCurrencyValue: 0.0,
            deltaValueString:'',
            deltaPositive:false,
            configData: config,
            querying: false
        }
    },
    methods:{
        getCurrency(){
            if(this.configData.currencyConverter.getUrl() != null){
                this.querying = true;
                axios.get(this.configData.currencyConverter.getUrl())
                .then((response) => {
                    this.querying = false;
                if(response.status == 200){
                    this.currencyValue = (response.data.USD_INR.val).toFixed(2);
                    //When the app is opened first time
                    if(this.previousCurrencyValue == 0.0){
                        this.previousCurrencyValue = this.currencyValue;
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
                console.log("Couldn't get url for currencyUrl from config.js file");
                /* eslint-disable no-console */
            }
        },
        calculateChange(){
            var deltaValue = 0.00;
            deltaValue =  this.currencyValue - this.previousCurrencyValue;
            console.log(this.previousCurrencyValue);
            deltaValue = deltaValue.toFixed(3);
            if(deltaValue > 0){
                this.deltaValueString =  "(+" + deltaValue + ")";
                this.deltaPositive = true;
            }
            else if(deltaValue < 0){
                this.deltaValueString =  "(-" + deltaValue + ")";
                this.deltaPositive = false;
            }                
        }   
    },
    mounted(){
        this.getCurrency();
        setInterval(() => this.getCurrency(), 60*15*1000);
    }
}

</script>