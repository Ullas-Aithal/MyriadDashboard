<template>
    <!-- <v-app dark> -->
    <v-app :style="{'background-image': 'url(' + require('./assets/background.jpg') + ')', 'background-repeat': 'no-repeat', 'background-size':'cover', }">
      <v-content>
      <!-- <v-content :style="{'opacity': '0.8'}"> -->
          <Header/>
          <Body />
      </v-content>
      <v-footer dark :fixed="fixed" app>
        <span>&copy; 2018 Ullas Aithal</span>
      </v-footer>
    </v-app>  
</template>

<style>
html {
  overflow: hidden;
}
</style>
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