<template>
<v-flex xs3 text-xs-center>
 <v-card color="teal darken-1" class="white--text">
    <v-card-title primary-title class="justify-center">
        <div>
            <h1 class="display-3">₹ {{currencyValue}}</h1>
            <h2>USD → INR</h2>        
        </div>
    </v-card-title>
    </v-card>
</v-flex>
</template>
<script>
import axios from 'axios'
import config from '../../../config/config'
export default {
    name: 'Currency',
    data() {
        return {
            currencyValue:0.0,
            configData: config
        }
    },
    mounted(){
        if(this.configData.currencyConverter.getUrl() != null){
            axios.get(this.configData.currencyConverter.getUrl())
            .then((response) => {
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
}

</script>