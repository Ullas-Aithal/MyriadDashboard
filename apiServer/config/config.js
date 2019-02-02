/*
 * This file holds configuration data like urls, apikeys etc.
 */
module.exports  = {
    domainName: 'http://localhost:3000/',
    darkSky:{
        forecastUrl:'https://api.darksky.net/forecast/',
        latAndLong:'41.956710,-87.729778',
        exclude:'minutely,daily',
        //si for km/celcius
        units:'si',
        apiKey: '<<your api key>>',    
        getForecastUrl:function(){
            return this.forecastUrl + this.apiKey + "/" + this.latAndLong + "/?exclude=" + this.exclude + "&units=" + this.units
        }
    },
    meetups:{
        url:'https://api.meetup.com/find/groups?&sign=true&photo-host=public&upcoming_events=true',
        zipCode: '60641',
        category: '34',
        radius: '50',
        apiKey: '<<your api key>>',   
        page:'5',
        getUrl: function(){
            return this.url + "&zip=" + this.zipCode + "&radius=" + this.radius + "&category=" + this.category + "&key=" + this.apiKey + "&page=" + this.page;
        }
    },
    cta:{
        north:{
            url:'https://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?outputType=JSON',
            mapid: '40550',
            route: 'blue',
            stpid: '30107',
            apiKey: '<<your api key>>',     
            getUrl: function(){
                return this.url + "&mapid=" + this.mapid + "&rt=" + this.route + "&key=" + this.apiKey + "&stpid=" + this.stpid;
            }
        },
        south:{
            url:'https://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?outputType=JSON',
            mapid: '40550',
            route: 'blue',
            stpid: '30108',
            apiKey: '<<your api key>>',     
            getUrl: function(){
                return this.url + "&mapid=" + this.mapid + "&rt=" + this.route + "&key=" + this.apiKey + "&stpid=" + this.stpid;
             }
            }
    },
    guardian:{
        url: 'http://content.guardianapis.com/search?&order-by=newest&show-fields=all&section=world&',
        apiKey: '<<your api key>>',
        getUrl: function(){
            return this.url + "api-key=" + this.apiKey;
        }
    }
}