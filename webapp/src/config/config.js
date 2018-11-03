/*
 * This file holds configuration data like urls, apikeys etc.
 */
var config = {

    //More information on AccuWeather api : https://developer.accuweather.com/apis 
    //Use this url to get your location key (api key needed): https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/search
    //Give your zipcode for 'q' in the request

    accuWeather: {
        forecastUrl:'https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/',
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
    darkSky:{
        forecastUrl:'https://api.darksky.net/forecast/',
        latAndLong:'41.956710,-87.729778',
        exclude:'minutely,daily',
        //si for km/celcius
        units:'si',
        apiKey: '<<your_api_key_goes_here>>',    
        getForecastUrl:function(){
            return this.forecastUrl + this.apiKey + "/" + this.latAndLong + "/?exclude=" + this.exclude + "&units=" + this.units
        }
    },

    //More information on currency converter API https://free.currencyconverterapi.com/ 
    currencyConverter:{
        url:'https://free.currencyconverterapi.com/api/v5/convert?q=',
        fromCurrency: 'USD',
        toCurrency: 'INR',
        getUrl: function(){
            return this.url + this.fromCurrency + '_' + this.toCurrency + '&compact=y';
        }
    },

    meetups:{
        url:'https://api.meetup.com/find/groups?&sign=true&photo-host=public&upcoming_events=true',
        zipCode: '60641',
        category: '34',
        radius: '50',
        apikey: '<<your_api_key_goes_here>>',     
        page:'5',
        getUrl: function(){
            return this.url + "&zip=" + this.zipCode + "&radius=" + this.radius + "&category=" + this.category + "&key=" + this.apikey + "&page=" + this.page;
        }
    },
    cta:{
        north:{
        url:'https://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?outputType=JSON',
        mapid: '40550',
        route: 'blue',
        stpid: '30107',
        apikey: '<<your_api_key_goes_here>>',     
        getUrl: function(){
            return this.url + "&mapid=" + this.mapid + "&rt=" + this.route + "&key=" + this.apikey + "&stpid=" + this.stpid;
         }
        },
        south:{
            url:'https://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?outputType=JSON',
            mapid: '40550',
            route: 'blue',
            stpid: '30108',
            apikey: '<<your_api_key_goes_here>>',     
            getUrl: function(){
                return this.url + "&mapid=" + this.mapid + "&rt=" + this.route + "&key=" + this.apikey + "&stpid=" + this.stpid;
             }
            }
    },
    guardian:{
        url: 'http://content.guardianapis.com/search?&order-by=newest&show-fields=all&section=world&',
        apikey: '<<your_api_key_goes_here>>',
        getUrl: function(){
            return this.url + "api-key=" + this.apikey;
        }
    }
}
export default config