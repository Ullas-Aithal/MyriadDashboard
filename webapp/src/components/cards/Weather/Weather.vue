<template>
    <div>
        <v-container fluid grid-list-md text-xs-center>
            <v-layout row>
                <v-flex xs1 v-for="(hour,index) in hours" v-bind:key="index">
                    <Hourly v-bind:hour="hour"></Hourly>
                </v-flex>
            </v-layout>
         </v-container>
    </div>
</template>
<script>
//import axios from 'axios'
import Hourly from './Hourly'
import config from '../../../config/config'
export default {
    name:'Weather',
    components:{
        Hourly
    },
    data(){
        return{
            heading:'Weather For Today',
            configData: config,
            hours:[{
      "DateTime": "2018-10-03T21:00:00-05:00",
      "EpochDateTime": 1538618400,
      "WeatherIcon": 7,
      "IconPhrase": "Cloudy",
      "IsDaylight": false,
      "Temperature": {
        "Value": 79,
        "Unit": "F",
        "UnitType": 18
      },
      "PrecipitationProbability": 19,
      "MobileLink": "http://m.accuweather.com/en/us/chicago-il/60608/hourly-weather-forecast/26495_pc?day=1&lang=en-us",
      "Link": "http://www.accuweather.com/en/us/chicago-il/60608/hourly-weather-forecast/26495_pc?day=1&hbhhour=21&lang=en-us"
    },
    {
      "DateTime": "2018-10-03T22:00:00-05:00",
      "EpochDateTime": 1538622000,
      "WeatherIcon": 7,
      "IconPhrase": "Cloudy",
      "IsDaylight": false,
      "Temperature": {
        "Value": 78,
        "Unit": "F",
        "UnitType": 18
      },
      "PrecipitationProbability": 24,
      "MobileLink": "http://m.accuweather.com/en/us/chicago-il/60608/hourly-weather-forecast/26495_pc?day=1&lang=en-us",
      "Link": "http://www.accuweather.com/en/us/chicago-il/60608/hourly-weather-forecast/26495_pc?day=1&hbhhour=22&lang=en-us"
    },
    {
      "DateTime": "2018-10-03T23:00:00-05:00",
      "EpochDateTime": 1538625600,
      "WeatherIcon": 7,
      "IconPhrase": "Cloudy",
      "IsDaylight": false,
      "Temperature": {
        "Value": 77,
        "Unit": "F",
        "UnitType": 18
      },
      "PrecipitationProbability": 43,
      "MobileLink": "http://m.accuweather.com/en/us/chicago-il/60608/hourly-weather-forecast/26495_pc?day=1&lang=en-us",
      "Link": "http://www.accuweather.com/en/us/chicago-il/60608/hourly-weather-forecast/26495_pc?day=1&hbhhour=23&lang=en-us"
    },
    {
      "DateTime": "2018-10-04T00:00:00-05:00",
      "EpochDateTime": 1538629200,
      "WeatherIcon": 7,
      "IconPhrase": "Cloudy",
      "IsDaylight": false,
      "Temperature": {
        "Value": 75,
        "Unit": "F",
        "UnitType": 18
      },
      "PrecipitationProbability": 47,
      "MobileLink": "http://m.accuweather.com/en/us/chicago-il/60608/hourly-weather-forecast/26495_pc?day=2&lang=en-us",
      "Link": "http://www.accuweather.com/en/us/chicago-il/60608/hourly-weather-forecast/26495_pc?day=2&hbhhour=0&lang=en-us"
    },
    {
      "DateTime": "2018-10-04T01:00:00-05:00",
      "EpochDateTime": 1538632800,
      "WeatherIcon": 15,
      "IconPhrase": "Thunderstorms",
      "IsDaylight": false,
      "Temperature": {
        "Value": 71,
        "Unit": "F",
        "UnitType": 18
      },
      "PrecipitationProbability": 51,
      "MobileLink": "http://m.accuweather.com/en/us/chicago-il/60608/hourly-weather-forecast/26495_pc?day=2&lang=en-us",
      "Link": "http://www.accuweather.com/en/us/chicago-il/60608/hourly-weather-forecast/26495_pc?day=2&hbhhour=1&lang=en-us"
    },
    {
      "DateTime": "2018-10-04T02:00:00-05:00",
      "EpochDateTime": 1538636400,
      "WeatherIcon": 15,
      "IconPhrase": "Thunderstorms",
      "IsDaylight": false,
      "Temperature": {
        "Value": 70,
        "Unit": "F",
        "UnitType": 18
      },
      "PrecipitationProbability": 51,
      "MobileLink": "http://m.accuweather.com/en/us/chicago-il/60608/hourly-weather-forecast/26495_pc?day=2&lang=en-us",
      "Link": "http://www.accuweather.com/en/us/chicago-il/60608/hourly-weather-forecast/26495_pc?day=2&hbhhour=2&lang=en-us"
    },
    {
      "DateTime": "2018-10-04T03:00:00-05:00",
      "EpochDateTime": 1538640000,
      "WeatherIcon": 38,
      "IconPhrase": "Mostly cloudy",
      "IsDaylight": false,
      "Temperature": {
        "Value": 68,
        "Unit": "F",
        "UnitType": 18
      },
      "PrecipitationProbability": 47,
      "MobileLink": "http://m.accuweather.com/en/us/chicago-il/60608/hourly-weather-forecast/26495_pc?day=2&lang=en-us",
      "Link": "http://www.accuweather.com/en/us/chicago-il/60608/hourly-weather-forecast/26495_pc?day=2&hbhhour=3&lang=en-us"
    },
    {
      "DateTime": "2018-10-04T04:00:00-05:00",
      "EpochDateTime": 1538643600,
      "WeatherIcon": 38,
      "IconPhrase": "Mostly cloudy",
      "IsDaylight": false,
      "Temperature": {
        "Value": 66,
        "Unit": "F",
        "UnitType": 18
      },
      "PrecipitationProbability": 40,
      "MobileLink": "http://m.accuweather.com/en/us/chicago-il/60608/hourly-weather-forecast/26495_pc?day=2&lang=en-us",
      "Link": "http://www.accuweather.com/en/us/chicago-il/60608/hourly-weather-forecast/26495_pc?day=2&hbhhour=4&lang=en-us"
    },
    {
      "DateTime": "2018-10-04T05:00:00-05:00",
      "EpochDateTime": 1538647200,
      "WeatherIcon": 38,
      "IconPhrase": "Mostly cloudy",
      "IsDaylight": false,
      "Temperature": {
        "Value": 63,
        "Unit": "F",
        "UnitType": 18
      },
      "PrecipitationProbability": 34,
      "MobileLink": "http://m.accuweather.com/en/us/chicago-il/60608/hourly-weather-forecast/26495_pc?day=2&lang=en-us",
      "Link": "http://www.accuweather.com/en/us/chicago-il/60608/hourly-weather-forecast/26495_pc?day=2&hbhhour=5&lang=en-us"
    },
    {
      "DateTime": "2018-10-04T06:00:00-05:00",
      "EpochDateTime": 1538650800,
      "WeatherIcon": 38,
      "IconPhrase": "Mostly cloudy",
      "IsDaylight": false,
      "Temperature": {
        "Value": 60,
        "Unit": "F",
        "UnitType": 18
      },
      "PrecipitationProbability": 34,
      "MobileLink": "http://m.accuweather.com/en/us/chicago-il/60608/hourly-weather-forecast/26495_pc?day=2&lang=en-us",
      "Link": "http://www.accuweather.com/en/us/chicago-il/60608/hourly-weather-forecast/26495_pc?day=2&hbhhour=6&lang=en-us"
    },
    {
      "DateTime": "2018-10-04T07:00:00-05:00",
      "EpochDateTime": 1538654400,
      "WeatherIcon": 6,
      "IconPhrase": "Mostly cloudy",
      "IsDaylight": true,
      "Temperature": {
        "Value": 57,
        "Unit": "F",
        "UnitType": 18
      },
      "PrecipitationProbability": 22,
      "MobileLink": "http://m.accuweather.com/en/us/chicago-il/60608/hourly-weather-forecast/26495_pc?day=2&lang=en-us",
      "Link": "http://www.accuweather.com/en/us/chicago-il/60608/hourly-weather-forecast/26495_pc?day=2&hbhhour=7&lang=en-us"
    },
    {
      "DateTime": "2018-10-04T08:00:00-05:00",
      "EpochDateTime": 1538658000,
      "WeatherIcon": 7,
      "IconPhrase": "Cloudy",
      "IsDaylight": true,
      "Temperature": {
        "Value": 56,
        "Unit": "F",
        "UnitType": 18
      },
      "PrecipitationProbability": 17,
      "MobileLink": "http://m.accuweather.com/en/us/chicago-il/60608/hourly-weather-forecast/26495_pc?day=2&lang=en-us",
      "Link": "http://www.accuweather.com/en/us/chicago-il/60608/hourly-weather-forecast/26495_pc?day=2&hbhhour=8&lang=en-us"
    }]
        }
    },
    mounted(){
        // if(this.configData.accuWeather.getForecastUrl() != null){
        // axios.get(this.configData.accuWeather.getForecastUrl())
        // .then((response) => {
        //          var tempResponse = response.data;
        //      for(var index in tempResponse){
        //          this.hours[index] = tempResponse[index];
        //          this.hours[index].id = index;
        //         console.log(this.hours[index]);
        //      }
        //     });
        // }
        // else{
        //     console.log("Couldn't get url for forecastUrl from config.js file");
        // }
    }
}
</script>
