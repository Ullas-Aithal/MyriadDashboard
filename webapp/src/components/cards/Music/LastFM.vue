<template>
<v-flex xs3 text-xs-center class="padding-top-8">
    <v-card class="max-card-height white--text" :style="{'background': 'rgba(0,0,0,0.3)'}" >
            <v-layout row>         
            <v-flex xs3 class="no-padding margin-10">                    
                <img
                :src="currentAlbumImage"
                height="100px"
                >
                <v-badge left v-if="trackNumber > 0">
                    <span slot="badge">{{trackNumber}}</span>
                </v-badge>
            </v-flex>
            <v-flex xs8>
                <v-card-title primary-title>
                <div class="text-overflow " :style="{'text-overflow':'ellipsis'}">
                    <h3 class="text-overflow title" :style="{'text-overflow':'ellipsis'}">{{currentTrack}}</h3>
                    <h4 class="text-overflow subheading" :style="{'text-overflow':'ellipsis'}">{{currentArtist}}</h4>
                </div>
                </v-card-title>
            </v-flex>
            </v-layout>
        <v-divider light></v-divider>
        <h3>Top 20 </h3>
    </v-card>            
</v-flex>
</template>
<style>
.padding-top-8 {
    padding-top: 8px !important;
}
.max-card-height{
    min-height: 150px !important;
}
.no-padding{
    padding: 0px !important;
}
.margin-10{
    margin: 10px !important;
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
export default {
    name: 'LastFM',
    data() {
        return {
            topTracks:'',
            configData: config,
            alternate: 'null',
            currentTrack:'',
            currrentArtist: '',
            currentAlbumImage: '',
            trackNumber: 0
        }
    },
    methods:{
        getTopTracks(){          
            var options = {
                url: this.configData.domainName + 'music',
                method: 'POST'
            }
                axios(options)
                .then((response) => {
                if(response.status == 200){
                    this.topTracks = response.data;
                }
                else{
                    /* eslint-disable no-console */
                    console.log("Error. Status code : " + response.status + ". Response : " + response);
                    /* eslint-enable no-console */
                }
                });
        },
        getNextTrack(){
            //Roate through 20 tracks
            if(this.trackNumber >= 20){
                this.trackNumber = 0;
            }
            this.currentTrack = this.topTracks.tracks.track[this.trackNumber].name;
            this.currentArtist = this.topTracks.tracks.track[this.trackNumber].artist.name;
            this.currentAlbumImage = this.topTracks.tracks.track[this.trackNumber].image[2]['#text']
            this.trackNumber = this.trackNumber + 1;              
        }
    },
    mounted(){
        this.getTopTracks();
        //Get tracks every 12 hours
        setInterval(() => this.getNextTrack(), 60*60*12*1000);
        //Rotate track information every 5 seconds
        setInterval(() => this.getNextTrack(), 5*1*1000);
    }
}

</script>