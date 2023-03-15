<template>
  <section class="tooltip tooltip-top" :data-tip="type">
    <article
      :class="`${type} flex aspect-square h-6 items-center justify-center overflow-hidden rounded-full transition-all duration-200 hover:scale-125`"
    >
      <img :alt="type" :src="types.get(type)" :class="`h-6 w-4`" />
    </article>
  </section>
</template>

<script lang="ts" setup>
import bug from "../assets/bug.svg";
import dark from "../assets/dark.svg";
import dragon from "../assets/dragon.svg";
import electric from "../assets/electric.svg";
import fairy from "../assets/fairy.svg";
import fighting from "../assets/fighting.svg";
import fire from "../assets/fire.svg";
import flying from "../assets/flying.svg";
import ghost from "../assets/ghost.svg";
import grass from "../assets/grass.svg";
import ground from "../assets/ground.svg";
import ice from "../assets/ice.svg";
import normal from "../assets/normal.svg";
import poison from "../assets/poison.svg";
import psychic from "../assets/psychic.svg";
import rock from "../assets/rock.svg";
import steel from "../assets/steel.svg";
import water from "../assets/water.svg";

defineProps({
  type: {
    type: String,
    required: true,
  },
});

const types = new Map()
  .set("bug", bug)
  .set("dark", dark)
  .set("dragon", dragon)
  .set("electric", electric)
  .set("fairy", fairy)
  .set("fighting", fighting)
  .set("fire", fire)
  .set("flying", flying)
  .set("ghost", ghost)
  .set("grass", grass)
  .set("ground", ground)
  .set("ice", ice)
  .set("normal", normal)
  .set("poison", poison)
  .set("psychic", psychic)
  .set("rock", rock)
  .set("steel", steel)
  .set("water", water);
</script>

<style scoped>
.bug {
  background: #92bc2c;
  box-shadow: 0 0 20px #92bc2c;
}

.dark {
  background: #595761;
  box-shadow: 0 0 20px #595761;
}

.dragon {
  background: #0c69c8;
  box-shadow: 0 0 20px #0c69c8;
}

.electric {
  background: #f2d94e;
  box-shadow: 0 0 20px #f2d94e;
}

.fire {
  background: #fba54c;
  box-shadow: 0 0 20px #fba54c;
}

.fairy {
  background: #ee90e6;
  box-shadow: 0 0 20px #ee90e6;
}

.fighting {
  background: #d3425f;
  box-shadow: 0 0 20px #d3425f;
}

.flying {
  background: #a1bbec;
  box-shadow: 0 0 20px #a1bbec;
}

.ghost {
  background: #5f6dbc;
  box-shadow: 0 0 20px #5f6dbc;
}

.grass {
  background: #5fbd58;
  box-shadow: 0 0 20px #5fbd58;
}

.ground {
  background: #da7c4d;
  box-shadow: 0 0 20px #da7c4d;
}

.ice {
  background: #75d0c1;
  box-shadow: 0 0 20px #75d0c1;
}

.normal {
  background: #a0a29f;
  box-shadow: 0 0 20px #a0a29f;
}

.poison {
  background: #b763cf;
  box-shadow: 0 0 20px #b763cf;
}

.psychic {
  background: #fa8581;
  box-shadow: 0 0 20px #fa8581;
}

.rock {
  background: #c9bb8a;
  box-shadow: 0 0 20px #c9bb8a;
}

.steel {
  background: #5695a3;
  box-shadow: 0 0 20px #5695a3;
}

.water {
  background: #539ddf;
  box-shadow: 0 0 20px #539ddf;
}
</style>
