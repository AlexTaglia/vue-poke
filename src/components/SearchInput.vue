<template>
  <div>
    <div class="input">
      <input
        type="text"
        placeholder="Search"
        v-model="pokemonSearched"
        @keyup.enter="$emit('search', pokemonSearched)"
      />
      <button @click="resetInput" class="btn btn-close"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {},
  data() {
    return {
      pokemonSearched: "",
    };
  },
  methods:{
    resetInput(){
      this.pokemonSearched = ""
    }
  }
};
</script>


//------------------------------------------- 
<style scoped lang="scss">
  input{
  }
</style>