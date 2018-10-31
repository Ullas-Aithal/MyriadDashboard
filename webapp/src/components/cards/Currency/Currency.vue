<template>
<v-flex xs3 text-xs-center>
    <v-card class="max-card-height white--text" :style="{'background': 'rgba(0,0,0,0.3)'}" >
        <v-card-title primary-title class="justify-center">
            <div>
                <h1 primary-title class="display-3">₹ {{currencyValue}}
                </h1>
                <h2>USD → INR</h2>
            </div>
        </v-card-title>
    </v-card>
</v-flex>
</template>
<style>
.max-card-height{
    min-height: 150px !important;
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
        }   
    },
    mounted(){
        this.getCurrency();
        setInterval(() => this.getCurrency(), 60*15*1000);
    }
}

</script>