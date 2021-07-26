<template>
  <div class="card mb-4">
    <div class="inner">
      <img class="img-fluid" :src="imageUrl + (id + 1) +'.png'" alt="">
      <div class="pt-2">
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
      imageUrl: 'https://pokeres.bastionbot.org/images/pokemon/',
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
      border-radius: 10px;
      padding: 20px;
      background-color: #42b983;
    }
  }
</style>
