<template>
<v-container fluid grid-list-md text-xs-center>
    <v-layout>
    <v-flex>
        <v-card class="white--text" :style="{'background': 'rgba(0,0,0,0.3)'}">
            <v-card-title >
                <v-flex xs4>
                <h1 primary-title class="display-4">{{currentTime}}</h1>
                </v-flex>
                
            </v-card-title>        
        </v-card>
    </v-flex>
</v-layout> 
</v-container>
</template>
<script>
import moment from 'moment'
export default {
    name:'Header',
    data(){
        return{
            heading:'Weather',
            datenow: '',
            moment: moment,
            currentTime: null,
        }
    },
    methods: {
    updateCurrentTime() {
      this.currentTime = moment().format('LTS');
    }
  },
  created() {
    this.currentTime = moment().format('LTS');
    setInterval(() => this.updateCurrentTime(), 1 * 1000);
  }
}
</script>
