<template>
<v-container fluid grid-list-md text-xs-center>
    <v-layout>
    <v-flex>
        <v-card class="white--text" :style="{'background': 'rgba(0,0,0,0.3)'}">
            <v-card-title >
                <v-flex xs4>
                <h1 primary-title class="display-4">{{currentTime}}</h1>
                </v-flex>
                <v-flex class="justify-right" xs8>
                  <h2 primary-title>{{news.webTitle}}</h2>
                </v-flex>
                
            </v-card-title>        
        </v-card>
    </v-flex>
</v-layout> 
</v-container>
</template>
<script>
import moment from 'moment'
import axios from 'axios'
import config from '../config/config'
export default {
    name:'Header',
    data(){
        return{
            heading:'Weather',
            datenow: '',
            moment: moment,
            currentTime: null,
            configData:config,
            news:{
                "id": "world/2018/oct/26/jamal-khashoggi-erdogan-saudis-body-turkey",
                "type": "article",
                "sectionId": "world",
                "sectionName": "World news",
                "webPublicationDate": "2018-10-26T11:05:22Z",
                "webTitle": "Erdoğan tells Saudis: show us where Jamal Khashoggi's body is",
                "webUrl": "https://www.theguardian.com/world/2018/oct/26/jamal-khashoggi-erdogan-saudis-body-turkey",
                "apiUrl": "https://content.guardianapis.com/world/2018/oct/26/jamal-khashoggi-erdogan-saudis-body-turkey",
                "isHosted": false,
                "pillarId": "pillar/news",
                "pillarName": "News"
            },
        }
    },
    methods: {
    updateCurrentTime() {
      this.currentTime = moment().format('LTS');
    },
    updateNewsFeed(){
      var options = {
              url: 'http://localhost:3000/cta',
              method: 'POST',
              data: {
                url: this.configData.guardian.getUrl()
              }
            }
      axios(options)
        .then((response) => {
            if(response.status == 200){
              this.news = response.data.response.results[0];
              console.log(this.news);
          }
        });
    }
  },
  created() {
   // this.updateNewsFeed();
    this.currentTime = moment().format('LTS');
    setInterval(() => this.updateCurrentTime(), 1 * 1000);
  }
}

</script>
