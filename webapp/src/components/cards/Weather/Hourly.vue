<template>
    <v-card  class="card-height">
        <v-card-title primary-title class="justify-center">
            <div align-center>
                <h3 class="headline mb-0">{{time.hours}} {{time.suffix}}</h3>
                <img v-bind:src="weatherImageUrl"
                    contain
                >
                <h3>{{hour.Temperature.Value.toFixed(0)}}°</h3>
                <span class="weather-icon-style">
                <img src="https://cdn0.iconfinder.com/data/icons/climatic-equipment-filled-line/614/7891_-_Humidity-512.png" height="20px" width="20px">
                <p> {{hour.PrecipitationProbability}}%</p>
                </span>
            </div>
        </v-card-title>
        <v-card-actions class="card-bottom-background justify-center">
            <p>{{hour.IconPhrase}}</p>
        </v-card-actions>
    </v-card>
</template>


<style>
.card-margin {
    margin-left:3px;
    margin-right:3px;
}
.weather-icon-style {
    display: inline-flex;
    justify-content: center;
}
.card-bottom-background {
    background: teal;
}
</style>
<script>
import config from '../../../config/config'
//import axios from 'axios'    
    export default {
        name: "Hourly",
        props: {    
            hour: {}
        },
    
        data() {    
            return {    
                time: {    
                    hours: 0,    
                    suffix: "null"    
                },
                configData: config,
                weatherImageUrl: "",
            };    
        },
    
        mounted() {
            //Covert Epoch time to normal DatetTime format
            var dateTime = new Date(0); // The 0 there is the key, which sets the date to the epoch
            var weatherIconString = "null";
            dateTime.setUTCSeconds(this.hour.EpochDateTime);    
            this.time.hours = dateTime.getHours();

            //Converting to 12 hr format and appending it with AM/PM    
            if (this.time.hours >= 12) {
                if(this.time.hours > 12){
                    this.time.hours -= 12;
                }    
                this.time.suffix = "PM";    
            } else if (this.time.hours == 0) {
                this.time.hours = 12;    
                this.time.suffix = "AM";
            } else {    
                this.time.suffix = "AM";
            }
            //Add leading zeros for values less than 10
            if(this.hour.WeatherIcon < 10){
                weatherIconString = '0' +  this.hour.WeatherIcon;
            }
            else{
                weatherIconString = this.hour.WeatherIcon;
            }
            this.weatherImageUrl = this.configData.accuWeather.getImageUrl(weatherIconString);
            //this.weatherImage = "https://developer.accuweather.com/sites/default/files/" + weatherIconString + "-s.png"
    
        }
    
    };
</script>
