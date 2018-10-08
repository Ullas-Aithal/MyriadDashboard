<template>
<v-container fluid grid-list-md text-xs-center>
            <v-layout row>
    <v-flex>
        <v-card>
            <v-card-title>
                <h1>{{datenow.getHours()}} : {{datenow.getMinutes()}} : {{datenow.getSeconds()}}</h1>
            </v-card-title>        
        </v-card>
    </v-flex>
</v-layout> 
</v-container>
</template>
<script>
export default {
    name:'Header',
    data(){
        return{
            heading:'Weather',
            datenow: '',
        }
    },
    methods: {
    time() {
      var self = this
      this.datenow = new Date();
      setInterval(self.time, 1000)
    },
  },
  mounted: function() {
    this.time()
  }
}
</script>
