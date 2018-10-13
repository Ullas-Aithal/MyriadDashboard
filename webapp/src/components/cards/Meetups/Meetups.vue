<template>
    <v-flex xs3 text-xs-center>
    <v-card class="white--text">
        <v-card-title primary-title class="justify-center">
            <div>
                <h1 class="display-3">Hola!
                </h1>    
            </div>
        </v-card-title>
        </v-card>
    </v-flex>
</template>
<script>
import axios from 'axios'
import config from '../../../config/config'
export default {
    name: 'Meetups',
    data(){
        return{
            configData:config
        }
    },
    methods:{

    },
    mounted(){
        var tempUrl = this.configData.meetups.getUrl();
        var options = {
        url: 'http://localhost:3000/',
        method: 'POST',
        body: {
          url: this.configData.meetups.getUrl()
        }
      }
        axios({url: 'http://localhost:3000/',
        method: 'POST',
        data: {
          url:  this.configData.meetups.getUrl()
        }})
        .then((response) => {
            console.log(response);
        })
    }
}
</script>