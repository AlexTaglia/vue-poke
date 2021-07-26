<template>
  <div>
    
    <input 
      type="text" 
      placeholder="Search" 
      v-model="pokemonSearched" 
      @keyup.enter="$emit('search', pokemonSearched)">

  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    
  },
  data (){
    return{
      pokemonSearched:''
    }
  }
}
</script>


//------------------------------------------- 
<style scoped lang="scss">


</style>