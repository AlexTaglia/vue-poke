<template>
  <div class="home container">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-12 col-md-12	col-lg-6">
        
        <SearchInput 
          class="mb-5" 
          @search="getSearch" 
        />

        <Detail 
          :pokemonSearchedDetails="pokemonSearchedDetails"
        />
        
      </div>
    </div>

    
  </div>
</template>


//------------------------------------------- 
<script>
import SearchInput from '@/components/SearchInput.vue'
import Detail from '@/components/Detail.vue'
import axios from 'axios'

export default {
  name: 'About',
  components: {
    SearchInput,
    Detail
  },
  data (){
    return {
      pokemonSearchedDetails: {},
      apiUrl: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20'
    }
  },

  methods:{

    getApi(api){
      axios.get(api).then((result)=>{
        this.nextUrl = result.data.next
        this.pokemonList = result.data.results;
        console.log(`getApi function started`)
        console.log(this.pokemonList)
      })
    },

    getSearch(pokemonSearched){
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonSearched}`).then((result)=>{
        this.pokemonSearchedDetails = result.data;
        console.log(`getSearch function started`)
        console.log(this.pokemonSearchedDetails)
       
      })
    },
  }
}
</script>

<style lang="postcss" scoped>
 .home{
   height: calc(100vh - 80px);
   /* overflow-y: auto; */
 }
</style>