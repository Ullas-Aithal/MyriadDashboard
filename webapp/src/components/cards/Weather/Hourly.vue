<template>
    <p>{{id}}</p>
</template>
<script>
// import axios from 'axios'
export default {
    name:'Hourly',
    props: {
        id:Number
    },
    data(){
        return{
            heading:'Weather For Today',
            weatherResponse:'null'
        }
    },
    mounted(){
        // axios.get('http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/26495_PC?apikey=HItKu48hwY5PJYe5j90AvBAL3vJ0q39t')
        // .then(response => (this.weatherResponse = response));
    }
}
</script>
