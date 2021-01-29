<template class="container">
    <v-layout>
        <TheMenu>
        </TheMenu>
        <v-col>
                <v-row >
                        <TheHeader>
                        </TheHeader>
                </v-row>       
                <v-row class="item">
                        <Homepage>
                        </Homepage> 
                </v-row>   
        </v-col>
    </v-layout>
</template>

<script>
  import TheMenu from './TheMenu.vue'
  import TheHeader from './TheHeader.vue'
  import Homepage from './Homepage.vue'


  export default {
      components: {
          TheMenu,
          TheHeader,
          Homepage,
      },
  }
</script>

<style >

.container {
        display: flex;

        max-width: 100%;
        max-height: 100%;
}

.item {
        display: flex;
        height: 100%;
        }
</style>