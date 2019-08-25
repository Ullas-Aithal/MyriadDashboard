<template>
    <v-flex v-if="bookList.length > 0" xs3 text-xs-center>
    <v-card  class="max-card-height white--text" :style="{'background': 'rgba(0,0,0,0.3)'}">
    <v-card-title class="justify-center">
        <h1 primary-title class="display-2">Library Due</h1>
    </v-card-title>
    <v-carousel hide-controls hide-delimiters class="max-card-height box-shadow-none ">
        <v-carousel-item contain="true" 
            v-for="(book,index) in bookList"
            :key="index">
            <h3 class=" white--text text-overflow" :style="{'text-overflow':'ellipsis'}">{{book.book_title}}</h3>
            <h5 class="white--text text-overflow body-1">Due on {{ book.due_date}}</h5>
            <h3 class=" white--text text-overflow body-1" >{{book.days_remaining}}</h3>
            </v-carousel-item>
    </v-carousel>
        </v-card>
    </v-flex>
</template>
<style>
.max-card-height{
    min-height: 150px !important;
}
.box-shadow-none {
    box-shadow: none !important;
}
.text-overflow {
    white-space: nowrap !important;
    text-overflow: ellipsis !important;
    display: block !important;
    overflow: hidden !important;
    margin-left: 10px !important;
    margin-right: 1px !important;
}
</style>
<script>
import axios from 'axios'
import config from '../../../config/config'
import moment from 'moment'
export default {
    name: 'CPL',
    data(){
        return{
            configData:config,
            moment: moment,
            bookList:[]
        }
    },
    filters: {
        moment:moment
    },
    methods:{
        getCplData(){
        var options = {
        url: this.configData.pythonDomainName + 'cpl',
        method: 'GET'
      }
        axios(options)
        .then((response) => {
            if(response.status == 200){
                console.log(response.data);
                this.bookList = response.data
            }
            else {
                 /* eslint-disable no-console */
                    console.log("Error. Status code : " + response.status + ". Response : " + response);
                    /* eslint-enable no-console */
            }
        })
        }
    },
    mounted(){
        this.getCplData();
        //Run everyday at 5 am
        setInterval(() => this.getCplData(),  moment("24:00:00", "hh:mm:ss").add(5, 'hours').diff(moment(), 'seconds'));
    }
}
</script>