<template>
  <div
    class="card mb-4 p-5"
    v-if="
      pokemonSearchedDetails !== {} &&
      pokemonSearchedDetails.types !== undefined
    "
  >
    <div class="row pb-5 header bold">
      <div class="col-8 text-start">
        <div>
          id# {{ pokemonSearchedDetails.id }} {{ pokemonSearchedDetails.name }}
        </div>
      </div>
      <div class="col-4 text-end">
        <div>Exp. {{ pokemonSearchedDetails.base_experience }}</div>
      </div>
    </div>
    <div>
      <img
        class="img-fluid mb-4"
        :src="pathImg()"
        :alt="pokemonSearchedDetails.name"
      />
    </div>

    <div class="details">
      <div class="col-12 text-start">
        <span class="bold">Type:</span>

        <span class=""
          v-for="(type, index) in pokemonSearchedDetails.types"
          :key="index"
        >
          {{ type.type.name }}
        </span>
      </div>
      <div class="col-12 text-start">
        <span class="bold">Ability:</span>
        <span
          v-for="(abilities, index) in pokemonSearchedDetails.abilities"
          :key="index"
        >
          {{ abilities.ability.name }}
        </span>
      </div>
      <div class="col-12 text-start">
        <span class="bold">Held items:</span>
        <span
          v-for="(item, index) in pokemonSearchedDetails.held_items"
          :key="index"
        >
          {{ item.item.name }}
        </span>
      </div>

    </div>
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
      // imageUrl: 'https://pokeres.bastionbot.org/images/pokemon/',
      imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
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

  img {
    width: 100px;
  }

  .bold {
    font-weight: bold;
  }
  .header {
    font-size: 26px;
  }

  background-color: #42b983;
  border: 20px solid yellow;
  text-transform: uppercase;
  border-radius: 10px;
  .details {
    font-size: 20px;

  }
}
</style>
