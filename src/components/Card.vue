<template>
  <div class="card mb-4">
    <div class="inner">
      <img class="img-fluid" :src="pathImg()" :alt="pokemonName">
      <div class="pt-2 pokemon-name">
        {{pokemonName}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    pokemonName: String,
    id: Number
  },
  data(){
    return{
      // imageUrl: 'https://pokeres.bastionbot.org/images/pokemon/',
      imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
      
    }
  },
  methods:{
    pathImg(){
      return this.imageUrl + (this.id + 1) +'.png'
    }
  }
}
</script>


//------------------------------------------- 
<style scoped lang="scss">
  .card{
    background-color: transparent;
    border: none;
    .inner{
      border: 6px solid yellow;
      border-radius: 10px;
      padding: 10px;
      background-color: #42b983;
      text-transform: uppercase;
    }
  }
</style>
