/*
 * This file holds configuration data like urls, apikeys etc.
 */
var config = {

    //More information on AccuWeather api : https://developer.accuweather.com/apis 
    //Use this url to get your location key (api key needed): https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/search
    //Give your zipcode for 'q' in the request

    accuWeather: {
        forecastUrl:'http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/',
        imageUrl: 'https://developer.accuweather.com/sites/default/files/',
        apikey: '<<your_api_key_goes_here>>',     
        locationKey: '26495_PC',
        //metric: true = Celsius
        metric:'true',
        getForecastUrl: function(){
            return this.forecastUrl + this.locationKey +'?apikey=' + this.apikey + '&metric=' + this.metric; 
        },
        getImageUrl: function(iconNumber){
            return this.imageUrl + iconNumber + '-s.png'
        }
    },

    //More information on currency converter API https://free.currencyconverterapi.com/ 
    currencyConverter:{
        url:'http://free.currencyconverterapi.com/api/v5/convert?q=',
        fromCurrency: 'USD',
        toCurrency: 'INR',
        getUrl: function(){
            return this.url + this.fromCurrency + '_' + this.toCurrency + '&compact=y';
        }
    }
}
export default config