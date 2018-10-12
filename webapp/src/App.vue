<template>
  
    <v-app v-bind:style="{ backgroundImage: 'url(' + 'https://www.sciencedaily.com/images/2016/11/161130141053_1_900x600.jpg' + ')' }">
      <v-content>      
          <Header/>
          <Body />
      </v-content>
      <v-footer :fixed="fixed" app>
        <span>&copy; 2018</span>
      </v-footer>
    </v-app>
  
</template>

<script>
import Header from './components/Header'
import Body from './components/Body'
//import moment from 'vue-moment'
export default {
  name: 'App',
  components: {
    Header,
    Body
  },
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>