<template>
<v-container fluid grid-list-md text-xs-center>
    <v-layout>
    <v-flex>
        <v-card>
            <v-card-title >
                <v-flex xs2>
                <h1>{{currentTime}}</h1>
                </v-flex>
                <v-flex xs2 offset-xs8>
                <h1 align-content-end>{{currentConditions[0].Temperature.Metric.Value}} C</h1>
                <h2>{{currentConditions[0].WeatherText}}</h2>
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
            currentConditions:[
  {
    "LocalObservationDateTime": "2018-10-09T21:23:00-05:00",
    "EpochTime": 1539138180,
    "WeatherText": "Mostly cloudy",
    "WeatherIcon": 38,
    "IsDayTime": false,
    "Temperature": {
      "Metric": {
        "Value": 25.3,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 78,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "MobileLink": "http://m.accuweather.com/en/us/chicago-il/60608/current-weather/26495_pc?lang=en-us",
    "Link": "http://www.accuweather.com/en/us/chicago-il/60608/current-weather/26495_pc?lang=en-us"
  }
]
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
