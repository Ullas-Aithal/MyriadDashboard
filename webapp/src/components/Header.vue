<template>
<v-layout align-start pa-2 justify-center row grid-list-xl>
    <v-flex>
        <v-card>
            <v-card-title>
                <h1>{{heading}}</h1>
            </v-card-title>        
        </v-card>
    </v-flex>
</v-layout> 
</template>
<script>
export default {
    name:'Header',
    data(){
        return{
            heading:'Weather'
        }
    }
}
</script>
