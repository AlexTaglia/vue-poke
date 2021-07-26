<template>
  <div class="home container">
    <!-- -------------------------- -->
    <!-- <Search class="mb-5" @search="getString" /> -->

    <!-- -------------------------- -->
    <div class="row">
      <Card class="col-12	col-sm-6 col-md-4	col-lg-2" 
      v-for="(pokemon, index) in pokemonList"
      :key="index"
      :id="index"
      :pokemonName="pokemon.name"
      />
      <!-- <div id="scoll-trigger" ref="infinitescrolltrigger">
   
      </div> -->
    </div>
    <button class="btn btn-primary" @click="next">carica di più</button>
  </div>
</template>


//------------------------------------------- 
<script>
import Card from '@/components/Card.vue'
// import Search from '@/components/Search.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    Card,
    // Search
  },
  data (){
    return {
      pokemonList:[],
      nextUrl:'',
      apiUrl: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20'
    }
  },

  created (){
    this.getApi(this.apiUrl);
  },
  
  mounted() {
  },
  
  methods:{

    getApi(api){
      axios.get(api).then((result)=>{
        this.nextUrl = result.data.next
        this.pokemonList = result.data.results;
        console.log(`getApi function started`)
      })
    },

    next(){
      // chiamata Axios
      axios.get(this.nextUrl).then((result)=>{
        // preparo un array temporaneo che ciclero pushando l'elemento nell'array base "pokemon list"
        let tempArray = []
        // prendo il next url per i successivi 20 risultati
        this.nextUrl = result.data.next
        // metto i miei risultati nel'array temporaneo
        tempArray = result.data.results;
        // per ogni elemento del mio array temporaneo, lo pusho nell'array base "pokemon list"
        tempArray.forEach(element => {
          this.pokemonList.push(element)
        });
        console.log(tempArray)
        console.log(`next function started`)
      })
    }
  }
}
</script>

<style lang="postcss" scoped>
 .home{
   height: calc(100vh - 80px);
   overflow-y: auto;
 }
</style>