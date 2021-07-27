<template>
  <div class="card mb-4 p-5" v-if="pokemonSearchedDetails !== {} && pokemonSearchedDetails.types !== undefined">
    <div class="row pb-5 header">
      <div class="col-6 text-start">
        <div>
          id# {{ pokemonSearchedDetails.id }} {{ pokemonSearchedDetails.name }}
        </div>
      </div>
      <div class="col-6 text-end">
        <div>Exp. {{ pokemonSearchedDetails.base_experience }}</div>
      </div>
      <div class="col-12 text-start">
        <div>Type: {{ pokemonSearchedDetails.types[0].type.name }}</div>
      </div>
    </div>
    <img class="img-fluid" :src="pathImg()" :alt="pokemonSearchedDetails.name" />

  </div>
</template>

<script>
export default {
  name: "Detail",
  props: {
    pokemonSearchedDetails: Object,
  },
  data() {
    return {
      imageUrl: `https://pokeres.bastionbot.org/images/pokemon/`,
    };
  },
  methods: {
    pathImg() {
      return this.imageUrl + this.pokemonSearchedDetails.id + ".png";
    },
  },
};
</script>


//------------------------------------------- 
<style scoped lang="scss">
.card {
  .header {
    font-size: 26px;
  }

  background-color: #42b983;
  border: 20px solid yellow;
  text-transform: uppercase;
  border-radius: 10px;
  .details {
    font-size: 26px;
  }
}
</style>
